import { Component, OnInit } from "@angular/core";
import { ResultsService } from "src/app/services/results/results";
import { FFQResultsResponse } from "src/app/models/ffqresultsresponse";
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { NutrientConstants } from 'src/app/models/NutrientConstants';
import {MatCheckboxModule} from '@angular/material/checkbox';

// Questionnaire reesults page added by Daykel Muro 09/30/2019
@Component({
  selector: "app-quest-results",
  templateUrl: "./clinic-quest-results.component.html",
  styleUrls: ["./clinic-quest-results.component.css"]
})
export class ClinicQuestResultsComponent implements OnInit {
  public show: boolean = false;
  public buttonName: any = "Results";
  
  MESSAGE = "No questionnaires have been submitted yet!";

  
  results: FFQResultsResponse[] = [];

  constructor(public resultsService: ResultsService) {}
  
  ngOnInit() {
    this.getAllResults();
  }

  //(Khalid)Changed below code to sort the list in the nutient view page
  private getAllResults() {
     const oldList: Observable<FFQResultsResponse[]> = this.resultsService.getAllResults();
     const reqList: string[] = NutrientConstants.NUTRIENT_NAMES;
     const newWeeklyMap = new Map<string, number>();
     const newDailyMap = new Map<string, number>();

     oldList.subscribe(m => {

      const weeklyMap = m[0].weeklyTotals;
      const dailyMap = m[0].dailyAverages;
      reqList.forEach(a =>  {
       newWeeklyMap.set(a, weeklyMap[a]);
       newDailyMap.set(a, dailyMap[a]);
       })
      //console.log(newWeeklyMap);

       m.forEach(element => {
         
         element.weeklyTotals = newWeeklyMap;
         element.dailyAverages = newDailyMap;
         //element.dailyAverages = newDailyMap;

        })
        
        console.log(m);
        this.results = m;
     }
     
    )     
    
  }

  
  //p = this.results;

  private returnZero(){
    return 0;
  }

  toggle(index) {
    this.results[index].show = !this.results[index].show;
    if (this.results[index].show) this.buttonName = "Results";
    else this.buttonName = "Results ";
  }
    
}
