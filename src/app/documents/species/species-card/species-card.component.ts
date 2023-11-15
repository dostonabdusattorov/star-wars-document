import { Component, Input } from '@angular/core';
import { Species } from '../../../../models';

@Component({
  selector: 'app-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.scss'],
})
export class SpeciesCardComponent {
  @Input() species!: Species;
}
