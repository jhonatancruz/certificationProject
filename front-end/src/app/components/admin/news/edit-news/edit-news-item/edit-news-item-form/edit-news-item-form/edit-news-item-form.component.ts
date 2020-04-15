import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/models/news/news';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-edit-news-item-form',
  templateUrl: './edit-news-item-form.component.html',
  styleUrls: ['./edit-news-item-form.component.css']
})
export class EditNewsItemFormComponent implements OnInit {

  @Input() newsItem : News;

  constructor(
    private route : ActivatedRoute,
    private newsService : NewsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    console.log(id);
    
  }

  handleEdit(){

  }

}
