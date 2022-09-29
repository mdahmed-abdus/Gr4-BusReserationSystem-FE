import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Busentity } from '../busentity';
import { CheckbusService } from '../checkbus.service';

@Component({
  selector: 'app-new-bus',
  templateUrl: './new-bus.component.html',
  styleUrls: ['./new-bus.component.css']
})
export class NewBusComponent implements OnInit {
  bus: Busentity = new Busentity();

  constructor(private checkBusService: CheckbusService, private router: Router) { }

  ngOnInit(): void {
    this.bus.arrivalTime = {hours: 0, minutes: 0};
    this.bus.depatureTime = {hours: 0, minutes: 0};
  }

  onSubmit(): void {
    const { 
      busName, 
      totalNumberOfSeats,
      busType,
      duration, 
      arrivalTime, 
      depatureTime, 
      source, 
      destination, 
      dateOfTravel, 
      fare
    } = this.bus;

    console.log(this.bus);

    if (busName &&
      totalNumberOfSeats &&
      busType &&
      duration && 
      arrivalTime && 
      depatureTime && 
      source && 
      destination && 
      dateOfTravel && 
      fare) {
        this.checkBusService.addNewBus(this.bus).subscribe(
          data => {
            alert('Bus added');
            console.log(data);
            this.router.navigate(['/dashboard']);
          }, 
          error => { alert('Could not add bus') });
        return;
      }
      alert('Please enter all fields')
  }
}
