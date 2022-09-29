import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {
    try {
      this.user = JSON.parse(sessionStorage['user']);
    } catch {
      this.router.navigate(['/']);
      return;
    }
  }

  ngOnInit(): void {}

  onSubmit(): void {
    alert('Submitting');
    this.userService.updateUser(this.user).subscribe(data => {
      alert('Profile updated');
      sessionStorage.setItem('user', JSON.stringify(data));
      location.reload();
    },
    error => {
      alert('Profile could not be updated');
    });
  }
}
