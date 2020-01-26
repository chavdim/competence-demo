import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input()
  skill: any;


  barChartOptions: ChartOptions = {
    responsive: true,
    layout: {
      padding: {
        left: 40,
        right: 0,
        top: 0,
        bottom: 175
      }
    },
    scales: {
      xAxes: [{
        stacked: true,
        ticks: {
          min: 0,
          max: 10,
          display: false
        },
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          display: false
        }
      }]
    }
  };
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = false;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data: [0, 0], maxBarThickness: 10}
  ];

  constructor() {


  }

  ngOnInit() {
    this.barChartData = [
      {data: [this.skill.level0], maxBarThickness: 12, fill: false,backgroundColor: '#3f51b5'},
      {data: [this.skill.level], maxBarThickness: 12, fill: false, backgroundColor: 'green'}

    ];
  }

}
