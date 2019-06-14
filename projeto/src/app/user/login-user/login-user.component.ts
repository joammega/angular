import { UserService } from './../../services/user.service';
import { AuthUserService } from '../../services/auth-user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  user:User;
  logado =false
  nome = ""
  tg = false;
  constructor(private router:Router, 
              private authUser:AuthUserService,
              private userService:UserService){
    this.user = new User;
  }

  ngOnInit() {
    if(sessionStorage.getItem("user_login") == "" ||  sessionStorage.getItem("user_login")==null){
      this.logado = false
      console.log(JSON.parse(sessionStorage.getItem("user_login")))
      
    }
    else{
      this.logado =true

      let json =JSON.parse(sessionStorage.getItem("user_login"))
      this.nome = json.nome
    }
  }

  modal = false;
  

  cadastro(){
    this.router.navigate(["/register/user"])
  }
  onsubimit(){
    this.authUser.login(this.user.email, this.user.password)
    if(sessionStorage.getItem("user_login") == "" ||  sessionStorage.getItem("user_login")==null){
      alert("erro")      
      console.log(JSON.parse(sessionStorage.getItem("user_login")))
    }
    else{
      this.logado =true
      this.modal =false
      let json =JSON.parse(sessionStorage.getItem("user_login"))
      this.nome = json.nome
    }
    
    
  }
  mudar(){
    if(this.tg == false){
      this.tg = true
    }
    else{
      this.tg =false
    }
  }

}
