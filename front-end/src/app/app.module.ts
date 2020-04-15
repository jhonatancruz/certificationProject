import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgModule, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { NewsFormComponent } from './components/admin/news/news-form/news-form.component';
import { EditNewsComponent } from './components/admin/news/edit-news/edit-news.component';
import { NewsListComponent } from './components/home/news-list/news-list.component';
import { NewsListItemComponent } from './components/home/news-list/news-list-item/news-list-item.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found/page-not-found.component';
import { SportsComponent } from './components/home/sports/sports/sports.component';
import { EditNewsItemComponent } from './components/admin/news/edit-news/edit-news-item/edit-news-item.component';
import { AlertComponent } from './components/shared/alert/alert/alert.component';
import { EditNewsItemFormComponent } from './components/admin/news/edit-news/edit-news-item/edit-news-item-form/edit-news-item-form/edit-news-item-form.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentComponent } from './components/document/document.component';
import { WeatherComponent } from './components/weather/weather/weather.component';
import { KelvinToFahrenheitPipe } from './pipes/kelvin-to-fahrenheit/kelvin-to-fahrenheit.pipe';
import { TopNewsSliderComponent } from './components/home/top-news-slider/top-news-slider/top-news-slider.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { NewUserFormComponent } from './components/admin/new-user-form/new-user-form/new-user-form.component';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

// TODO: change/remove the app Component route
const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/login', component: AdminLoginComponent},
  { path: 'chat', component: DocumentListComponent},
  { path: 'news/add', component: NewsFormComponent, canActivate: [AuthGuard] },
  { path: 'news/edit', component: EditNewsComponent, canActivate: [AuthGuard] },
  { path: 'news/edit/:id', component: EditNewsItemFormComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  {path: 'news', component: NewsListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    NewsFormComponent,
    EditNewsComponent,
    NewsListComponent,
    NewsListItemComponent,
    HomeComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    SportsComponent,
    EditNewsItemComponent,
    AlertComponent,
    EditNewsItemFormComponent,
    DocumentListComponent,
    DocumentComponent,
    WeatherComponent,
    KelvinToFahrenheitPipe,
    TopNewsSliderComponent,
    SearchPipe,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
