import { Component, OnInit } from '@angular/core';
import {PosterModel} from '../../shared/models/posterModel';
import {CollectionService} from '../../shared/posterService/collection.service';
import {FavouritesService} from "../../shared/favourites/favourites.service";
import {Favourite} from "../../shared/favourites/favourite";

@Component({
  selector: 'app-black-and-white',
  templateUrl: './black-and-white.component.html',
  styleUrls: ['./black-and-white.component.scss']
})
export class BlackAndWhiteComponent implements OnInit {
  favourites: Favourite[];
  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService,
              private  fav: FavouritesService) { }

  ngOnInit(): void {
    this.Poster.getCollection(4).then( (data) => {
      console.log(data);
      this.Collection = data;
    });

    this.fav.getAllFavourites()
      .then(favourites => {
        this.favourites = favourites;
      });
  }


  onClick(): void {
    this.isActive = !this.isActive;
  }
}
