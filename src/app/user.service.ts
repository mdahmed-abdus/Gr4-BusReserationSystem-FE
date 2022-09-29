import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from 'LoginUser';
import { RegisterUser } from 'RegisterUser';
import { Observable } from 'rxjs';
import { User } from 'User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private BASE_URL = 'http://localhost:8089/userApp1';
  private url = this.BASE_URL + '/users';
  http_ser: any;

  constructor(private httpService: HttpClient) {}

  loginUser(loginUser: LoginUser): Observable<User> {
    return this.httpService.post<User>(this.url + '/login', loginUser);
  }

  registerUser(registerUser: User): Observable<User> {
    console.log(registerUser)
    return this.httpService.post<User>(this.url, registerUser);
  }
  
  updateUser(user: User): Observable<User> {
    return this.httpService.put<User>(this.url + `/${user.user_Id}`, user);
  }
}
