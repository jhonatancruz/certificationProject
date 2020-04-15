import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/services/document/document.service';
import { HttpClient  } from '@angular/common/http';  


import { Subscription } from 'rxjs';
import { Document } from 'src/app/models/document/document';

import { startWith } from 'rxjs/operators';
import { Message } from 'src/app/models/msg/msg';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  document: Document;
  // messages:string=""
  message:string="";
  user:string=""
  private _docSub: Subscription;
  _sentMsg: Subscription;
  messages: string[] = [];


  constructor(private documentService: DocumentService, private http:HttpClient) { }


  ngOnInit() {
    // this._docSub = this.documentService.currentDocument.pipe(
    //   startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    // ).subscribe(document => this.document = document);
    this.documentService
      .getMessages()
      .subscribe((data:string)=>{
          this.messages.push(data)
      })
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      console.log(res)
      this.user=res.ip
    });  
  }

  ngOnDestroy() {
    this._docSub.unsubscribe();
    this._sentMsg.unsubscribe();
  }

  editDoc() {
    this.documentService.editDocument(this.document);
  }
  handleUser(){
    console.log(this.user)

  }
  openChat(){
    var element = document.getElementById("main-section");
    element.classList.toggle("open-more");
    element.classList.toggle("third-section");
  }

  closeChat(){
    var element = document.getElementById("main-section");
    element.classList.toggle("open-more");
  }
  sendMessage(){
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    const msg= {
      text: this.message,
      user:this.user,
      time:time
    }
    this.documentService.sendMessage(msg);
    this.message=""
  }
}