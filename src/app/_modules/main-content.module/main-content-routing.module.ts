import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';


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
                loadChildren: () => import('./artists/artists.module')
                    .then(m => m.ArtistsModule),
            },
            {
                path:'albums',
                loadChildren: () => import('./albums/albums.module')
                    .then(m => m.AlbumsModule),
            },
            {
                path: 'songs',
                loadChildren: () => import('./songs/songs.module')
                    .then(m => m.SongsModule),
            },
            {
                path: 'tags',
                loadChildren: () => import('./tags/tags.module')
                    .then(m => m.TagsModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class MainContentRoutingModule { }
