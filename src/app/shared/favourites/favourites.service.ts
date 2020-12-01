import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Favourite} from './favourite';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  apiUrl = 'https://localhost:5001/api/favourite';

  constructor(private http: HttpClient) { }

  async getAllFavourites(): Promise<any[]>{
   const uspromise = await this.http.get<any[]>(environment.apiUrl + '/api/favourite').toPromise();
   return uspromise.map(a => {

      console.log(a);
      const path = a.path;
      const posterName = a.posterName;
      return {path, posterName, collectionId: a.collectionId, posterSku: a.posterSku } as Favourite ;
    });
  }
}
