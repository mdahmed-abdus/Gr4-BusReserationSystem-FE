import { Component, OnInit } from '@angular/core';
import { Busentity } from '../busentity';
import { CheckbusService } from '../checkbus.service';

@Component({
  selector: 'app-manage-busses',
  templateUrl: './manage-busses.component.html',
  styleUrls: ['./manage-busses.component.css']
})
export class ManageBussesComponent implements OnInit {
  busses: Busentity[] = [];

  constructor(private checkBusService: CheckbusService) {}

  ngOnInit(): void {
     this.checkBusService
      .getAllBuses()
      .subscribe((data) => {
        this.busses = data
        console.log(this.busses);
      });
  }
}
