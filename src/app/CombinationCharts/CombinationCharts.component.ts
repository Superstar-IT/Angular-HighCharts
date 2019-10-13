import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
import * as highchartsTreemap from 'highcharts/modules/treemap';

@Component({
  selector: 'app-root',
  templateUrl: './CombinationCharts.component.html',
  styleUrls: ['./CombinationCharts.component.css']
})
export class CombinationChartsComponent {
   title = 'angular-highcharts';
   highcharts = Highcharts;
   chartOptions_comb_1 = {               
      title : {
         text: 'Combination chart'   
      },     
      xAxis : {
         categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
      },
      labels : {
         items: [{
            html: 'Total fruit consumption',
            style: {
               left: '50px',
               top: '18px',
               color: 'black'
            }
         }]
      },
      series : [
         {
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
         }, 
         {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
         }, 
         {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
         }, 
         {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33]
         },
         {
            type: 'pie',
            name: 'Total consumption',
            data: [
               {
                  name: 'Jane',
                  y: 13,
                  color: Highcharts.getOptions().colors[0] // Jane's color
               }, 
               {
                  name: 'John',
                  y: 23,
                  color: Highcharts.getOptions().colors[1] // John's color
               }, 
               {
                  name: 'Joe',
                  y: 19,
                  color: Highcharts.getOptions().colors[2] // Joe's color
               }
            ],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
               enabled: false
            }            
         }, 
      ]
   };

   chartOptions_comb_2 = {         
      chart : {
         zoomType: 'xy'
      },
      title : {
         text: 'Source: WorldClimate.com'   
      },   
      subtitle : {
         text: 'Average Monthly Temperature and Rainfall in Tokyo'
      },
      xAxis : {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         crosshair: true
      },
      yAxis : [
         { // Primary yAxis
            labels: {
               format: '{value}\xB0C',
                  style: {
                     color: Highcharts.getOptions().colors[1]
                  }
            },
            title: {
               text: 'Temperature',
               style: {
                  color: Highcharts.getOptions().colors[1]
               }
            }
         }, 
         { // Secondary yAxis
            title: {
               text: 'Rainfall',
               style: {
                  color: Highcharts.getOptions().colors[0]
               }
            },
            labels: {
               format: '{value} mm',
               style: {
                  color: Highcharts.getOptions().colors[0]
               }
            },
            opposite: true
         }
      ],
      tooltip: {
         shared: true
      },
      legend: {
         layout: 'vertical',
         align: 'left',
         x: 60,
         verticalAlign: 'top',
         y: 100,
         floating: true,
               
         backgroundColor: '#FFFFFF'
      },
      series : [
         {
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                    216.4, 194.1, 95.6, 54.4],
            tooltip: {
               valueSuffix: ' mm'
            }
         }, 
         {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
               valueSuffix: '\xB0C'
            }
         }
      ]
   };

   chartOptions_comb_3 = {         
      chart : {
         zoomType: 'xy'
      },
      title : {
         text: 'Source: WorldClimate.com'   
      },   
      subtitle : {
         text: 'Average Monthly Temperature and Rainfall in Tokyo'
      },
      xAxis : {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         crosshair: true
      },
      yAxis : [
         { // Primary yAxis
            labels: {
               format: '{value}\xB0C',
               style: {
                  color: Highcharts.getOptions().colors[1]
               }
            },
            title: {
               text: 'Temperature',
               style: {
                  color: Highcharts.getOptions().colors[1]
               }
            },
            opposite: true
         }, 
         { // Secondary yAxis
            title: {
               text: 'Rainfall',
               style: {
                  color: Highcharts.getOptions().colors[0]
               }
            },
            labels: {
               format: '{value} mm',
               style: {
                  color: Highcharts.getOptions().colors[0]
               }
            }
         },
         { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
               text: 'Sea-Level Pressure',
               style: {
                  color: Highcharts.getOptions().colors[1]
               }
            },
            labels: {
               format: '{value} mb',
               style: {
                  color: Highcharts.getOptions().colors[1]
               }
            },
            opposite:true  
         }
      ],
      tooltip: {
         shared: true
      },
      legend: {
         enabled:false
      },
      series : [
         {
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,
                    216.4, 194.1, 95.6, 54.4],
            tooltip: {
               valueSuffix: ' mm'
            }
         }, 
         {
            name: 'Sea-Level Pressure',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2,
                     1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
               enabled: false
            },
            dashStyle: 'shortdot',
            tooltip: {
               valueSuffix: ' mb'
            }
         },
         {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
               valueSuffix: '\xB0C'
            }
         }
      ]
   };

   chartOptions_comb_4 = {               
      title : {
         text: 'Scatter plot with regression line'   
      },
      xAxis : {
         min: -0.5,
         max: 5.5
      },
      yAxis : {
         min: 0
      },
      series : [
      {
         type: 'line',
         name: 'Regression Line',
         data: [[0, 1.11], [5, 4.51]],
         marker: {
            enabled: false
         },
         states: {
            hover: {
               lineWidth: 0
            }
         },
         enableMouseTracking: false
      }, 
      {
         type: 'scatter',
         name: 'Observations',
         data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
         marker: {
            radius: 4
         }
      }]
   };
}
