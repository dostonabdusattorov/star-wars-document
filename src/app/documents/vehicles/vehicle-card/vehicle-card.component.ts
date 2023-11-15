import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../../models';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
})
export class VehicleCardComponent {
  @Input() vehicle!: Vehicle;
}
