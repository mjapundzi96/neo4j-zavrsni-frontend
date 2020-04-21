import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class MainGuard implements CanActivate {

    status: boolean;

    constructor(private cookieService: CookieService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('securityToken')) return true;
        this.router.navigate(['/auth/signin']);
        return false;
    }
}
