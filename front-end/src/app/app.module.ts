import { BrowserModule } from '@angular/platform-browser';
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

// TODO: change/remove the app Component route
const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'admin/login', component: AdminLoginComponent},
  { path: 'news/add', component: NewsFormComponent, canActivate: [AuthGuard] },
  { path: 'news/edit', component: EditNewsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: AppComponent },
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
    PageNotFoundComponent
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
