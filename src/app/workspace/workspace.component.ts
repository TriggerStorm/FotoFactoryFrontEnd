import {Component, Input, OnInit, Output} from '@angular/core';
import {Favourite} from "../shared/favourites/favourite";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {EventEmitter} from "events";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  @Input()favourites: Favourite[];
  @Output()drop = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(): void{
    document.getElementById(
      'workspaceId').style.backgroundColor =
      (document.getElementById(
        'MyColor') as HTMLInputElement).value;
  }



  dropped($event: CdkDragDrop<Favourite[]>): void {
    this.drop.emit($event);
  }
}
