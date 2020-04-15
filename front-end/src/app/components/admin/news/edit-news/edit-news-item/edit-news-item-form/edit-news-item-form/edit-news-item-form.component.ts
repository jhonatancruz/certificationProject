import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news/news';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';
import { MessengerService } from 'src/app/services/messenger/messenger.service';

@Component({
  selector: 'app-edit-news-item-form',
  templateUrl: './edit-news-item-form.component.html',
  styleUrls: ['./edit-news-item-form.component.css']
})
export class EditNewsItemFormComponent implements OnInit {

    sourceName : string = '';
    author : string = '';
    title : string = '';
    description : string = '';
    type : string = 'general';
    url : string = '';
    urlToImage : string = '';
    content : string = '';

    id : string = '';

  constructor(
    private route : ActivatedRoute,
    private newsService : NewsService,
    private messenger : MessengerService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.newsService.getNewsByID(this.id).subscribe((result : News)  => {
      console.log(result.title);
      this.sourceName = result.sourceName;
      this.author = result.sourceName;
      this.title = result.title;
      this.description = result.description;
      this.type = result.type;
      this.url = result.url;
      this.urlToImage = result.urlToImage;
      this.content = result.content;
    })
  }

  handleEdit(){
    const updatedNews = {
      sourceName : this.sourceName,
      author : this.author,
      title : this.title,
      description : this.description,
      type : this.type,
      url : this.url,
      urlToImage : this.urlToImage,
      content : this.content  
    }

    this.newsService.editNews(this.id, updatedNews)
    .subscribe(
      () => {
        this.messenger.sendMsg({
          msg: 'News updated!',
          type: 'success'
        })
      },
      () => {
        this.messenger.sendMsg({
          msg: 'News could not be updated!',
          type: 'danger'
        })
      }
    )
  }

}
