import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../../_services/login.service';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(
        private cookieService: CookieService,
        private router: Router
    ) { }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('securityToken')) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    }
}