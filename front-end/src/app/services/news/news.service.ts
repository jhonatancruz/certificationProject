import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  uri = 'http://localhost:3000/news';

  constructor(
    private http : HttpClient,
    private loginService : LoginService) { }

  getAllNews(){
    return this.http.get(this.uri);
  }

  addNews(data : any){
    let header = {
      header: new HttpHeaders()
        .set('Authorization',  `Basic ${this.loginService.getToken()}`)
    }
    return this.http.post(this.uri, header, data)
  }

  deleteNewsByID(id:string){

    const token = 'b ' + this.loginService.getToken();
    console.log(token);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token });
    let options = { headers: headers };
    
    return this.http.delete(this.uri+'/'+id, options);
  }
}
