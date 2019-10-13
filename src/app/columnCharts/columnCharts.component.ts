import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
import addMore from "highcharts/highcharts-more";
addMore(Highcharts)

@Component({
  selector: 'app-root',
  templateUrl: './columnCharts.component.html',
  styleUrls: ['./columnCharts.component.css']
})
export class ColumnChartsComponent {
   title = 'angular-highcharts';
   highcharts = Highcharts;
   chartOptions_col = {   
   chart: {
      type: 'column'
   },
   title: {
      text: 'Monthly Average Rainfall'
   },
   subtitle:{
      text: 'Source: WorldClimate.com' 
   },
   xAxis:{
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul',
      'Aug','Sep','Oct','Nov','Dec'],
      crosshair: true        
   },     
   yAxis : {
      min: 0,
      title: {
         text: 'Rainfall (mm)'         
      }      
   },
   tooltip : {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
         '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
   },
   plotOptions : {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   },
   series: [
      {
         name: 'Tokyo',
         data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
            148.5, 216.4, 194.1, 95.6, 54.4]
      }, 
      {
         name: 'New York',
         data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
            91.2, 83.5, 106.6, 92.3]
      }, 
      {
         name: 'London',
         data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6,
            52.4, 65.2, 59.3, 51.2]
      }, 
      {
         name: 'Berlin',
         data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4,
            47.6, 39.1, 46.8, 51.1]
      }]
   };

   chartOptions_col_negative = {   
      chart: {
         type: 'column'
      },
      title: {
         text: 'Column chart with negative values'
      },
      xAxis:{
         categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']        
      },     
      series: [
         {
            name: 'John',
            data: [5, 3, 4, 7, 2]
         }, 
         {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
         }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
         }
      ]
   };

   chartOptions_col_stacked = {   
      chart: {
         type: 'column'
      },
      title: {
         text: 'Historic World Population by Region'
      },
      subtitle : {
         text: 'Source: Wikipedia.org'  
      },
      legend : {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: 250,
         y: 100,
         floating: true,
         borderWidth: 1,
        
         // backgroundColor: (
         //    (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 
         //       '#FFFFFF'), shadow: true
      },
      xAxis:{
         categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
            text: null
         } 
      },
      yAxis : {
         min: 0,
         title: {
            text: 'Population (millions)',
            align: 'high'
         },
         labels: {
            overflow: 'justify'
         }
      },
      tooltip : {
         valueSuffix: ' millions'
      },
      plotOptions : {
         column: {
            dataLabels: {
               enabled: true
            }
         },
         series: {
            stacking: 'normal'
         }
      },
      credits:{
         enabled: false
      },
      series: [
         {
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
         }, 
         {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
         }, 
         {
            name: 'Year 2008',
            data: [973, 914, 4054, 732, 34]      
         }
      ]
   };

   chartOptions_col_group = {   
      chart : {
         type: 'column'
      },
      title : {
         text: 'Total fruit consumption, grouped by gender'   
      },
      xAxis : {
         categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis : {
         allowDecimals: false,
         min: 0,
         title: {
            text: 'Number of fruits'
         }     
      },
      plotOptions : {
         column: {
            stacking: 'normal'        
         }
      },
      credits : {
         enabled: false
      },
      series : [
         {
            name: 'John',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
         }, 
         {
            name: 'Joe',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
         }, 
         {
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
         }, 
         {
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
         }
      ]
   };

   chartOptions_col_percentage = {   
      chart: {
         type: 'column'
      },
      title: {
         text: 'Historic World Population by Region'
      },
      subtitle : {
         text: 'Source: Wikipedia.org'  
      },
      legend : {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: 250,
         y: 100,
         floating: true,
         borderWidth: 1,
        
         // backgroundColor: (
         //    (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 
         //       '#FFFFFF'), shadow: true
       },
       xAxis:{
         categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
            text: null
         } 
      },
      yAxis : {
         min: 0,
         title: {
            text: 'Population (millions)', align: 'high'
         },
         labels: {
            overflow: 'justify'
         }
      },
      tooltip : {
         valueSuffix: ' millions'
      },
      plotOptions : {
         column: {
            dataLabels: {
               enabled: true
            }
         },
         series: {
            stacking: 'percent'
         }
      },
      credits:{
         enabled: false
      },
      series: [
         {
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
         }, 
         {
            name: 'Year 1900',
            data: [133, 156, 947, 408, 6]
         }, 
         {
            name: 'Year 2008',
            data: [973, 914, 4054, 732, 34]      
         }
      ]
   };

   chartOptions_col_label = {   
      chart : {
         type: 'column'
      },
      title : {
         text: 'World\'s largest cities per 2014'   
      },
      subtitle: {
         text: 'Source: <a href = "http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
      },
      xAxis : {
         type: 'category',
         labels: {
            rotation: -45,
            style: {
               fontSize: '13px',
               fontFamily: 'Verdana, sans-serif'
            }
         }
      },
      yAxis : {
         min: 0,
         title: {
            text: 'Population (millions)'
         }
      },
      tooltip : {
         pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
      },
      credits : {
         enabled: false
      },
      series : [
         {
            name: 'Population',
            data: [
               ['Shanghai', 23.7],
               ['Lagos', 16.1],
               ['Instanbul', 14.2],
               ['Karachi', 14.0],
               ['Mumbai', 12.5],
               ['Moscow', 12.1],
               ['Sao Paulo', 11.8],
               ['Beijing', 11.7],
               ['Guangzhou', 11.1],
               ['Delhi', 11.1],
               ['Shenzhen', 10.5],
               ['Seoul', 10.4],
               ['Jakarta', 10.0],
               ['Kinshasa', 9.3],
               ['Tianjin', 9.3],
               ['Tokyo', 9.0],
               ['Cairo', 8.9],
               ['Dhaka', 8.9],
               ['Mexico City', 8.9],
               ['Lima', 8.9]
            ],
            dataLabels: {
               enabled: true,
               rotation: -90,
               color: '#FFFFFF',
               align: 'right',
               format: '{point.y:.1f}', // one decimal
               y: 10, // 10 pixels down from the top
               style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
               }
            }
         }
      ]
   };

   chartOptions_col_range = {   
      chart : {
         type: 'columnrange',
         inverted:true
      },
      title : {
         text: 'Temperature variation by month'   
      },
      subtitle : {
         text: 'Observed in Vik i Sogn, Norway, 2009'   
      },
      xAxis : {
         categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']      
      },
      yAxis : {     
         title: {
            text: 'Temperature ( \xB0C )'         
         }      
      },
      tooltip: {
         headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
            '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
         shared: true,
         useHTML: true
      },
      plotOptions : {
         columnrange: {
            dataLabels: {
               enabled: true,
               formatter: function () {
                  return this.y + '\xB0C';
               }
            }
         }
      },
      credits : {
         enabled: false
      },
      series : [{
         name: 'Temperatures',
         data: [
            [-9.7, 9.4],
            [-8.7, 6.5],
            [-3.5, 9.4],
            [-1.4, 19.9],
            [0.0, 22.6],
            [2.9, 29.5],
            [9.2, 30.7],
            [7.3, 26.5],
            [4.4, 18.0],
            [-3.1, 11.4],
            [-5.2, 10.4],
            [-13.5, 9.8]
         ]
      }]
   };
}
