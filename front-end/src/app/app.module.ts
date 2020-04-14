import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { NewsFormComponent } from './components/admin/news/news-form/news-form.component';
import { EditNewsComponent } from './components/admin/news/edit-news/edit-news.component';
import { NewsListComponent } from './components/admin/news/edit-news/news-list/news-list.component';
import { NewsListItemComponent } from './components/admin/news/edit-news/news-list/news-list-item/news-list-item.component';
import { HomeComponent } from './components/home/home.component';

// TODO: change/remove the app Component route
const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'news/add', component: NewsFormComponent },
  { path: 'news/edit', component: EditNewsComponent },
  { path: 'home', component: AppComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
