import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Busentity } from './busentity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckbusService {
  private BASE_URL = 'http://localhost:8089/userApp1';
  private url = this.BASE_URL + '/buses';

  constructor(private httpService: HttpClient) 
  { }

  getAllBuses(): Observable<Busentity[]>{
    return this.httpService.get<Busentity[]>(this.url);
  }

  getBusById(id: number): Observable<Busentity> {
    return this.httpService.get<Busentity>(this.url + `/${id}`);
  }

  deleteById(id: number): Observable<Busentity> {
    return this.httpService.delete<Busentity>(this.url + `/${id}`);
  }

  updateById(id: number, bus: Busentity): Observable<Busentity> {
    return this.httpService.put<Busentity>(this.url + `/${id}`, bus);
  }

  addNewBus(bus: Busentity): Observable<Busentity> {
    return this.httpService.post<Busentity>(this.url, bus);
  }

    // sendDetails(checkbus:CheckBus): Observable<Busentity> {
    //   return this.httpService.post<Busentity>(this.url,checkbus);
    // }

    // getBusListOnDate(): Observable<Busentity[]>{
    //   return this.http_ser.get<Busentity[]>(this.url);
    // 
  }

