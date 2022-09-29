import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Busentity } from '../busentity';
import { CheckbusService } from '../checkbus.service';

@Component({
  selector: 'app-admin-showbus',
  templateUrl: './admin-showbus.component.html',
  styleUrls: ['./admin-showbus.component.css']
})
export class AdminShowbusComponent implements OnInit {
  id: number;
  bus: Busentity = new Busentity();

  constructor(
    private checkBusService: CheckbusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      !this.id && this.router.navigate(['/']);

      this.checkBusService
        .getBusById(this.id)
        .subscribe((data) => (this.bus = data));
    }
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
        this.checkBusService.updateById(this.id, this.bus).subscribe(
          data => {
            alert('Bus updated');
            console.log(data);
          }, 
          error => { alert('Could not update bus') });
        return;
      }
      alert('Please enter all fields');
  }

  onDelete(id: number): void {
    alert('Deleting ' + id);
    this.checkBusService.deleteById(id).subscribe(
      data => {
        alert('Bus deleted');
        console.log(data);
        this.router.navigate(['/dashboard']);
      },
      error => {
        alert('Could not delete bus');
      }
    );
  }
}
