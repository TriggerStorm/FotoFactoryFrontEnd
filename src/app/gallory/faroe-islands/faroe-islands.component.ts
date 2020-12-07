import { Component, OnInit } from '@angular/core';
import {CollectionService} from '../../shared/posterService/collection.service';
import {PosterModel} from '../../shared/models/posterModel';

@Component({
  selector: 'app-faroe-islands',
  templateUrl: './faroe-islands.component.html',
  styleUrls: ['./faroe-islands.component.scss']
})
export class FaroeIslandsComponent implements OnInit {
  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService) { }

  ngOnInit(): void {
    this.Poster.getCollection(2).then( (data) => {
      console.log(data);
      this.Collection = data;
    });
  }

  onClick(): void {
    this.isActive = !this.isActive;
  }
}
