import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-for-county',
  templateUrl: './for-county.component.html',
  styles: []
})
export class ForCountyComponent {

  searchParameter : string = "";
  thereIsError    : boolean = false;
  showSuggest     : boolean = false;

  countries       : Country[] = [];
  countriesSuggest: Country[] = [];

  constructor(private countriesService : CountriesService) { 

  }

  search(parameter : string){
    this.thereIsError = false;
    this.searchParameter = parameter;
    this.countriesService.forCountryService(this.searchParameter)
        .subscribe(
            (response) => {
              this.countries = response;
              this.showSuggest = false;
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
    this.showSuggest = true;
    this.thereIsError = false;
    this.countriesService.forCountryService(termino)
        .subscribe( response => {
            this.searchParameter = termino;
            this.countriesSuggest = response.splice(0,3);
        }, error => this.countriesSuggest = []);
  }

}
