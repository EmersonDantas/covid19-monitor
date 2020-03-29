import { Injectable } from '@angular/core';
import { Service } from './shared/interfaces/service.interface';
import { Country } from './shared/models/country.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovelCovidService implements Service{
  private NOVEL_COVID_API_URL: string = "https://corona.lmao.ninja/";

  constructor(private http: HttpClient) { }

  getAllCountries(sort: string = 'country'): Observable<Array<Country>> {
    let URI: string = this.NOVEL_COVID_API_URL + "countries";
    return this.http.get<Array<Country>>(URI, {
      params: new HttpParams()
        .set("sort", sort)
    });
  }


}
