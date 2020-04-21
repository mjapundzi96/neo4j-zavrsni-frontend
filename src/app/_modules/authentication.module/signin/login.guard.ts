import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../../_services/login.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private loginService: LoginService
    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.loginService.isAuthenticated();
    }
}
