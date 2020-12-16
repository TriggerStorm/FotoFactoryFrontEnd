import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Summary} from './summary';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../shared/authenticationservice/authentication.service';
import {WorkspaceService} from '../workspace/workspace.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  workspaceIds: number[];

  apiUrl = 'https://localhost:44387/api/summary';

  constructor(private http: HttpClient,
              private workspaceService: WorkspaceService,
              private authService: AuthenticationService) { }


  getAllSummary(): Observable<Summary[]>{
    const workspaces = this.workspaceService.getAllWorkspaces();
    const listOFIds = [];
    workspaces.forEach( (value) => {
      value.forEach( (obj) => {
        // @ts-ignore
        listOFIds.push(obj.workSpaceId);
      });
      console.log(listOFIds);
    });
    return this.http.post<Summary[]>(environment.apiUrl + '/api/summary', listOFIds);
  }
}
