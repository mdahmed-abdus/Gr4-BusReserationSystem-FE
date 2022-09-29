


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Busentity } from '../busentity';
import { CheckBus } from '../checkbus';
import { CheckbusService } from '../checkbus.service';

@Component({
  selector: 'app-checkbus',
  templateUrl: './checkbus.component.html',
  styleUrls: ['./checkbus.component.css']
})
export class CheckbusComponent implements OnInit {
   source_dest : CheckBus = new CheckBus();

   buses : Busentity [];
   buses1 : Busentity[]=[];

  constructor(private checkbusservice :CheckbusService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { source , destination , date } = this.source_dest;
   
    if (source && destination && date) {
      this.checkbusservice.getAllBuses().subscribe((data) => {
        if (data?.length === 0) {
          alert('Could not find any busses');
          return;
        }
        console.log(data);  
        for (const k in data) {
          const v=data[k];
          if(v.source==source && v.destination == destination && v.dateOfTravel == date) {
            this.buses1.push(v);
          }  
        }

        if (this.buses1?.length === 0) {
          alert('Could not find any busses');
          return;
        }

        sessionStorage.setItem('buses1', JSON.stringify(this.buses1));
        this.router.navigate(['/showbuses']);
      }, 
      error => {
        alert('Could not find any busses')
      });
      return;
    }

    alert('Please enter all details');
  }
}
