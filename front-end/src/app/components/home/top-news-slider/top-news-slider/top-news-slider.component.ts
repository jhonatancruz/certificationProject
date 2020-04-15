import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/models/news/news';

@Component({
  selector: 'app-top-news-slider',
  templateUrl: './top-news-slider.component.html',
  styleUrls: ['./top-news-slider.component.css']
})
export class TopNewsSliderComponent implements OnInit {
  news : News[] = [];


  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.grabNews()
  }
  grabNews(){
    this.newsService.getTopNews().subscribe((result : News[]) =>{
      this.news = result.slice(result.length-4, result.length);
      console.log(result.slice(result.length-4, result.length));
    })
  }

}
