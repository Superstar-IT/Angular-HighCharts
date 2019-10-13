import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './3DCharts.component.html',
  styleUrls: ['./3DCharts.component.css']
})
export class CubeChartsComponent {
   title = 'angular-highcharts';
   highcharts = Highcharts;
   
   chartOptions_3D_Col = {      
      chart: {
         renderTo: 'container',
         type: 'column',
         margin: 75,
         options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 15
         }
      },         
      title : {
         text: 'Chart rotation demo'   
      },
      plotOptions : {
         column: {
            depth: 25
         }
      },
      series : [{
         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
               194.1, 95.6, 54.4]
      }]
   };

   chartOptions_3D_Scatter = {      
      chart: {         
         type: 'scatter',
         marginBottom: 100,
         marginRight: 50,
         options3d: {
            enabled: true,
            alpha: 30,
            beta: 30,
            depth: 250,
            viewDistance: 5,
            frame:{
               bottom :{
                  size: 1,
                  color: 'rgba(0, 0, 0, 0.02)'
               },
               back :{
                  size: 1,
                  color: 'rgba(0, 0, 0, 0.04)'
               },
               side :{
                  size: 1,
                  color: 'rgba(0, 0, 0, 0.06)'
               }
            }
         }
      },         
      title : {
         text: '3D Scatter Plot'   
      },
      xAxis:{
         min:0,
         max:10        
      }, 
      yAxis:{
         min:0,
         max:10        
      },
      zAxis:{
         min:0,
         ax:10        
      },
      series : [{
         name: 'Reading',
         data: [  
            [1, 6, 5], [8, 7, 9], [1, 3, 4], [4, 6, 8], [5, 7, 7], [6, 9, 6],  
            [7, 0, 5], [2, 3, 3], [3, 9, 8], [3, 6, 5], [4, 9, 4], [2, 3, 3],  
            [6, 9, 9], [0, 7, 0], [7, 7, 9], [7, 2, 9], [0, 6, 2], [4, 6, 7],  
            [3, 7, 7], [0, 1, 7], [2, 8, 6], [2, 3, 7], [6, 4, 8], [3, 5, 9],  
            [7, 9, 5], [3, 1, 7], [4, 4, 2], [3, 6, 2], [3, 1, 6], [6, 8, 5],  
            [6, 6, 7], [4, 1, 1], [7, 2, 7], [7, 7, 0], [8, 8, 9], [9, 4, 1],  
            [8, 3, 4], [9, 8, 9], [3, 5, 3], [0, 2, 4], [6, 0, 2], [2, 1, 3],  
            [5, 8, 9], [2, 1, 1], [9, 7, 6], [3, 0, 2], [9, 9, 0], [3, 4, 8],  
            [2, 6, 1], [8, 9, 2], [7, 6, 5], [6, 3, 1], [9, 3, 1], [8, 9, 3],  
            [9, 1, 0], [3, 8, 7], [8, 0, 0], [4, 9, 7], [8, 6, 2], [4, 3, 0],  
            [2, 3, 5], [9, 1, 4], [1, 1, 4], [6, 0, 2], [6, 1, 6], [3, 8, 8],  
            [8, 8, 7], [5, 5, 0], [3, 9, 6], [5, 4, 3], [6, 8, 3], [0, 1, 5],  
            [6, 7, 3], [8, 3, 2], [3, 8, 3], [2, 1, 6], [4, 6, 7], [8, 9, 9],  
            [5, 4, 2], [6, 1, 3], [6, 9, 5], [4, 8, 2], [9, 7, 4], [5, 4, 2],  
            [9, 6, 1], [2, 7, 3], [4, 5, 4], [6, 8, 1], [3, 4, 0], [2, 2, 6],  
            [5, 1, 2], [9, 9, 7], [6, 9, 9], [8, 4, 3], [4, 1, 7], [6, 2, 5],  
            [0, 4, 9], [3, 5, 9], [6, 9, 1], [1, 9, 2]  
         ]
      }]
   };

   chartOptions_3D_Pie = {   
      chart : {
         type:'pie',
         options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
         }
      },
      title : {
         text: 'Browser market shares at a specific website, 2014'   
      },
      tooltip : {
         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions : {
         pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
               enabled: true,
               format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
               style: {
                  color: 'black',
               }
            }
         }
      },
      series : [{
         type: 'pie',
         name: 'Browser share',
         data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
               name: 'Chrome',
               y: 12.8,
               sliced: true,
               selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',      0.7]
         ]
      }]
   };
}
