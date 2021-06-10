import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountyComponent } from './pages/for-county/for-county.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountriesInputComponent } from './components/countries-input/countries-input.component';

@NgModule({
  declarations: [
    ViewCountryComponent,
    ForCapitalComponent,
    ForCountyComponent,
    ForRegionComponent,
    CountriesTableComponent,
    CountriesInputComponent
  ],
  exports: [
    ViewCountryComponent,
    ForCapitalComponent,
    ForCountyComponent,
    ForRegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
