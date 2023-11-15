import { Component, Input } from '@angular/core';
import { Starship } from '../../../../models';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
})
export class StarshipCardComponent {
  @Input() starship!: Starship;
}
