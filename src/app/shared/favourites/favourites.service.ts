import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Favourite} from './favourite';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  apiUrl = 'https://localhost:44387/api/favourite';
  private PostString: string;
  private deleteString: string;

  constructor(private http: HttpClient) { }

  async getAllFavourites(): Promise<any[]>{
   const uspromise = await this.http.get<any[]>(environment.apiUrl + '/api/favourite').toPromise();
   return uspromise.map(a => {

      console.log(a);
      const path = a.path;
      const posterName = a.posterName;
      return {path, posterName, collectionId: a.collectionId, posterSku: a.posterSku, posterId: a.posterId } as Favourite ;
    });
  }
  // tslint:disable-next-line:typedef
  async addFavorite(fav: number): Promise<any> {
    this.PostString = 'https://localhost:44387/api/Favourite/' + fav; /* This works for now but it simply add the id to the http sring and dont have a boddy*/
    await this.http.post<number>(this.PostString, '').toPromise();
    // tslint:disable-next-line:typedef
  }
  removefavor(fav: number): Observable<Favourite> {
    this.deleteString = 'https://localhost:44387/api/Favourite/' + fav;
    return  this.http.delete<Favourite>(this.apiUrl + '/' + fav);
  }

}
