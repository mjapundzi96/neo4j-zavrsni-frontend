import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from '../../environments/environment';
import { AlertService } from './alert.service'
import { Observable } from 'rxjs';
import { Song } from './songs.service';

export interface Album {
  id: number;
  name: string;
  coverUrl: string;
  year:number;
  artist: {
    id: number;
    name: string;
  };
  songs?:Array<Song>
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http: Http,
    private errorsService: ErrorsService) {
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

  getAlbum(id: number):Observable<Album> {
    return this.http.get(`${BASE_URL}albums/${id}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }
}
