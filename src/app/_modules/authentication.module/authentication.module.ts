import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module/shared.module';
import { SignUpComponent } from './signup/signup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        AuthenticationRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        FormsModule,
        NgMultiSelectDropDownModule.forRoot()
    ],
    declarations: [
        SigninComponent,
        AuthComponent,
        SignUpComponent
    ],
    providers: [
    ]
})
export class AuthenticationModule { }
