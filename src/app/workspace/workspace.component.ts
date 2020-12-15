import {Component, Input, OnInit, Output} from '@angular/core';
import {Favourite} from '../shared/favourites/favourite';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {EventEmitter} from 'events';
import {FavouritesService} from '../shared/favourites/favourites.service';
import {Workspace} from './workspace';
import {WorkspaceService} from './workspace.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Workspaceposter} from './workspaceposter';
import {WorkspaceposterService} from './workspaceposter.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  workspaceForm = new FormGroup({
    name: new FormControl(''),
    backGroundColour: new FormControl('')
  });


  workspaces: Workspace[];
  workspaceSelect = null;
  favourites: Favourite[];
  favouritesCanvas = [];
  workspaceposter: Workspaceposter;
  private WSP: string;

  constructor(private favouriteService: FavouritesService,
              private workspaceService: WorkspaceService,
              private workspaceposterService: WorkspaceposterService) { }

  ngOnInit(): void {
    this.favouriteService.getAllFavourites()
      .then(favourites => {
        this.favourites = favourites;
      });

    this.workspaceService.getAllWorkspaces()
      .subscribe(listOfWorkspaces => {
        console.table(listOfWorkspaces);
        this.workspaces = listOfWorkspaces;
      });
  }

   refresh(): void{
    this.favouriteService.getAllFavourites()
      .then(favourites => {
        this.favourites = favourites;
      });

    this.workspaceService.getAllWorkspaces()
      .subscribe(listOfWorkspaces => {
        console.table(listOfWorkspaces);
        this.workspaces = listOfWorkspaces;
      });
  }

  changeColor(): void{
    document.getElementById(
      'workspaceId').style.backgroundColor =
      (document.getElementById(
        'MyColor') as HTMLInputElement).value;
  }



  dropped($event: Favourite): void {
     // this.drop.emit($event);
    // Push to Canvas
    console.log($event);
    this.favouritesCanvas.push($event[0]);
  }

  droppedOnCanvas($event: Favourite): void {
    /*this.WSP = document.getElementById('favourites').id = (document.getElementById(
      'favourites') as HTMLElement).nodeValue;
    console.log(this.WSP);*/
  }


  mySelectHandler($event: any): any {
   /* document.getElementById(
      'workspaceId').style.backgroundColor =

      this.workspaceSelect.backgroundcolour;
*/
  }

  save(): void {
    const workspace = this.workspaceForm.value;
    console.log(workspace);
    this.workspaceService.addWorkspace(workspace)
      .subscribe(() => {
        this.workspaceService.getAllWorkspaces()
          .subscribe(listOfWorkspaces => {
            console.table(listOfWorkspaces);
            this.workspaces = listOfWorkspaces;
          });
      });
  }


  delete(id: number): void {
    console.log(id);
    console.log(this.workspaceSelect);
    this.workspaceService.deleteWorkspace(id)
      .subscribe(message => {
        console.log('Deleted workspace, got message:' + message);
        this.refresh();
      });

  }

  SaveWorkSpace(workspaceposter: Workspaceposter): void{
    workspaceposter.FrameId = 1;
    workspaceposter.SizeId = 1;
    workspaceposter.PosterId = 2;
    workspaceposter.XPos = 40;
    workspaceposter.YPos = 50;
    this.workspaceposterService.addWorkSpacePoster(workspaceposter);
  }

  small() {

  }
}
