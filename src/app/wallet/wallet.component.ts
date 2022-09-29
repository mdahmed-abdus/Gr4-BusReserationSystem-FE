import { Component, OnInit } from '@angular/core';
import { User } from 'User';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit(): void {
    try {
      this.user = JSON.parse(sessionStorage['user']);
    } catch {
      // this.router.navigate(['/']);
      return;
    }
  }

  addToWallet(): void {
    alert('Submitting');
    // TODO: connect to payment
  }
}
