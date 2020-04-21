import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainGuard } from './main.guard';


const routes: Routes = [
    {
        path: '',
        loadChildren: '../main-content.module/main-content.module#MainContentModule',
        canActivate: [MainGuard]
    }, {
        path: 'auth',
        loadChildren: '../authentication.module/authentication.module#AuthenticationModule'
    }, {
        path: 'main',
        loadChildren: '../main-content.module/main-content.module#MainContentModule',
        canActivate: [MainGuard]
    }, {
        path: '**',
        redirectTo: 'main'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
            initialNavigation: 'enabled'
        }),
    ],
    exports: [RouterModule],
    providers: [MainGuard]
})

export class AppRoutingModule {
}
