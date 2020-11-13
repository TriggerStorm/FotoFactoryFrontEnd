import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../authenticationservice/authentication.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Loginmodel} from '../models/loginmodel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'  //     'Authorization': 'my-auth-token'
  })
};

@Injectable(
  {
    providedIn: 'root'
  })
export class LoginService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }


  getLogin(): Observable<Loginmodel[]> {
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    // get users from api
    return this.http.get<Loginmodel[]>(environment.apiUrl + '/logIn/', httpOptions);
  }

}
