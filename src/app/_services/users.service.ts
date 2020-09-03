import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from './../../environments/environment';
import { AlertService } from './alert.service'
import { Observable } from 'rxjs';

export interface User {
  user_id: number;
  username?: string;
  accessToken?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

  getUser(id: number): Observable<User> {
    return this.http.get(`${BASE_URL}users/${id}`, this.getToken())
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }
}
