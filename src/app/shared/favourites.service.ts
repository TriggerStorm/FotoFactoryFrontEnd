import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  apiUrl = 'https://localhost:5001/api/favourite';

  constructor(private http: HttpClient) { }

  getAllFavourites(): Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl + '/api/favourite');
  }
}
