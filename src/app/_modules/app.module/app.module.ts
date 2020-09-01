import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { SharedModule } from '../shared.module/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';
import { ToasterModule } from 'angular2-toaster';
import { AlertService } from './../../_services/alert.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HighlightSearch } from 'src/app/pipes/highlight-search.pipe';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        SharedModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        ToasterModule.forRoot(),
        CookieModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot(),
        
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        AlertService,
    ],
    exports:[
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
