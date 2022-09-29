import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminShowbusComponent } from './admin-showbus/admin-showbus.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { CheckbusComponent } from './checkbus/checkbus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewBusComponent } from './new-bus/new-bus.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { ShowticketComponent } from './showticket/showticket.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  // {
  //   path: '' ,redirectTo:'home',pathMatch:'full'
  // },
  { path: '', component: CheckbusComponent },
  { path: 'checkbus', component: CheckbusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'showbuses',component: ShowbusesComponent},
  { path: 'selectbus',component: BookSeatComponent},
  { path: 'newbus',component: NewBusComponent},
  { path: 'admin/showbuses/:id', component: AdminShowbusComponent},
  { path : 'showticket',component:ShowticketComponent},
  { path: 'tickets/:id', component: TicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
