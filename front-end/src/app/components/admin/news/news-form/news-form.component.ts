import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';


@Component({
    selector: 'app-news-form',
    templateUrl: './news-form.component.html',
    styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {

    sourceName : string = '';
    author : string = '';
    title : string = '';
    description : string = '';
    type : string = 'general';
    url : string = '';
    urlToImage : string = '';
    content : string = '';

    constructor( 
    
      private newsService: NewsService,
      private messenger : MessengerService
    
    ){}

    ngOnInit(): void {
    }

    handleSubmit(){

      const newNews = {
        sourceName : this.sourceName,
        author : this.author,
        title : this.title,
        description : this.description,
        type : this.type,
        url : this.url,
        urlToImage : this.urlToImage,
        content : this.content  
      }

      this.newsService.addNews(newNews)
      .subscribe(
        () => {
          this.messenger.sendMsg({
            msg: 'News added!',
            type: 'success'
          })
        },
        () => {
          this.messenger.sendMsg({
            msg: 'News could not be added!',
            type: 'danger'
          })
        }
      )


    }
}

