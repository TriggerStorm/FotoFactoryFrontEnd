import { Injectable } from '@angular/core';
import {Workspace} from './workspace';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from "../shared/authenticationservice/authentication.service";


@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  apiUrl = 'https://localhost:44387/api/workspace';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getAllWorkspaces(): Observable<Workspace[]>{
    const userId = this.authService.getUserID();
    return this.http.get<Workspace[]>(environment.apiUrl + '/api/workspace?userID=1' );
  }

  addWorkspace(workspace: Workspace): Observable<Workspace>{
    const userId = this.authService.getUserID();
    workspace.user = Number(userId);
    return this.http.post<Workspace>(this.apiUrl, workspace);
  }

  deleteWorkspace(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
