import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showticket',
  templateUrl: './showticket.component.html',
  styleUrls: ['./showticket.component.css']
})
export class ShowticketComponent implements OnInit {

  bushere : any;
selectedBus: any;
bus: any;
  passenger: any;
  sessionStorage: any;
  ticket: any;

  constructor() { }

  ngOnInit(): void {
    // this.bus = JSON.parse(sessionStorage['selectedBus']);
   
    
    this.ticket=JSON.parse(sessionStorage['ticket']);
    console.log(sessionStorage);
    console.log(this.ticket);


  
  }
  printTicket(): void {
    if (!this.ticket) {
      return;
    }
    window.print();
  }
}
