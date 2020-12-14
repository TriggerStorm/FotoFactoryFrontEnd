import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Favourite} from './favourite';
import {CdkDragDrop} from '@angular/cdk/drag-drop/drag-events';
import {FavouritesService} from './favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  @Input()favourites: Favourite[];
  @Output()dropEvent = new EventEmitter<Favourite[]>();

  constructor(private favouriteService: FavouritesService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.favouriteService.getAllFavourites().then( (data) => {
      console.log(data);
      this.favourites = data;
    });
  }





  onClick(fav: number): void {
    this.favouriteService.removefavor(fav).subscribe(
      () => {
        this.favouriteService.getAllFavourites();
      });
    window.location.reload(false);
  }

  dropped(event: CdkDragDrop<Favourite[]>): void {
    this.dropEvent.emit([event.container.data[event.previousIndex]]);

  }

}
