import { Component, OnInit } from '@angular/core';
import {WorkspaceService} from '../workspace/workspace.service';
import {Workspace} from '../workspace/workspace';
import {Summary} from "./summary";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SummaryService} from "./summary.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  workspaceSelect = 'None';
  workspaces: Workspace[];
  summaries: any[];

  constructor(private workspaceService: WorkspaceService,
              private summaryService: SummaryService) { }

  apiUrl = 'https://localhost:44387/api/workspace';

  ngOnInit(): void {
    this.workspaceService.getAllWorkspaces()
      .subscribe(listOfWorkspaces => {
        this.workspaces = listOfWorkspaces;
      });

    this.summaryService.getAllSummary().then(data => {
      console.table(data);
      this.summaries = data;
    });
  }



  mySelectHandler($event: any): any {

  }

}
