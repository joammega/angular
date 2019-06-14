import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User;
  constructor(private userService: UserService,
    private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {

    this.userService.register(this.user).subscribe(
      (res: User) => {
        console.log(`User id ${res._id} added!`)
        this.router.navigate([""]);
      }
    );
  }


}
