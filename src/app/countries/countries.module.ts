import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountyComponent } from './pages/for-county/for-county.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ViewCountryComponent,
    ForCapitalComponent,
    ForCountyComponent,
    ForRegionComponent
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
