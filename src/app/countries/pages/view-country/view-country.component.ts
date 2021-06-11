import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor(private activeRoute     : ActivatedRoute,
              private countriesServie : CountriesService) { }

  ngOnInit() {
    // this.activeRoute.params
    //       .subscribe(
    //         ({id}) => {
    //             this.countriesServie.getCountryByAlphaCode(id)
    //               .subscribe(
    //                 response => console.log(response)
    //               )
    //         }
    //       )

    this.activeRoute.params
      .pipe(
        switchMap(({id}) => this.countriesServie.getCountryByAlphaCode(id)),
        tap( console.log )
      )
      .subscribe(response => this.country = response);

  }

}
