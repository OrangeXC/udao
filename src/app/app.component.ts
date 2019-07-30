import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

interface NavItem {
  name: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  matches = true;
  navList: Array<NavItem> = [
    {
      name: '主页',
      link: '/',
      icon: 'home'
    }, {
      name: '搜索',
      link: '/search',
      icon: 'search'
    }, {
      name: '翻译',
      link: '/translate',
      icon: 'g_translate'
    }
  ];

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.matches = true;
        } else {
          this.matches = false;
        }
      });
  }
}
