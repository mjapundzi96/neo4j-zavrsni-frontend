import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from 'src/app/_services/artists.service';
import { owlOptions } from 'src/app/const/owl-options.const'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  id: number;
  artist: any;
  customOptions = owlOptions
  constructor(
    private route: ActivatedRoute,
    private artistsService: ArtistsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id
      this.artistsService.getArtist(this.id).subscribe(res => {
        this.artist = res;
      })
    })
  }

}
