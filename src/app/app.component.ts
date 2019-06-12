import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSidebarFixed: Boolean = false;
  menuList: NbMenuItem[] = [
    {
      title: '主页',
      link: '/',
      icon: 'home'
    }, {
      title: '搜索',
      link: '/search',
      icon: 'search'
    }, {
      title: '翻译',
      link: '/translate',
      icon: 'globe'
    }
  ];

  constructor(
    public breakpointObserver: BreakpointObserver,
    private sidebarService: NbSidebarService,
    public router: Router
  ) {
    breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sidebarService.collapse('left');
          this.isSidebarFixed = true;
        } else {
          this.sidebarService.expand('left');
          this.isSidebarFixed = false;
        }
      });

    router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(e => {
      if (e['url'] === '/') {
        this.menuList[0].link = '';
      } else {
        this.menuList[0].link = '/';
      }
    });
  }

  toggle () {
    this.sidebarService.toggle(false, 'left');
  }
}
