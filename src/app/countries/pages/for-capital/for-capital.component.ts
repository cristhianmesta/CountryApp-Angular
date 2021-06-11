import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: [
  ]
})

export class ForCapitalComponent  {
  
  searchParameter : string = "";
  thereIsError    : boolean = false;

  countries : Country[] = [];

  constructor(private countriesService : CountriesService) { 

  }

  search(parameter : string){
    this.thereIsError = false;
    this.searchParameter = parameter;
    this.countriesService.forCapitalService(this.searchParameter)
        .subscribe(
            (response) => {
              this.countries = response;
            },
            (error) => {
              this.thereIsError =true;
              this.countries = [];
            }
          );
  }

  viewCountry(countryCode:string){
    console.log(countryCode);
  }

  suggest(termino : string){
    this.thereIsError = false;
    console.log("Holas");
  }

}
