import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PosterModel} from '../models/posterModel';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  apiUrl = 'https://localhost:5001/api/Collection';

  constructor(private http: HttpClient) { }

  async getCollection(id: number): Promise<any[]>{
    const uspromise = await this.http.get<any[]>(environment.apiUrl + '/api/Collection/' + id).toPromise();
    return uspromise.map(a => {

      console.log(a);
      const posterId = a.posterId;
      const Name = a.posterName;
      const sku = a.posterSku;
      const path = a.path;
      const colId = a.collectionId;
      const isFavor = a.isFavor;
      return {PId: posterId, PosterName: Name, PosterSku: sku, Path: path, CollectionId: colId, isFavor} as PosterModel ;
    });
  }
}
