import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(
    private http: Http,
    private router: Router,
    private errorsService: ErrorsService
  ) { }

  getAllGenres() {
    return this.http.get(BASE_URL + 'genres', )
      .pipe(
        map((response: Response) => response.json()),
        catchError((err: Response) => {
          this.errorsService._handleError(err);
          throw err;
        }))
  }
}
