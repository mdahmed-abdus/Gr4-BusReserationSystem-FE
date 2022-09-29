import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  sidebarList = [
    // { title: 'My Dashboard', link: 'dashboard' },
    { title: 'Bookings', link: 'bookings' },
    { title: 'Profile', link: 'profile' },
    { title: 'Change Password', link: 'change-password' },
    // { title: 'Wallet', link: 'wallet' },
  ];
  adminSidebarList = [{ title: 'Manage Busses', link: 'manage-busses' }];
  user: User = new User();

  constructor(private router: Router) {}

  ngOnInit(): void {
    try {
      this.user = JSON.parse(sessionStorage['user']);
    } catch {
      this.router.navigate(['/']);
    }
  }

  onClick(link: string): void {
    document
      .querySelectorAll('.active')
      .forEach((e) => e.classList.remove('active'));
    document.querySelector('#' + link)?.classList.add('active');
  }
}
