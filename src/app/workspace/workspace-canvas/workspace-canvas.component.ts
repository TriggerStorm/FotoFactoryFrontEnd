import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Favourite} from '../../shared/favourites/favourite';
import {Workspaceposter} from '../workspaceposter';

@Component({
  selector: 'app-workspace-canvas',
  templateUrl: './workspace-canvas.component.html',
  styleUrls: ['./workspace-canvas.component.scss']
})
export class WorkspaceCanvasComponent {

  @Input() favourites: Favourite[];
  @Input() workspaceposters: Workspaceposter[];

  @Output() selectEvent = new EventEmitter<Workspaceposter>();
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

  getWidth(SizeId: number): string {
    switch (SizeId) {
      case 1: return '120px';
      case 2: return '200px';
      case 3: return '300px';
      default: return '50px';
    }
  }
  getHeight(SizeId: number): string {
    switch (SizeId) {
      case 1: return '120px';
      case 2: return '200px';
      case 3: return '300px';
      default: return '50px';
    }
  }

  select(workspaceposter: Workspaceposter): void {
    this.selectEvent.emit(workspaceposter);
  }

  getXPos(XPos: number) {

  }
}
