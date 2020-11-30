import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void{
    document.getElementById(
      'workspaceId').style.backgroundColor =
      (document.getElementById(
        'MyColor') as HTMLInputElement).value;
  }
}
