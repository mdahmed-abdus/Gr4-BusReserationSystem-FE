import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'User';
import { Busentity } from '../busentity';
import { CheckBus } from '../checkbus';
import { CheckbusService } from '../checkbus.service';
import { Passenger } from '../Passenger';
import { Ticket } from '../Ticket';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-book-seat',
  templateUrl: './book-seat.component.html',
  styleUrls: ['./book-seat.component.css']
})
export class BookSeatComponent implements OnInit {
  usernow : any;
  busnow : any;
  ticket : Ticket = new Ticket(); 
  ids :string[] = new Array();
  Ticket_id : number;
  email :string;
  No_of_passenger : number;
  Total_amount : number;
  Bus_id : number;
  User_id : number;
  
  passengers : Passenger[] = [];  
  passenger : Passenger = new Passenger();
  passengerId : number;
  passengerName : string;
  passengerAge : number;
  seatNumber : string;
  
  storage: Storage;
  constructor(private checkbusservice :CheckbusService, private ticketService : TicketService ,private router: Router) {}
  myFunction(event: any) 
  {
    const index = this.ids.indexOf(event.currentTarget.id);
    if (index > -1) { 
      this.ids.splice(index, 1);
      const pindex = this.passengers.findIndex(e => e.seatNumber === event.currentTarget.id)
      this.passengers.splice(pindex, 1);
    }
    else
    {
       let p : Passenger =new Passenger();
       p.seatNumber= event.currentTarget.id;
      this.ids.push(event.currentTarget.id);
      this.passengers.push(p);
    }
     
     //this.Ticket_id = event.currentTarget.id.charCodeAt(0) +this.ids.length;
     console.log(event.currentTarget.id,this.Ticket_id,event.currentTarget.id.charCodeAt(0));
     console.log(this.passengers);
    
   }
  ngOnInit(): void { 
    try {
    this.usernow=JSON.parse(sessionStorage['user']);
    } catch {
      alert('Please Login to Continue');
      this.router.navigate(['/login']);
    }
    this.busnow = JSON.parse(sessionStorage['selectedBus']);
   
   
  }
  async onSubmit() {
    this.ticket.mail=this.usernow.mail;
    this.ticket.passengerCount = this.ids.length;
    this.ticket.total_amt=this.ids.length*this.busnow.fare;
    this.ticket.busId = this.busnow.busId;
    this.ticket.user_Id = this.usernow.user_Id;

    for (let i = 0; i < this.passengers.length; i++) {
      this.passengers[i] = await lastValueFrom(this.ticketService.createPassenger(this.passengers[i]));
      console.log('Passenger created: ' + this.passengers[i].passengerId);
    }

    console.log({
      message: 'Console logging...',
      ticketId: this.ticket.ticketId,mail:this.ticket.mail,
      total_amt:  this.ticket.total_amt,
      passengerCount: this.ticket.passengerCount,
      user : this.usernow,bus : this.busnow, 
      passengerList : this.passengers
    });

      this.ticketService.createTicket({
        ticketId: this.ticket.ticketId,
        mail:this.ticket.mail,
        total_amt:  this.ticket.total_amt,
        passengerCount: this.ticket.passengerCount,
        user : this.usernow,
        bus : this.busnow, 
        passengerList : this.passengers
      }).subscribe(
        data=>{
          alert('Ticket Booked');
          console.log(data);
          sessionStorage.setItem('ticket', JSON.stringify(data));
          this.ticketService.sendEmail(data).subscribe(()=>{});
          this.router.navigate(['/showticket']);
        },
        error => {
          alert('Could not book ticket')
        }
      );
  }

    onSubmitInner(id : string)
    {
           // let p = this.passengers.find(e => e.seatNumber === id);
            console.log(this.passengers);
       
    }
    getPassengerById(id : string)
    {
           return this.passengers.find(e => e.seatNumber === id) || new Passenger();

         
    }
  }



   
  
  
 

// Function(event: Event)
// {
//   console.log(document.getElementById('1A')?.id);
  

  // this.usernow=JSON.parse(sessionStorage['user']);
  // console.log(this.usernow);
  // sessionStorage.removeItem('user'); 

  


   

