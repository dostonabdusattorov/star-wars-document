import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DocumentsRoutingModule } from './documents-routing.module';
import { PersonCardComponent } from './people/person-card/person-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PlanetCardComponent } from './planets/planet-card/planet-card.component';
import { SpeciesCardComponent } from './species/species-card/species-card.component';
import { StarshipCardComponent } from './starships/starship-card/starship-card.component';
import { VehicleCardComponent } from './vehicles/vehicle-card/vehicle-card.component';

@NgModule({
  declarations: [
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    PersonCardComponent,
    PlanetCardComponent,
    SpeciesCardComponent,
    StarshipCardComponent,
    VehicleCardComponent,
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class DocumentsModule {}
