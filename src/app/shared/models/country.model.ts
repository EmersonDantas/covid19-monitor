import { CountryInfo } from './country-info.model';

export class Country {
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: 109;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
}
