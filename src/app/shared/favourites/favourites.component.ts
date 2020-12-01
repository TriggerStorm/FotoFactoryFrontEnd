import { Component, OnInit } from '@angular/core';
import {FavouritesService} from './favourites.service';
import {Favourite} from './favourite';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites: Favourite[];

  constructor(private favouriteService: FavouritesService) { }

  ngOnInit(): void {
    this.favouriteService.getAllFavourites().then( (data) => {
      console.log(data);
      this.favourites = data;
    });
  }



}
