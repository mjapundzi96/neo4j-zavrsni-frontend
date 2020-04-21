import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loginHeaders = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
    });
    public loginOptions = new RequestOptions({ headers: this.loginHeaders, });
    constructor() { }

    isAuthenticated() {
        if (localStorage.getItem('securityToken')) return true;
        return false;
    }

    getToken() {
        const token = 'Bearer ' + localStorage.getItem('securityToken');
        if (token) {
            const headers = new Headers({
                Authorization: token,
                
            });
            return new RequestOptions({ headers: headers });
        }
    }
}
