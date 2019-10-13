import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
import * as highchartsTreemap from 'highcharts/modules/treemap';

@Component({
  selector: 'app-root',
  templateUrl: './ScatterCharts.component.html',
  styleUrls: ['./ScatterCharts.component.css']
})
export class ScatterChartsComponent {
  title = 'angular-highcharts';
  highcharts = Highcharts;
   chartOptions_scatter = {         
      title : {
         text: 'Scatter plot'   
      },      
      series : [{
         type: 'scatter',
         zoomType:'xy',
         name: 'Browser share',
         data: [ 1, 1.5, 2.8, 3.5, 3.9, 4.2 ]
      }]
   };
}
