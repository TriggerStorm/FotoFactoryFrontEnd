import { Component, OnInit } from '@angular/core';
import {PosterModel} from '../../shared/models/posterModel';
import {CollectionService} from '../../shared/posterService/collection.service';

@Component({
  selector: 'app-scotland',
  templateUrl: './scotland.component.html',
  styleUrls: ['./scotland.component.scss']
})
export class ScotlandComponent implements OnInit {

  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService) { }

  ngOnInit(): void {
    this.Poster.getCollection(5).then( (data) => {
      console.log(data);
      this.Collection = data;
    });
  }


  onClick(): void {
    this.isActive = !this.isActive;
  }
}
