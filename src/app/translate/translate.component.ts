import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})

export class TranslateComponent {
  public value = '';
  public query = '';
  public explains = [];
  public translation = [];
  public web = [];

  constructor(
    private http: HttpClient
  ) {}

  onEnter(value: string) {
    if (!value) {
      return;
    }

    this.query = '';
    this.explains = [];
    this.translation = [];
    this.web = [];

    // before 2017-12
    // after can use https://github.com/jokermonn/-Api/blob/master/KingsoftDic.md
    const apiURL = encodeURIComponent(
      `https://fanyi.youdao.com/openapi.do?keyfrom=f2ec-org&key=1787962561&type=data&doctype=json&version=1.1&q=${value}`
    );

    this.http.get(`/?url=${apiURL}`)
      .subscribe(data => {
        this.query = data['query'];

        if (data['basic'] && data['basic']['explains']) {
          this.explains = data['basic']['explains'];
        }

        if (data['translation']) {
          this.translation = data['translation'];
        }

        if (data['web']) {
          this.web = data['web'];
        }
      });
  }
}
