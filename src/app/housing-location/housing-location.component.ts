import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housingLocation';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
