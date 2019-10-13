import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartComponent } from 'highcharts-angular';
import { LineChartsComponent } from './lineCharts/lineCharts.component';
import { AreaChartsComponent } from './areaCharts/areaCharts.component';
import { BarChartsComponent } from './barCharts/barCharts.component';
import { ColumnChartsComponent } from './columnCharts/columnCharts.component';
import { PieChartsComponent } from './PieCharts/PieCharts.component';
import { ScatterChartsComponent } from './ScatterCharts/ScatterCharts.component';
import { DynamicChartsComponent } from './DynamicCharts/DynamicCharts.component';
import { CombinationChartsComponent } from './CombinationCharts/CombinationCharts.component';
import { CubeChartsComponent } from './3DCharts/3DCharts.Component';
// import { MapChartsComponent } from './MapCharts/MapCharts.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    LineChartsComponent,
    AreaChartsComponent,
    BarChartsComponent,
    ColumnChartsComponent,
    PieChartsComponent,
    ScatterChartsComponent,
    DynamicChartsComponent,
    CombinationChartsComponent,
    CubeChartsComponent,
    // MapChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
