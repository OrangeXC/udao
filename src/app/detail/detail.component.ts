import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router,  ActivatedRoute, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  public word = ''

  // 单词与音标
  public simple = {
    query: '',
    word: [{}]
  }

  // 释义列表
  public ec = []

  // 网络释义
  public webTrans = []

  // 专业释义
  public special = {}

  // 英英释义
  public ee = {}

  // 21世纪大英汉词典
  public ec21 = []

  // 柯林斯英汉双解大辞典
  public collins = {}

  // 朗文当代高级英语辞典内容
  public longman = {}

  // 词组短语
  public phrs = []

  // 同近义词
  public syno = []

  // 同根词
  public relWord = {}

  // 双语例句
  public blngSentsPart = []

  // 权威例句
  public authSentsPart = []

  // 原声例句
  public mediaSentsPart = []

  // 百科
  public wiki = {}

  public loading = false

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit () {
    this.route.params.subscribe((params) => {
      this.loading = true

      const apiURL = `https://dict.youdao.com/jsonapi?q=${params['word']}`

      this.http.get(`/?url=${encodeURIComponent(apiURL)}`)
      .subscribe(res => {
        this.simple = res['simple']
        this.ec = res['ec']['word'][0]['trs'].map(item => item['tr'][0]['l']['i'][0])
        this.webTrans = res['web_trans']['web-translation']
        this.special = res['special']
        this.ee = res['ee']
        this.ec21 = res['ec21']['word']
        this.collins = res['collins']['collins_entries'][0]
        this.phrs = res['phrs']['phrs']
        this.syno = res['syno']['synos']
        this.relWord = res['rel_word']
        this.blngSentsPart = res['blng_sents_part']['sentence-pair']
        this.authSentsPart = res['auth_sents_part']['sent']
        this.mediaSentsPart = res['media_sents_part']['sent']

        this.loading = false
      })
    })
  }
}
