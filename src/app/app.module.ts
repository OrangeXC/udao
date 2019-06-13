import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgModule,
  Injectable,
  Inject,
  PLATFORM_ID,
  APP_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  HttpClientModule,
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { NabularModule, NabularService } from './nebular.module';
import { NbThemeModule, NbMenuModule, NbToastrModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { TranslateComponent } from './translate/translate.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { DetailPhrsListTabComponent } from './detail-phrs-list-tab/detail-phrs-list-tab.component';
import { DetailWebTransComponent } from './detail-web-trans/detail-web-trans.component';
import { DetailAuthTransComponent } from './detail-auth-trans/detail-auth-trans.component';
import { DetailTransformComponent } from './detail-transform/detail-transform.component';
import { DetailExamplesComponent } from './detail-examples/detail-examples.component';

import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'https://proxy-oagpwnbkpe.now.sh';

    req = req.clone({
      url: url + req.url
    });

    return next.handle(req);
  }
}

@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NabularModule,
    BrowserModule.withServerTransition({ appId: 'udao' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoadingBarHttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
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
  providers: [
    ...NabularService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
