import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../_services/login.service';


@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    form: FormGroup;
    username: AbstractControl;
    password: AbstractControl;
    activeField = false;
    activeFieldPw = false;

    constructor(
        private router: Router,
        private loginService: LoginService,
    ) { }

    ngOnInit() {
        this.form = new FormGroup({
            'username': new FormControl('', [
                Validators.required,
            ]),
            'password': new FormControl('', [
                Validators.required
            ])
        });

        this.username = this.form.get('username');
        this.password = this.form.get('password');
    }


    onSubmit() {
        this.loginService.login(this.form.value)
            .subscribe(res => {
                console.log(res)
                this.router.navigateByUrl('/main/')
            });

    }

    setActive(type: string, status: boolean) {
        (type === 'login') ? this.activeField = status : this.activeFieldPw = status;
    }


}
