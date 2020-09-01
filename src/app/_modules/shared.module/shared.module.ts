import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../_services/auth.service';
import { HighlightSearch } from 'src/app/pipes/highlight-search.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        AuthService,
        HighlightSearch,
    ],
    declarations: [
    ],
    entryComponents: [
    ],
    exports: [
    ]
})

export class SharedModule { }
