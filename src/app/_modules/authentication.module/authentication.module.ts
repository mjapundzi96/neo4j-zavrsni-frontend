import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module/shared.module';


@NgModule({
    imports: [
        AuthenticationRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    declarations: [
        SigninComponent,
        AuthComponent
    ],
    providers: [
    ]
})
export class AuthenticationModule { }
