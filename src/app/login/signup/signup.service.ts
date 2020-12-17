import { Injectable } from '@angular/core';
import {Workspace} from '../../workspace/workspace';
import {Observable} from 'rxjs';
import {User} from './User';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiUrl = 'https://localhost:44387/api/user';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }

}
