import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from '../../environments/environment';
import { AlertService } from './alert.service'
import { Observable } from 'rxjs';

export interface Song {
  id: number;
  title: string;
  views: number;
  likes: number;
  album?: {
    id: number;
    name: string;
    coverUrl: string;
    year: number;
    artist?: {
      id: number;
      name: string;

    }
  };
  tags?:Array<string>;
}

@Injectable({
  providedIn: 'root'
})

export class SongsService {

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

  getSongs(tag: string):Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}songs?tag=${tag}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getSong(id: number):Observable<Song> {
    return this.http.get(`${BASE_URL}songs/${id}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  viewSong(id: number) {
    return this.http.post(`${BASE_URL}songs/${id}/view`, {}, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getUsersAlsoViewed(id: number):Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}songs/${id}/users_also_viewed`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getRelatedSongs(id: number):Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}songs/${id}/related`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getSongsWithSimilarTags(id: number):Observable<Array<Song>> {
    return this.http.get(`${BASE_URL}songs/${id}/similar_tags`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  likeSong(id: number) {
    return this.http.post(`${BASE_URL}songs/${id}/like`, {}, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  unLikeSong(id: number) {
    return this.http.post(`${BASE_URL}songs/${id}/unlike`, {}, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getHasLiked(id: number):Observable<boolean> {
    return this.http.get(`${BASE_URL}songs/${id}/has_liked`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }
}
