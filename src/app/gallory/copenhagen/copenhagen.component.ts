import { Component, OnInit } from '@angular/core';
import {PosterModel} from '../../shared/models/posterModel';
import {CollectionService} from '../../shared/posterService/collection.service';

@Component({
  selector: 'app-copenhagen',
  templateUrl: './copenhagen.component.html',
  styleUrls: ['./copenhagen.component.scss']
})
export class CopenhagenComponent implements OnInit {

  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService) { }

  ngOnInit(): void {
    this.Poster.getCollection(3).then( (data) => {
      console.log(data);
      this.Collection = data;
    });
  }


  onClick(): void {
    this.isActive = !this.isActive;
  }
}
