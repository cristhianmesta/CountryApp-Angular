import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl : string = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { 

  }

  forCountryService(param : string) :Observable<Country[]> {
    let url = `${ this.baseUrl }/name/${param}`;
    return this.http.get<Country[]>(url);
  }

}
