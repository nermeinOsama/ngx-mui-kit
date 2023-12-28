import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MukAlertComponent } from 'ngx-mui-kit/components/muk-alert';
import {
  ButtonType,
  IButton,
  MukButtonComponent,
  MukButtonTypes,
  MukThemePalette,
  TooltipPositions,
} from 'ngx-mui-kit/components/muk-button';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MukAlertComponent,
    MukAlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
