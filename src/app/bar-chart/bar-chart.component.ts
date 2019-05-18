import { Component, OnInit } from '@angular/core';
import data from '../data'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  barChartData = []
  barChartLabels = []
  barChartType = 'bar'
  
  constructor() { }

  ngOnInit() {
    let allMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul',
    'Aug','Sep','Oct','Nov','Dec']
    let numberOfLikes = {}
    let allMonthsNum = [0,1,2,3,4,5,6,7,8,9,10,11]
    
    for (let datas of data){
      for (let dataTag of datas.tags){
        if (!numberOfLikes[dataTag]){
          numberOfLikes[dataTag] = {}
        }
          for (let oneMonthsNum of allMonthsNum){
            if (datas.dateAdded.indexOf(allMonths[oneMonthsNum])!=-1 ){
              if (!numberOfLikes[dataTag][allMonths[oneMonthsNum]]){
                numberOfLikes[dataTag][allMonths[oneMonthsNum]] = 0
              }
              numberOfLikes[dataTag][allMonths[oneMonthsNum]] += datas.likes
            break
            }
          }
      }
    }

    this.barChartLabels = allMonths

    let tempNumberOfLikes = {}

    for(let like in numberOfLikes){
      let likes = numberOfLikes[like]
      for (let month of allMonths){
        if(!tempNumberOfLikes[like]){
          tempNumberOfLikes[like] = [] 
        }
        tempNumberOfLikes[like].push(likes[month])
      }
    }

    for (let tags in tempNumberOfLikes){
      this.barChartData.push({
        data: tempNumberOfLikes[tags],
        label: tags
      })
    }
  }
}
