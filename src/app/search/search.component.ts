import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  public value = '';
  public query = '';
  public entries = [];
  public language = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  onKey(box) {
    box.blur();
    const value = box.value;

    this.query = '';
    this.entries = [];
    this.language = '';

    if (!value) {
      return;
    }

    // before 2017-12
    // after can use https://github.com/jokermonn/-Api/blob/master/KingsoftDic.md
    const apiURL = encodeURIComponent(`http://dict.youdao.com/suggest?q=${value}&le=eng&num=20&doctype=json`);

    this.http.get(`/?url=${apiURL}`)
      .subscribe(res => {
        const data = res.data;

        this.query = data.query;

        if (data.entries && data.entries.length) {
          this.entries = data.entries;
        } else {
          this.snackBar.open(`未查到关键词 ${value}`, '', {
            verticalPosition: 'top',
            duration: 3000
          });
        }

        if (data.language) {
          this.language = data.language;
        }
      });
  }

  gotoDetail({ entry }: { entry: string }): void {
    this.router.navigate([`/detail/${entry}`]);
  }
}
