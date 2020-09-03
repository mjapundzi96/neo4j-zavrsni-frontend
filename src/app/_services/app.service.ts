import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from '../../environments/environment';
import { Song } from './songs.service';
import { Observable } from 'rxjs';
import { Album } from './albums.service'
import { Artist } from './artists.service';

export interface SearchResultType{
  type:'Artist' | 'Album' | 'Song';
  result: Artist | Album | Song
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: Http,
    private errorsService: ErrorsService,
  ) {
  }

  private getToken() {
    const token = 'Bearer ' + localStorage.getItem('securityToken');
    if (token) {
      const headers = new Headers({
        'Authorization': token,
      });
      return new RequestOptions({ headers: headers });
    }
  }

  getBestOfPreferredArtist(): Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}bestof_preferred_artist`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getBestOfPreferredGenre(): Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}bestof_preferred_genre`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getBestOfPreferredDecade(): Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}bestof_preferred_decade`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getMostPopularSongs(period: 'week' | 'month' | 'alltime'): Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}most_popular_songs?period=${period}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  searchAll(search: string): Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}search_all?search=${search}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }
}
