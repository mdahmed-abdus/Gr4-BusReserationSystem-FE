import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  id: number;
  ticket: any;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      !this.id && this.router.navigate(['/']);

      this.ticketService
        .getTicketById(this.id)
        .subscribe(
          data => (this.ticket = data),
          error => { alert('Could not load ticket') }
      );
    }
  }

  printTicket(): void {
    if (!this.ticket) {
      return;
    }
    window.print();
  }
}
