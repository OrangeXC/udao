import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  public searchText = '';
  public query = '';
  public entries = [];
  public language = '';
  public isLoading = false;
  public isResultShow = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    public toastrService: NbToastrService
  ) {}

  onKey() {
    const value = this.searchText;

    this.query = '';
    this.entries = [];
    this.language = '';
    this.isLoading = true;
    this.isResultShow = true;

    if (!value) {
      return;
    }

    // before 2017-12
    // after can use https://github.com/jokermonn/-Api/blob/master/KingsoftDic.md
    const apiURL = encodeURIComponent(`http://dict.youdao.com/suggest?q=${value}&le=eng&num=20&doctype=json`);

    this.http.get(`/?url=${apiURL}`)
      .subscribe(res => {
        const data = res['data'];

        this.query = data['query'];

        if (data['entries'] && data['entries'].length) {
          this.entries = data['entries'];

        } else {
          this.isResultShow = false;

          this.toastrService.show(`未查到关键词 ${value}`, '查询失败', {
            status: 'danger'
          });
        }

        if (data['language']) {
          this.language = data['language'];
        }

        this.isLoading = false;
      });
  }

  gotoDetail({ entry }: { entry: string }): void {
    this.router.navigate([`/detail/${entry}`]);
  }
}
