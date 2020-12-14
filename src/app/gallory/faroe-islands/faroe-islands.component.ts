import { Component, OnInit } from '@angular/core';
import {CollectionService} from '../../shared/posterService/collection.service';
import {PosterModel} from '../../shared/models/posterModel';
import {FavouritesService} from "../../shared/favourites/favourites.service";
import {Favourite} from "../../shared/favourites/favourite";

@Component({
  selector: 'app-faroe-islands',
  templateUrl: './faroe-islands.component.html',
  styleUrls: ['./faroe-islands.component.scss']
})
export class FaroeIslandsComponent implements OnInit {
  favourites: Favourite[];
  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService,
              private  fav: FavouritesService) { }

  ngOnInit(): void {
    this.Poster.getCollection(2).then( (data) => {
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
  }
}
