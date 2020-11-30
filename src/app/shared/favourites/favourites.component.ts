import { Component, OnInit } from '@angular/core';
import {FavouritesService} from "../favourites.service";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(private favouriteService: FavouritesService) { }

  ngOnInit(): void {
    this.favouriteService.getAllFavourites().subscribe()
  }



}
