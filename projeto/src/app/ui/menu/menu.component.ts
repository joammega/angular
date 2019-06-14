import { AuthUserService } from './../../services/auth-user.service';
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  user:User = null;
  
  constructor(private authUserService:AuthUserService){}

  ngOnInit(): void {
    this.authUserService.userObservable.subscribe(
      (res:User)=>{
        this.user = res;
      }
    );
  }
  
  logout(){
    this.user = null;
    this.authUserService.logout();
  }

}

