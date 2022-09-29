import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './Passenger';
import { Ticket } from './Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private BASE_URL = 'http://localhost:8089/userApp1';
  private url = this.BASE_URL + '/tickets';

  constructor(private httpService:HttpClient) { }

  sendEmail(ticket:any):Observable<any>{
    return this.httpService.post<any>(this.BASE_URL+"/sendmail",ticket);
   }

  createTicket(obj:Object):Observable<Object>{
    return this.httpService.post(this.url,obj);
 }

 createPassenger(passenger:Passenger):Observable<Passenger>
 {
  return this.httpService.post<Passenger>(this.BASE_URL+"/passengers",passenger);
 }

 getNewId():Observable<number>
 {
  return this.httpService.get<number>(this.BASE_URL+"/tickets/newId");
 }

 getTicketById(id: number): Observable<any> {
  return this.httpService.get<any>(this.url + `/${id}`);
 }

 getAllTickets(): Observable<any> {  
   return this.httpService.get<any>(this.url);
 }

 getAllTicketsByUserId(userId: number): Observable<any> {
  return this.httpService.get<any>(this.BASE_URL + "/tickets/user/" + userId);
 }

}
