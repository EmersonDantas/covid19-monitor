import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule,  } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CasesAndDeathsComponent } from './cases-and-deaths/cases-and-deaths.component';
import { NovelCovidService } from './novel-covid.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CasesAndDeathsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [NovelCovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
