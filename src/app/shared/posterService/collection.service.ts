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
      const PosterID = a.id;
      const Name = a.name;
      const sku = a.sku;
      const path = a.path;
      const colId = a.colId;
      return {PosterID, Name, sku, path, colId} as unknown as PosterModel ;
    });
  }
}
