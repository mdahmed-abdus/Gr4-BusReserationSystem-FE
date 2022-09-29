import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Busentity } from '../busentity';
import { CheckbusService } from '../checkbus.service';

@Component({
  selector: 'app-showbuses',
  templateUrl: './showbuses.component.html',
  styleUrls: ['./showbuses.component.css']
})
export class ShowbusesComponent implements OnInit {
  
  buses : any;

  constructor(private checkbusservice :CheckbusService, private router:Router) { }
  showUpdateComponent = false;
  ngOnInit(): void {
    try
    {
       this.buses=JSON.parse(sessionStorage['buses1']);
    }
    catch
    {
      return ;
    }
    
  }
   public onClick(Id : number)
   {
       for(let b of this.buses)
       {
          if(Id === b.busId)
          {
            sessionStorage.setItem('selectedBus', JSON.stringify(b));
            this.router.navigate(['/selectbus']);
            return;
          }

       }
       
   }


  }

