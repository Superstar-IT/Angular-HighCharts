import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
import * as highchartsTreemap from 'highcharts/modules/treemap';

@Component({
  selector: 'app-root',
  templateUrl: './barCharts.component.html',
  styleUrls: ['./barCharts.component.css']
})
export class BarChartsComponent {
  title = 'angular-highcharts';
  highcharts = Highcharts;
  chartOptions_bar = {   
    chart: {
       type: 'bar'
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
      
      //  backgroundColor: (
      //     (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 
      //       '#FFFFFF'), shadow: true
       },
       xAxis:{
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
          text: null
       } 
    },
    yAxis : {
       min: 0, title: {
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
       bar: {
          dataLabels: {
             enabled: true
          }
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

  chartOptions_bar_stacked = {   
  chart: {
    type: 'bar'
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
    
    //  backgroundColor: (
    //     (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 
    //        '#FFFFFF'), shadow: true
     },
     xAxis:{
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
        text: null
     } 
  },
  yAxis : {
     min: 0, title: {
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
     bar: {
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

  chartOptions_bar_negative = {   
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Bar chart with negative values'
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
      }, 
      {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
      }
    ]
  };
}
