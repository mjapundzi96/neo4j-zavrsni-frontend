import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root',
})
export class ErrorsService {
    constructor(
        private http: Http,
        private toasterService: ToasterService,
        private alertService: AlertService,
        private router: Router,
    ) { }

    _handleError(error) {
        if (error.status === 401 || error.status === 498) {
            this.toasterService.pop('error', null, 'Token expired, logging out...');
            setTimeout(() => {
                localStorage.clear();
                this.router.navigate([`/auth/signin`]);
            }, 2000);
        } else if (error.status === 400) {
            console.log(JSON.parse(error._body).message[0])
            this.alertService.error(JSON.parse(error._body).message[0].constraints.matches)       
        } else if (error.status === 403) {
            setTimeout(() => {
                this.alertService.error('Access denied');
                this.router.navigate(['/main/']);
            });
        }
    }
}
