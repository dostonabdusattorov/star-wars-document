import { Component, OnInit } from '@angular/core';
import { DocumentsService, MoviesService } from '../services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'star-wars-document';

  constructor(private documentsSer: DocumentsService) {}

  ngOnInit(): void {
    this.documentsSer
      .getVehicles()
      .subscribe((response) => console.log(response));
  }
}
