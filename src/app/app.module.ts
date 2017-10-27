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
    DetailComponent
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
