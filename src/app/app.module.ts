import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Injectable } from '@angular/core'
import { HttpClientModule, HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Routes, RouterModule }   from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { LoadingModule } from 'ngx-loading'
import { Observable } from 'rxjs/Observable'

import { AppComponent } from './app.component'
import { AppNavbarComponent } from './app-navbar/app-navbar.component'
import { TranslateComponent } from './translate/translate.component'
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './search/search.component'
import { DetailComponent } from './detail/detail.component'
import { DetailPhrsListTabComponent } from './detail-phrs-list-tab/detail-phrs-list-tab.component'
import { DetailWebTransComponent } from './detail-web-trans/detail-web-trans.component'
import { DetailAuthTransComponent } from './detail-auth-trans/detail-auth-trans.component'
import { DetailTransformComponent } from './detail-transform/detail-transform.component'
import { DetailExamplesComponent } from './detail-examples/detail-examples.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'translate',
    component: TranslateComponent
  }, {
    path: 'search',
    component: SearchComponent
  }, {
    path: 'detail/:word',
    component: DetailComponent
  }
];

@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'https://proxy-oagpwnbkpe.now.sh'

    req = req.clone({
      url: url + req.url
    })

    return next.handle(req)
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    TranslateComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    DetailPhrsListTabComponent,
    DetailWebTransComponent,
    DetailAuthTransComponent,
    DetailTransformComponent,
    DetailExamplesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    LoadingModule
  ],
  providers: [
    AppComponent,
    { provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
