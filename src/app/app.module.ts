import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { TranslateComponent } from './translate/translate.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { DetailPhrsListTabComponent } from './detail-phrs-list-tab/detail-phrs-list-tab.component';
import { DetailWebTransComponent } from './detail-web-trans/detail-web-trans.component';
import { DetailAuthTransComponent } from './detail-auth-trans/detail-auth-trans.component';
import { DetailTransformComponent } from './detail-transform/detail-transform.component';
import { DetailExamplesComponent } from './detail-examples/detail-examples.component';

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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
