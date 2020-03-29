import { Observable } from "rxjs";
import { Country } from '../models/country.model';

export interface Service {
  getAllCountries() : Observable<Array<Country>>;
}
