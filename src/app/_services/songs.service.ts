import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from '../../environments/environment';
import { AlertService } from './alert.service'
@Injectable({
  providedIn: 'root'
})
export class SongsService {

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

  getSong(id: number) {
    return this.http.get(`${BASE_URL}songs/${id}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  viewSong(id: number, data: any) {
    return this.http.post(`${BASE_URL}songs/${id}/view`, data, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getUsersAlsoViewed(id:number){
    return this.http.get(`${BASE_URL}songs/${id}/users_also_viewed`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }

  getRelatedSongs(id:number){
    return this.http.get(`${BASE_URL}songs/${id}/related`, this.getToken())
    .pipe(
      map((response: Response) => response.json()),
      catchError((err: Response) => {
        this.errorsService._handleError(err);
        throw err;
      }))
  }
}
