import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlbumsComponent } from './albums.component'
import { AlbumComponent } from './album/album.component' 

const routes: Routes = [
    {
        path: '',
        component: AlbumsComponent,
        children: [
            {
                path: ':id',
                component: AlbumComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class AlbumsRoutingModule { }
