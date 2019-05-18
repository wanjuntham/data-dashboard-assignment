import { Component, OnInit } from '@angular/core';
import data from '../data'

@Component({
  selector: 'app-pie-chart-image',
  templateUrl: './pie-chart-image.component.html',
  styleUrls: ['./pie-chart-image.component.css']
})
export class PieChartImageComponent implements OnInit {
  pieChartType = 'pie'
  pieChartData = [{
    data :[]
  }]
  pieChartLabels= []

  constructor() { }

  ngOnInit() {
    let numberOfImages = {}
    for (let datas of data){
      for (let dataTag of datas.tags){
        if (!numberOfImages[dataTag]){
          numberOfImages[dataTag] = 0
        }
        numberOfImages[dataTag] += 1
      }
    }

    let tempStoreNumImages = []
    
    for (let key in numberOfImages){
      this.pieChartLabels.push(key)
      tempStoreNumImages.push(numberOfImages[key])
    }

    this.pieChartData = [{
      data: tempStoreNumImages
    }]
  }
}
