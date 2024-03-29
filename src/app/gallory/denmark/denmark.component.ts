import { Component, OnInit } from '@angular/core';
import {PosterModel} from '../../shared/models/posterModel';
import {CollectionService} from '../../shared/posterService/collection.service';
import {ancestorWhere} from 'tslint';
import {Loginmodel} from '../../shared/models/loginmodel';
import {Favourite} from '../../shared/favourites/favourite';
import {FavouritesService} from '../../shared/favourites/favourites.service';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-denmark',
  templateUrl: './denmark.component.html',
  styleUrls: ['./denmark.component.scss']
})
export class DenmarkComponent implements OnInit {
  public isActive = false;
  posterId = new FormControl('');
  Collection: PosterModel[];
  isFavor: any;
  favourites: Favourite[];


  constructor(private Poster: CollectionService,
              private  fav: FavouritesService) { }


  ngOnInit(): void {
    this.Poster.getCollection(1).then( (data) => {
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
