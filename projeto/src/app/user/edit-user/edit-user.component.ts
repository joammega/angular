import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:User = new User();
  
  constructor(private activatedRoute:ActivatedRoute,
              private userService:UserService,
              private router:Router,
              private toasty:ToastrService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["id"];
    this.userService.retrieveById(id).subscribe(
      (res:User)=>{
        this.user = res;
      }
    );
  }

  onSubmit(editForm:NgForm){

    if(editForm.invalid){
      this.toasty.error("All fields are required.");
      return;
    }

    this.userService.update(this.user).subscribe(
      (res:User)=>{
        console.log(`User id ${res._id} updated!`);
        this.router.navigate(["list/user"]);
      },
    );
  }

}
