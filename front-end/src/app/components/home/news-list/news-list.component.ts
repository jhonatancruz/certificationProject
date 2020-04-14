import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/models/news/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news : News[] = [];

  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.loadNews()
  }

  loadNews()
  {
    this.newsService.getAllNews().subscribe((result : News[]) =>{
      this.news = result;
      console.log(result);
    })
  }


}
