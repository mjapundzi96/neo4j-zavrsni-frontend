import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from './../../environments/environment';
import { AlertService } from './alert.service'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: Http,
    private router: Router,
    private errorsService: ErrorsService,
    private alertService: AlertService) {
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

  getUser(id: number) {
    return this.http.get(`${BASE_URL}users/${id}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getRecommendedArtists(user_id: number, offset: number, limit: number) {
    return this.http.get(`${BASE_URL}users/${user_id}/recommended_artists?offset=${offset}&limit=${limit}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getRecommendedAlbums(user_id: number, offset: number, limit: number) {
    return this.http.get(`${BASE_URL}users/${user_id}/recommended_albums?offset=${offset}&limit=${limit}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getListenHistory(user_id) {
    return this.http.get(`${BASE_URL}users/${user_id}/listen_history`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }
}
