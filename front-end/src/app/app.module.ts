import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    NewsListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
