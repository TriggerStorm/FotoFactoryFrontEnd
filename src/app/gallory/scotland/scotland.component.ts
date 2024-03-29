import { Component, OnInit } from '@angular/core';
import {PosterModel} from '../../shared/models/posterModel';
import {CollectionService} from '../../shared/posterService/collection.service';
import {Favourite} from "../../shared/favourites/favourite";
import {FavouritesService} from "../../shared/favourites/favourites.service";

@Component({
  selector: 'app-scotland',
  templateUrl: './scotland.component.html',
  styleUrls: ['./scotland.component.scss']
})
export class ScotlandComponent implements OnInit {
  favourites: Favourite[];
  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService,
              private  fav: FavouritesService) { }

  ngOnInit(): void {
    this.Poster.getCollection(5).then( (data) => {
      console.log(data);
      this.Collection = data;
    });

    this.fav.getAllFavourites()
      .then(favourites => {
        this.favourites = favourites;
      });
  }


  onClick(id: number): void {
    this.fav.addFavorite(id).then(this.fav.getAllFavourites);
    window.location.reload(false);
    this.isActive = !this.isActive;
  }
}
