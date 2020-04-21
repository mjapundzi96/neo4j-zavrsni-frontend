import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
    {
        path: '',
        component: MainContentComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class MainContentRoutingModule { }
