import { Component, OnInit } from '@angular/core';
import {PosterModel} from '../../shared/models/posterModel';
import {CollectionService} from '../../shared/posterService/collection.service';

@Component({
  selector: 'app-black-and-white',
  templateUrl: './black-and-white.component.html',
  styleUrls: ['./black-and-white.component.scss']
})
export class BlackAndWhiteComponent implements OnInit {

  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService) { }

  ngOnInit(): void {
    this.Poster.getCollection(4).then( (data) => {
      console.log(data);
      this.Collection = data;
    });
  }


  onClick(): void {
    this.isActive = !this.isActive;
  }
}
