import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { ToasterService } from 'angular2-toaster';

@Injectable()
export class AlertService {

    constructor(
        private router: Router,
        private toasterService: ToasterService,
    ) { }

    success(message: string, title: string = null) {
        this.toasterService.pop('success', title, message);
    }

    error(message: string, title: string = null) {
        this.toasterService.clear()
        this.toasterService.pop('error', title, message);
    }
}
