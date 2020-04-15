import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { News } from 'src/app/models/news/news';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  news : News[] = [];


  constructor(private newsService : NewsService) { }

  ngOnInit(): void {
    this.grabSportNews()
  }
  grabSportNews(){
    this.newsService.getSportNews().subscribe((result : News[]) =>{
      this.news = result.slice(result.length-12, result.length);
    })
  }

}
