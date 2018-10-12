import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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

export class AppComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy (): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
