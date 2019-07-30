import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const DETAIL_KEY = makeStateKey('detail');

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit, OnDestroy {
  details: any;

  public input = '';

  // 单词与音标
  public simple = {
    query: '',
    word: [{}]
  };

  // 释义列表
  public ec = [];

  // 网络释义
  public webTrans = [];

  // 专业释义
  public special = {};

  // 英英释义
  public ee = {};

  // 21世纪大英汉词典
  public ec21 = [];

  // 柯林斯英汉双解大辞典
  public collins = {};

  // 朗文当代高级英语辞典内容
  public longman = {};

  // 词组短语
  public phrs = [];

  // 同近义词
  public syno = [];

  // 同根词
  public relWord = {};

  // 双语例句
  public blngSentsPart = [];

  // 权威例句
  public authSentsPart = [];

  // 原声例句
  public mediaSentsPart = [];

  // 百科
  public wiki = {};

  constructor(
    private http: HttpClient,
    private state: TransferState,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  transData(res) {
    this.input = res.input;

    this.simple = res.simple ? res.simple : {
      query: '',
      word: [{}]
    };

    this.ec = res.ec && res.ec.word && res.ec.word[0] && Array.isArray(res.ec.word[0].trs)
      ? res.ec.word[0].trs.map(item => item.tr[0].l.i[0])
      : [];

    this.webTrans = res.web_trans && res.web_trans['web-translation']
      ? res.web_trans['web-translation']
      : [];

    this.special = res.special ? res.special : {};

    this.ee = res.ee ? res.ee : {};

    this.ec21 = res.ec21 && res.ec21.word
      ? res.ec21.word
      : [];

    this.collins = res.collins && res.collins.collins_entries && res.collins.collins_entries[0]
      ? res.collins.collins_entries[0]
      : {};

    this.phrs = res.phrs && res.phrs.phrs
      ? res.phrs.phrs
      : [];

    this.syno = res.syno && res.syno.synos
      ? res.syno.synos
      : [];

    this.relWord = res.rel_word ? res.rel_word : {};

    this.blngSentsPart = res.blng_sents_part && res.blng_sents_part['sentence-pair']
      ? res.blng_sents_part['sentence-pair']
      : [];

    this.authSentsPart = res.auth_sents_part && res.auth_sents_part.sent
      ? res.auth_sents_part.sent
      : [];

    this.mediaSentsPart = res.media_sents_part && res.media_sents_part.sent
      ? res.media_sents_part.sent
      : [];
  }

  ngOnInit(): void {
    this.details = this.state.get(DETAIL_KEY, null as any);

    if (!this.details) {
      this.route.params.subscribe((params) => {
        const apiURL = `https://dict.youdao.com/jsonapi?q=${params.word}`;

        this.http.get(`/?url=${encodeURIComponent(apiURL)}`)
        .subscribe(res => {
          this.transData(res);
          this.state.set(DETAIL_KEY, res as any);
        });
      });
    } else {
      this.transData(this.details);
    }
  }

  ngOnDestroy(): void {
    if (typeof window === 'object') {
      this.state.set(DETAIL_KEY, null as any);
    }
  }
}
