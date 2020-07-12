import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistComponent } from './artists/artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { SongsComponent } from './songs/songs.component';
import { SongComponent } from './songs/song/song.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


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
            {
                path:'albums',
                component:AlbumsComponent
            },
            {
                path:'albums/:id',
                component:AlbumComponent
            },
            {
                path:'songs',
                component:SongsComponent
            },
            {
                path:'songs/:id',
                component:SongComponent
            },
            {
                path:'user-profile',
                component:UserProfileComponent
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
