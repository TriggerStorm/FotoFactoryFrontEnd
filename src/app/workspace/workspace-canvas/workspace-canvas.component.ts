import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Favourite} from '../../shared/favourites/favourite';

@Component({
  selector: 'app-workspace-canvas',
  templateUrl: './workspace-canvas.component.html',
  styleUrls: ['./workspace-canvas.component.scss']
})
export class WorkspaceCanvasComponent {

  @Input() favourites: Favourite[];

  @Output() dropEvent = new EventEmitter<Favourite[]>();
  WorkSpacePoster: Favourite[];
  private WSP: string;

  dropped(event: CdkDragDrop<Favourite[]>): void {

    this.dropEvent.emit(event.container.data);
  }

  onDrop(){

  }
  drop($event: Favourite): void {
    this.WSP = document.getElementById('favourites').id = (document.getElementById(
      'favourites') as HTMLElement).nodeValue;
    console.log(this.WSP);
  }
}
