import { Component, OnInit } from '@angular/core';
import data from '../data';

@Component({
  selector: 'app-pie-chart-like',
  templateUrl: './pie-chart-like.component.html',
  styleUrls: ['./pie-chart-like.component.css']
})
export class PieChartLikeComponent implements OnInit {
  pieChartType = 'pie'
  pieChartData = [{
    data :[]
  }]
  pieChartLabels= []
  constructor() { }

  ngOnInit() {
    let numberOfLikes = {}
    for (let datas of data){
      for (let dataTag of datas.tags){
        if (!numberOfLikes[dataTag]){
          numberOfLikes[dataTag] = 0
        }
        numberOfLikes[dataTag] += datas.likes
      }
    }

    let tempStoreNumLikes = []
    
    for (let key in numberOfLikes){
      this.pieChartLabels.push(key)
      tempStoreNumLikes.push(numberOfLikes[key])
    }

    this.pieChartData = [{
      data: tempStoreNumLikes
    }]
  }
  


}
