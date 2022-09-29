import { Component, OnInit } from '@angular/core';
import { Ticket } from '../Ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  tickets: any[] = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    try {
    const user =  JSON.parse(sessionStorage['user']);
    if (user.userType === 'admin') {
      this.ticketService.getAllTickets().subscribe(data => {
        this.tickets = data;
      });
    } else {
    this.ticketService.getAllTicketsByUserId(user.user_Id).subscribe(data => {
      this.tickets = data;
    });
  }
    } catch {
      alert("Could not load tickets")
    }
  }
}
