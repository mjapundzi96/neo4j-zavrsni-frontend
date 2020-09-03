import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptions, Http } from '@angular/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { BASE_URL } from './../../environments/environment';
import { AlertService } from './alert.service'
import { Observable } from 'rxjs';

interface LoginData{
    username:string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class LoginService {


    constructor(
        private http: Http,
        private router: Router,
        private errorsService: ErrorsService,
        private alertService: AlertService
    ) {

    }

    isAuthenticated() {
        if (localStorage.getItem('securityToken'))
            return true;
        return false;
    }

    private loginHeaders = new Headers(/* { 'Accept': 'application/json', 'Content-Type': 'application/json' } */);
    private loginOptions = new RequestOptions({ headers: this.loginHeaders });

   
    login(data:LoginData):Observable<LoginData> {
        return this.http.post(BASE_URL + 'auth/signin', data, this.loginOptions)
            .pipe(
                map((response: Response) => {
                    const res_json = response.json();
                    if (data.username && res_json.accessToken) {
                        localStorage.setItem('securityToken', res_json.accessToken);
                        localStorage.setItem('user_id', res_json.user_id);
                    }
                    this.alertService.success("Logged in successfully!")
                    return data;
                }),
                catchError((err: Response) => {
                    this.errorsService._handleError(err);
                    throw err;
                }))
    }

    register(data:LoginData):Observable<LoginData> {
        return this.http.post(BASE_URL + 'auth/signup', data, this.loginOptions)
            .pipe(
                map((response: Response) => {
                    const res_json = response.json();
                    if (data.username && res_json.accessToken) {
                        localStorage.setItem('securityToken', res_json.accessToken);
                        localStorage.setItem('username', data.username);
                    }
                    this.alertService.success("Account successfully created!")
                    return data;
                }),
                catchError((err: Response) => {
                    this.errorsService._handleError(err);
                    throw err;
                }))
    }

    logout() {
        localStorage.clear();
        window.location.href = '/auth/signin'
    }
}
