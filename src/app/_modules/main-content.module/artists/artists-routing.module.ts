import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArtistsComponent } from './artists.component'
import { ArtistComponent } from './artist/artist.component' 

const routes: Routes = [
    {
        path: '',
        component: ArtistsComponent,
        children: [
            {
                path: ':id',
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

export class ArtistsRoutingModule { }
