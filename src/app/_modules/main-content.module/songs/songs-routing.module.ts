import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SongsComponent } from './songs.component'
import { SongComponent } from './song/song.component' 

const routes: Routes = [
    {
        path: '',
        component: SongsComponent,
        children: [
            {
                path: ':id',
                component: SongComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class SongsRoutingModule { }
