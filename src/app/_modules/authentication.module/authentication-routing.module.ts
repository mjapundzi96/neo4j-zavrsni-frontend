import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        canActivateChild: [AuthGuard],
        children: [{
            path: '',
            component: SigninComponent
        }, {
            path: 'signin',
            component: SigninComponent
        },]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AuthenticationRoutingModule {
}
