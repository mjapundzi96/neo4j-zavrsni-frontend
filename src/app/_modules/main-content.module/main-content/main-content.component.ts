import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from 'src/app/_components/nav-bar/nav-bar.component';

@Component({
    selector: 'main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {
    @ViewChild('navbar') navbar:NavBarComponent
    constructor(
        private ref:ElementRef<HTMLDivElement>
    ) {}

    ngOnInit() {
       this.ref.nativeElement.onclick = () =>{
           if (this.navbar){
               this.navbar.autocompleteClosed = true;
           }
       }
    }
}
