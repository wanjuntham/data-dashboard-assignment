import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartLikeComponent } from './pie-chart-like/pie-chart-like.component';
import { PieChartImageComponent } from './pie-chart-image/pie-chart-image.component';
import {ChartsModule} from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    PieChartLikeComponent,
    PieChartImageComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
