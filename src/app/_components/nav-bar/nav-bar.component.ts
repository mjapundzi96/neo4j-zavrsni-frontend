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
    this.search = e.target.value.trim()
    if (this.search.length >= 2) this.appService.searchAll(this.search).subscribe(res => {
      this.searchResults = res
      this.autocompleteClosed = false
    })
    else this.autocompleteClosed = true;
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
    const pattern = substring.trim()
    if (value.toUpperCase().includes(pattern.toUpperCase())) return value.replace(new RegExp(pattern, "gi"), "<span class='d-inline-block bg-warning'>$&</span>");
    return value
  }
}
