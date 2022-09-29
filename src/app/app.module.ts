import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckbusComponent } from './checkbus/checkbus.component';
import { HomeComponent } from './home/home.component';
import { ShowbusesComponent } from './showbuses/showbuses.component';
import { AdminComponent } from './admin/admin.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { ShowticketComponent } from './showticket/showticket.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { WalletComponent } from './wallet/wallet.component';
import { ManageBussesComponent } from './manage-busses/manage-busses.component';
import { AdminShowbusComponent } from './admin-showbus/admin-showbus.component';
import { NewBusComponent } from './new-bus/new-bus.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterUserComponent, DashboardComponent, CheckbusComponent, HomeComponent, ShowbusesComponent, AdminComponent, BookSeatComponent, ShowticketComponent, SubDashboardComponent, BookingsComponent, UserProfileComponent, ChangePasswordComponent, WalletComponent, ManageBussesComponent, AdminShowbusComponent, NewBusComponent, TicketComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
