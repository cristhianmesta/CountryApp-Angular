import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styles: [  
    `
    .small-flag{
      width: 50px;
    }
    `
  ]
})
export class CountriesTableComponent {

  @Input() countries : Country[] = [];

  constructor() { }

}
