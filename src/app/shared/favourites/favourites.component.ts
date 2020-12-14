import {Component, Input, OnInit, Output} from '@angular/core';
import {FavouritesService} from './favourites.service';
import {Favourite} from './favourite';
import {EventEmitter} from "events";
import {CdkDragDrop} from "@angular/cdk/drag-drop/drag-events";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input()favourites: Favourite[];
 //  @Output()drop = new EventEmitter<any>();

  constructor(private favouriteService: FavouritesService) { }

  ngOnInit(): void {
    this.favouriteService.getAllFavourites().then( (data) => {
      console.log(data);
      this.favourites = data;
    });
  }



  dropped($event: CdkDragDrop<Favourite[]>): void {
    // this.drop.emit($event);
  }


  onClick(fav: number): void {
    this.favouriteService.removefavor(fav).subscribe(
      () => {
        this.favouriteService.getAllFavourites();
      });
    window.location.reload(false);
  }

}
