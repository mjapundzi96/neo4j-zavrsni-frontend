import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from './../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LoginService {


    constructor(
        private http: Http,
        private router: Router,
        private errorsService: ErrorsService
    ) {

    }

    isAuthenticated() {
        if (localStorage.getItem('securityToken'))
            return true;
        return false;
    }

    private loginHeaders = new Headers(/* { 'Accept': 'application/json', 'Content-Type': 'application/json' } */);
    private loginOptions = new RequestOptions({ headers: this.loginHeaders });

    private getToken() {
        const token = 'Bearer ' + localStorage.getItem('securityToken');
        if (token) {
            const headers = new Headers({
                'Authorization': token,
            });
            return new RequestOptions({ headers: headers });
        }
    }


    login(data) {
        return this.http.post(BASE_URL + 'auth/signin', data, this.loginOptions)
            .pipe(
                map((response: Response) => {
                    const res_json = response.json();
                    if (data.username && res_json.accessToken) {
                        localStorage.setItem('securityToken', res_json.accessToken);
                        localStorage.setItem('username', data.username);
                    }
                    return data;
                }),
                catchError((err: Response) =>{
                    this.errorsService._handleError(err);
                    throw err;
                }))
    }

    logout() {
        localStorage.clear();
        window.location.href = '/auth/signin'
    }
}
