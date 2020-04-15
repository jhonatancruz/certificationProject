import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news/news';
import { NewsService } from 'src/app/services/news/news.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';

@Component({
  selector: 'app-edit-news-item',
  templateUrl: './edit-news-item.component.html',
  styleUrls: ['./edit-news-item.component.css']
})
export class EditNewsItemComponent implements OnInit {
  
  @Input() editNewsItem : News;
  constructor(
    private newsService : NewsService,
    private messenger : MessengerService
  ) { }

  ngOnInit(): void {
  }

  handleDelete(){
    this.newsService.deleteNewsByID(this.editNewsItem._id)
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
