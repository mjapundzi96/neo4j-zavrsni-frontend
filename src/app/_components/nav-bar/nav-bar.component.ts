import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/_services/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  search = ''
  searchResults = []
  autocompleteClosed = true;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {

  }

  onSearch(e) {
    this.search = e.target.value
    if (this.search.length >= 2) this.appService.searchAll(this.search).subscribe(res => {
      this.searchResults = res
      this.autocompleteClosed = false;
    })
  }

  onClick(e) {
    e.stopPropagation()
    this.autocompleteClosed = true;
  }

  onClickInput(e) {
    e.stopPropagation()
    this.autocompleteClosed = false;
  }

  transform(value:string,substring:string): any {
    if (value.toLowerCase().includes(substring.toLowerCase())) return value.replace(substring, "<mark>" + substring + "</mark>");
    return value
  }
}
