import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineChartsComponent } from './lineCharts/lineCharts.component';
import { AreaChartsComponent } from './areaCharts/areaCharts.component';
import { BarChartsComponent } from './barCharts/barCharts.component';
import { ColumnChartsComponent} from './columnCharts/columnCharts.component';
import { PieChartsComponent } from './PieCharts/PieCharts.component';
import { ScatterChartsComponent } from './ScatterCharts/ScatterCharts.component';
import { DynamicChartsComponent } from './DynamicCharts/DynamicCharts.component';
import { CombinationChartsComponent } from './CombinationCharts/CombinationCharts.component';
import { CubeChartsComponent } from "./3DCharts/3DCharts.Component";
// import { MapChartsComponent } from './MapCharts/MapCharts.component';

const routes: Routes = [
  { path: 'LineCharts', component: LineChartsComponent},
  { path: 'AreaCharts', component: AreaChartsComponent},
  { path: 'BarCharts', component: BarChartsComponent},
  { path: 'ColCharts', component: ColumnChartsComponent},
  { path: 'PieCharts', component: PieChartsComponent},
  { path: 'ScatterCharts', component: ScatterChartsComponent },
  { path: 'DynamicCharts', component: DynamicChartsComponent},
  { path: 'CombinationCharts', component: CombinationChartsComponent },
  { path: '3DCharts', component: CubeChartsComponent },
  // { path: 'MapCharts', component: MapChartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
