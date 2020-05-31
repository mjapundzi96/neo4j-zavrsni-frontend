import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';


const routes: Routes = [
    {
        path: '',
        component: MainContentComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'artists',
                component: ArtistsComponent
            },
            {
                path: 'artists/:id',
                component: ArtistComponent
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
