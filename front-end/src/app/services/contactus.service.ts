import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'localhost:3000/contact/'

@Injectable({
  providedIn: 'root'
})

export class ContactusService {

  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    return this.http.post(apiUrl, data);
  }
}
