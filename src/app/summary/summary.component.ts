import { Component, OnInit } from '@angular/core';
import {WorkspaceService} from '../workspace/workspace.service';
import {Workspace} from '../workspace/workspace';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  workspaceSelect = 'None';
  workspaces: Workspace[];

  constructor(private workspaceService: WorkspaceService) { }

  ngOnInit(): void {
    this.workspaceService.getAllWorkspaces()
      .subscribe(listOfWorkspaces => {
        console.table(listOfWorkspaces);
        this.workspaces = listOfWorkspaces;
      });
  }

  mySelectHandler($event: any): any {

  }
}
