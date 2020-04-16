import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  news : News[] = [];
  query : string = '';

  selectedNews : News[] = [];
  selectedAmount : string = '10';
  
  @Input() editNewsItem : News;
  constructor(
    private newsService : NewsService,
    private messenger : MessengerService) { }

  ngOnInit(): void {
    this.loadNews();

    this.messenger.getMsg().subscribe(() => {
      this.loadNews(); //Event Trigger from messengerService
      
    })
    
    
    
  }

  loadNews()
  {
    this.newsService.getAllNews().subscribe((result : News[]) =>{
      this.news = result;
      // console.log(result);
      this.selectedNews = this.news.slice(0,10);
      console.log(this.selectedNews);
    })
  }

  handleEntryNChange(){
    switch(this.selectedAmount){
      case '5':
        this.selectedNews = this.news.slice(0,5);
        break;
      case '10':
        this.selectedNews = this.news.slice(0,10);
        break;
      case '20':
        this.selectedNews = this.news.slice(0,20);
        break;
      default:
        this.selectedNews = this.news.slice();
    }

    console.log(this.selectedNews);
    
  }
  handleDelete(id){
    this.newsService.deleteNewsByID(id)
    .subscribe(
      () => {
        this.messenger.sendMsg({
          msg: 'News deleted!',
          type: 'success'
        })
      },
      () => {
        this.messenger.sendMsg({
          msg: 'News could not be deleted!',
          type: 'danger'
        })
      }
    )
  }



}
