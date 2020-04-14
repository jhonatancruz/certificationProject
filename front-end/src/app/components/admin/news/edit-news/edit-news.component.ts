import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news/news';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

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
