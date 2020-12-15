import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from "../shared/authenticationservice/authentication.service";
import {Workspaceposter} from './workspaceposter';


@Injectable({
  providedIn: 'root'
})
export class WorkspaceposterService{

  apiUrl = 'https://localhost:44387/api/workspaceposter';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  addWorkSpacePoster(Wp: Workspaceposter): Observable<Workspaceposter>{
    // @ts-ignore
    return this.http.post<Workspaceposter>(this.apiUrl + Wp).subscribe();
  }

}

