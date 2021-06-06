import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountyComponent } from './pages/for-county/for-county.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';

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
    CommonModule
  ]
})
export class CountriesModule { }
