import {Component, Input, OnInit} from '@angular/core';
import {FavouritesService} from './favourites.service';
import {Favourite} from './favourite';
import {CdkDragDrop} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {


  @Input()favourites: Favourite[];
  // @ts-ignore
  @Output()drop = new EventEmitter<any>();


  constructor(private favouriteService: FavouritesService) { }

  ngOnInit(): void {
    this.favouriteService.getAllFavourites().then( (data) => {
      console.log(data);
      this.favourites = data;
    });
  }



  dropped($event: CdkDragDrop<Favourite[]>): void {
    // @ts-ignore
    this.drop.emit($event);
  }


  onClick(fav: number): void {

    this.favouriteService.removefavor(fav).subscribe(
      () => {
         this.favouriteService.getAllFavourites();
      });
    window.location.reload(false);
  }
}
