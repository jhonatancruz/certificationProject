import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = 'http://localhost:3000/contact';

  constructor(
    private http : HttpClient
  ) { }

  sendEmail(data:any){
    return this.http.post(this.uri, data);
  }

}
