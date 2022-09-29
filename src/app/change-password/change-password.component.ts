import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  oldPwd: string;
  newPwd: string;
  confirmNewPwd: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.oldPwd && this.newPwd && this.confirmNewPwd) {
      alert('Submitting');
      // TODO: submit to backend
    } else {
      alert('Please enter all fields');
    }
  }
}
