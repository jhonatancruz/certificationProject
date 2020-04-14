import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.css']
})
export class NewsFormComponent implements OnInit {

  title: string = '';
  description: string = '';
  url: string = '';
  urlToImage: string = '';
  publishedAt: Date; 

  constructor( 
   
    private newsService: NewsService
  
   ){}

  ngOnInit(): void {
  }

  handleSubmit(){

    const data = {
      title: this.title,
      description: this.description,
      url: this.url,
      urlToImage: this.urlToImage,
      publishedAt: this.publishedAt 

    };

    // this.NewsService.addNews(data).subscribe(() => {
    
    //   console.log('News Added.')
    
    // })
  }

  

}

