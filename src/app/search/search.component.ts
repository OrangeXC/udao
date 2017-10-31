import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  public value = ''
  public query = ''
  public entries = []
  public language = ''
  public loading = false

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onKey (value: string) {
    this.query = ''
    this.entries = []
    this.language = ''

    if (!value) return

    this.loading = true

    // before 2017-12
    // after can use https://github.com/jokermonn/-Api/blob/master/KingsoftDic.md
    let apiURL = encodeURIComponent(`http://dict.youdao.com/suggest?q=${value}&le=eng&num=20&doctype=json`)

    this.http.get(`/?url=${apiURL}`)
      .subscribe(res => {
        const data = res['data']

        this.query = data['query']

        if (data['entries']) {
          this.entries = data['entries']
        }

        if (data['language']) {
          this.language = data['language']
        }

        this.loading = false
      });
  }

  gotoDetail ({ entry }) {
    this.router.navigate([`/detail/${entry}`])
  }
}
