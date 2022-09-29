import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: User = new User();

  constructor(private router: Router) { }

  ngOnInit(): void {
    try {
      this.user = JSON.parse(sessionStorage['user']);
      this.isLoggedIn = true
    } catch {
      this.isLoggedIn = false;
    }
  }

  onClickLogout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
