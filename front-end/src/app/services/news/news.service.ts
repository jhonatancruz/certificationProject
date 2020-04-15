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

  getNewsByID(id:string){
    return this.http.get(this.uri+'/id/'+id);
  }
  getSportNews(){
    return this.http.get(this.uri+'/type'+'/sports');
  }

  addNews(data : any){
    let options = this.generateAuthorizationHeader();
    return this.http.post(this.uri, data, options)
  }
  
  generateBreakingNews(){
    let options = this.generateAuthorizationHeader();
    return this.http.get(this.uri+'/breaking', options)
  }

  generateSportsNews(){
    let options = this.generateAuthorizationHeader();
    return this.http.get(this.uri+'/sports', options)
  }

  editNews(id : string, data : any){
    let options = this.generateAuthorizationHeader();
    return this.http.put(this.uri+'/'+id, data, options)
  }

  deleteNewsByID(id:string){

    let options = this.generateAuthorizationHeader();
    
    return this.http.delete(this.uri+'/'+id, options);
  }

  generateAuthorizationHeader(){
    const token = 'b ' + this.loginService.getToken();
    console.log(token);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token });
    return { headers: headers };
  }
}
