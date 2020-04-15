import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private newsService : NewsService,
    private messenger : MessengerService
  ) { }

  ngOnInit(): void {
  }

  handleGenerateSportsNews(){
    this.newsService.generateSportsNews()
      .subscribe(
        (response:any) => {
          this.messenger.sendMsg({
            msg: response.length + ' Sports News added!',
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

  handleGenerateBreakingNews(){
    this.newsService.generateBreakingNews()
      .subscribe(
        (response:any) => {
          this.messenger.sendMsg({
            msg: response.length + ' Breaking News added!',
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
