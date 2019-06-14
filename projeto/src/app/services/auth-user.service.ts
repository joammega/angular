import { User } from '../models/user.model';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  private userBehaviorSubject: BehaviorSubject<User>;
  public userObservable: Observable<User>;

  constructor(private router:Router,
              private userService:UserService) { 
              
    this.userBehaviorSubject = new BehaviorSubject<User>(JSON.parse(
      sessionStorage.getItem("user_login")
    ));
    this.userObservable = this.userBehaviorSubject.asObservable();
  }

  login(login:string, password:string){
    this.userService.retrieveByLogin(login)
      .subscribe(
        (res:User[])=>{
          if(res.length>0){
            if(res[0].password==password){
              
              sessionStorage.setItem("user_login",JSON.stringify(res[0]));
              this.userBehaviorSubject.next(res[0]);
              this.router.navigate([""]);
            }else{
              console.log("Invalid password!"); 
              //this.toasty.error("Invalid password!") 
            }
          }else{
            console.log("User does not exist!");
            //this.toasty.error("User does not exist!") 
          }
        }
      );
  }

  logout(){
    sessionStorage.removeItem("user_login");
    this.userBehaviorSubject.next(null);
    this.router.navigate([""]);
  }

  getLoggedUser():User{
    let lu = JSON.parse(sessionStorage.getItem("user_login"));
    return lu;
  }
}
