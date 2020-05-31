import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainContentRoutingModule } from './main-content-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from '../../_components/header/header.component';
import { FooterComponent } from '../../_components/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SpinnerComponent } from './spiner/spiner.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsModule } from './artists/artists.module';

@NgModule({
    entryComponents: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MainContentRoutingModule,
        ArtistsModule

    ],
    declarations: [
        MainContentComponent,
        HomePageComponent,
        HeaderComponent,
        FooterComponent,
        SpinnerComponent,

    ],
    providers: []
})

export class MainContentModule {
}

