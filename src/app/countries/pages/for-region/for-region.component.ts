import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
    `
      button {
        margin : 5px;
      }
    `
  ]
})
export class ForRegionComponent implements OnInit {

  countries     : Country[] = [];
  regions       : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion  : string = "";

  constructor(private countriesService : CountriesService) { }

  ngOnInit(): void {
  }

  getCSS(region : string ) : string{
    return  this.activeRegion===region ? "btn-primary" : 'btn-outline-primary';
  }

  listCountries( region : string){
    if(this.activeRegion === region) return;
    this.countries = [];
    this.activeRegion = region;
    this.countriesService.forRegionService(region)
      .subscribe(
        response => {
          setTimeout(() => {
            this.countries = response
          }, 300);
        }    
      )
  }



}
