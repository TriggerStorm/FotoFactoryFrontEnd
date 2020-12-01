import { Component, OnInit } from '@angular/core';
import {PosterModel} from '../../shared/models/posterModel';
import {CollectionService} from '../../shared/posterService/collection.service';
import {ancestorWhere} from 'tslint';



@Component({
  selector: 'app-denmark',
  templateUrl: './denmark.component.html',
  styleUrls: ['./denmark.component.scss']
})
export class DenmarkComponent implements OnInit {
  public isActive = false;
  Collection: PosterModel[];
  constructor(private Poster: CollectionService) { }


  ngOnInit(): void {
    this.Poster.getCollection(1).then( (data) => {
      console.log(data);
      this.Collection = data;
    });
  }


  onClick(): void {
    this.isActive = !this.isActive;
  }
}
