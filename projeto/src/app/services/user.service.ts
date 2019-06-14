import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }

  register(user:User):Observable<User>{
    //return this.httpClient.post<User>(this.url,user);  // json-server
    return this.httpClient.post<User>(`${this.url}/register`,user); //express 

  }

  list():Observable<User[]>{
    //return this.httpClient.get<User[]>(this.url);  //json-server
    return this.httpClient.get<User[]>(`${this.url}/list`); //express 
  }

  delete(id:number){
    //return this.httpClient.delete(`${this.url}/${id}`); //json-server
    return this.httpClient.delete(`${this.url}/delete/${id}`); //express
  }

  retrieveById(id:number):Observable<User>{
    //return this.httpClient.get<User>(`${this.url}/${id}`); //json-server
    return this.httpClient.get<User>(`${this.url}/retrieve/${id}`); //express
  }

  update(user:User):Observable<User>{
    //return this.httpClient.put<User>(`${this.url}/${user.id}`,user); //json-server
    //return this.httpClient.put<User>(`${this.url}/update/${user.id}`,user); //express
    return this.httpClient.put<User>(`${this.url}/update/${user._id}`,user); //mongo
  }

  retrieveByLogin(login:string):Observable<User[]>{
    //return this.httpClient.get<User[]>(`${this.url}/?login=${login}`); //json-server
    return this.httpClient.get<User[]>(`${this.url}/retrieve/login/${login}`); //express
  }

}
