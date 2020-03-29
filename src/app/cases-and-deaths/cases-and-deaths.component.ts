import { Component, OnInit } from '@angular/core';
import { NovelCovidService } from '../novel-covid.service';

@Component({
  selector: 'app-cases-and-deaths',
  templateUrl: './cases-and-deaths.component.html',
  styleUrls: ['./cases-and-deaths.component.css']
})
export class CasesAndDeathsComponent implements OnInit {

  constructor(private service: NovelCovidService) { }

  ngOnInit(): void {
    this.service.getAllCountries().subscribe(result => {
      console.log(result);
    })
  }

}
