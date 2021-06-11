import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl : string = "https://restcountries.eu/rest/v2";

  get Params(){
    return new HttpParams().set( 'fields' , 'flag;name;capital;region;alpha2Code');
  }

  constructor(private http: HttpClient) { 

  }

  forCountryService(param : string) :Observable<Country[]> {
    let url = `${ this.baseUrl }/name/${param}`;
    return this.http.get<Country[]>(url, { params : this.Params})
  }

  forCapitalService(param : string) :Observable<Country[]> {
    let url = `${ this.baseUrl }/capital/${param}`;
    return this.http.get<Country[]>(url, { params : this.Params})
  }

  getCountryByAlphaCode(id : string) :Observable<Country> {
    let url = `${ this.baseUrl }/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  forRegionService(param : string) :Observable<Country[]> {
    let url = `${ this.baseUrl }/region/${param}`;
    return this.http.get<Country[]>(url, { params : this.Params})
        .pipe(
          tap(console.log)
        );
  }

}
