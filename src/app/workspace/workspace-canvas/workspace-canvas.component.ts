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

  dropped(event: CdkDragDrop<Favourite[]>): void {

    this.dropEvent.emit(event.container.data);
  }

}
