import { Component, OnInit } from '@angular/core';
import data from '../data'
import {Color} from 'ng2-charts'
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData = []
  lineChartLabels = []
  lineChartType = 'line'

  
  constructor() { }

  ngOnInit() {
    let numberOfImages = {}
    let allMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
    'Aug','Sep','Oct','Nov','Dec']
    let allMonthsNum = [0,1,2,3,4,5,6,7,8,9,10,11]

    for (let datas of data){
      for (let oneMonthsNum of allMonthsNum){
            if (datas.dateAdded.indexOf(allMonths[oneMonthsNum])!=-1 ){
              if (!numberOfImages[allMonths[oneMonthsNum]]){
                numberOfImages[allMonths[oneMonthsNum]] = 0
              }
              numberOfImages[allMonths[oneMonthsNum]] += 1
            }
          }
    }

    this.lineChartLabels = allMonths

    let tempStoreNumImages = []
    let labels = 'Number of Images'
    
    for (let key in numberOfImages){
      tempStoreNumImages.push(numberOfImages[key])
    }

    this.lineChartData = [{
      data: tempStoreNumImages,
      label: labels
    }]
  }

}
