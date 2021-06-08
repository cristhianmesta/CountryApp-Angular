import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-for-county',
  templateUrl: './for-county.component.html',
  styles: [
  `
    .small-flag{
      width: 50px;
    }
  `
  ]
})
export class ForCountyComponent {

  searchParameter : string = "";
  thereIsError    : boolean = false;

  countries : Country[] = [];


  constructor(private countriesService : CountriesService) { 

  }

  search(){
    this.thereIsError = false;
    this.countriesService.forCountryService(this.searchParameter)
        .subscribe(
            (response) => {
              this.countries = response;
            },
            (error) => {
              this.thereIsError =true;
              this.countries = [];
              console.log(this.thereIsError);
            }
          );
  }

  viewCountry(countryCode:string){
    console.log(countryCode);
  }

}
