import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Favourite} from './favourite';
import {CdkDragDrop} from '@angular/cdk/drag-drop/drag-events';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  @Input()favourites: Favourite[];
  @Output()dropEvent = new EventEmitter<Favourite[]>();

  dropped(event: CdkDragDrop<Favourite[]>): void {
    this.dropEvent.emit([event.container.data[event.previousIndex]]);
  }

}
