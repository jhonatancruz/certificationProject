import { Injectable,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/models/user/users';
import {Observable} from 'rxjs';


const apiUrl = 'http://localhost:3000/users'


@Injectable({
  providedIn: 'root'
})
export class UserService {

updateId: number;
contactName;
phoneNumber;

  constructor(private http: HttpClient) { }
 
  data = { userName: '', password: '' };
  
  @Input() userItem: Users;


login(username,password){
  if (username === this.userItem.userName && password===this.userItem.password){
    localStorage.setItem('user',username)
    return true;
  }else {
    return false;
  }
}

logout(){
  localStorage.removeItem('user');
}

getUser(){
  return localStorage.getItem('user');
}

getUsers(): Observable<Users[]> {
  return this.http.get<Users[]>(apiUrl);
  // return this.tasks;
}


}


