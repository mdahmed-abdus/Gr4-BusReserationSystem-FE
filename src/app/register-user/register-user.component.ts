import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const {user_Id,fname, lname,gender,address,mail,pwd,confirmPwd, phoneNo,dob} = this.user;
    console.log(user_Id);

    if (fname && lname && mail && pwd  && gender&&  address && confirmPwd && phoneNo && dob ) {
      if (pwd !== confirmPwd) {
        alert('Password does not match');
      } else {
        alert('Submitting');
        this.userService.registerUser(this.user).subscribe((data) => {
          alert('User registered');
          this.router.navigate(['/login']);
        }, (error) => {
          alert("Error in creating new user")
        });
      }
    } else {
      alert('Please enter all values');
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
