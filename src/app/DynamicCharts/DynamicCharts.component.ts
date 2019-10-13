import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './DynamicCharts.component.html',
  styleUrls: ['./DynamicCharts.component.css']
})
export class DynamicChartsComponent {
   title = 'angular-highcharts';
   highcharts = Highcharts;
   chartOptions_update = {         
      chart : {
         type: 'spline',
         animation: Highcharts.SVGElement, // don't animate in IE < IE 10.
         marginRight: 10,
         events: {
            load: function () {
               // set up the updating of the chart each second
               var series = this.series[0];
               setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                  y = Math.random();
                  series.addPoint([x, y], true, true);
               }, 1000);
            }
         }
      },
      title : {
         text: 'Live random data'   
      },   
      xAxis : {
         type: 'datetime',
         tickPixelInterval: 150
      },
      yAxis : {
         title: {
            text: 'Value'
         },
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },
      tooltip: {
         formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2);
         }
      },
      plotOptions: {
         area: {
            pointStart: 1940,
            marker: {
               enabled: false,
               symbol: 'circle',
               radius: 2,
               states: {
                  hover: {
                     enabled: true
                  }
               }
            }
         }
      },
      legend: {
         enabled: false
      },
      exporting : {
         enabled: false
      },
      series : [{
         name: 'Random data',
         data: (function () {
            // generate an array of random data
            var data = [],time = (new Date()).getTime(),i;
            for (i = -19; i <= 0; i += 1) {
               data.push({
                  x: time + i * 1000,
                  y: Math.random()
               });
            }
            return data;
         }())    
      }]
   };
   
   chartOptions_add = {         
      chart : {
         type: 'scatter',
         margin: [70, 50, 60, 80], 
         marginRight: 10,
         events: {
            click: function (e) {
              // find the clicked values and the series
              var x = e.xAxis[0].value,
              y = e.yAxis[0].value,
              series = this.series[0];
                     
              // Add it
              series.addPoint([x, y]);
           }
        }
      },
      title : {
         text: 'User supplied data'   
      },   
      subtitle : {
         text: 'Click the plot area to add a point. Click a point to remove it.'
      },
      xAxis : {
         gridLineWidth: 1,
         minPadding: 0.2,
         maxPadding: 0.2,
         maxZoom: 60
      },
      yAxis : {
         title: {
            text: 'Value'
         },
         minPadding: 0.2,
         maxPadding: 0.2,
         maxZoom: 60,
         plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
         }]
      },
      plotOptions: {
         series: {
            lineWidth: 1,
            point: {
               events: {
                  'click': function () {
                     if (this.series.data.length > 1) {
                        this.remove();
                     }
                  }
               }
            }
         }
      },
      legend: {
         enabled: false
      },
      exporting : {
         enabled: false
      },
      series : [{
         data: [[20, 20], [80, 80]]
      }]
   };
}
