import {FFQItemInput} from './ffqitem-input';
import {FFQItemResponse} from './ffqitem-response';
import {Serving} from './ffqitem-response';
import { FFQSugar } from './ffqsugar';
import { ObjectUnsubscribedError } from 'rxjs';

export class FFQFoodItem {
  id: string;
  name: string;
  servingsList: string;
  sugar: FFQSugar;
  primary: boolean;
  foodTypes: FoodType[];
  nutrientId: string;
  portionSize: string;

  constructor(name: string) {
    this.name = name;
    this.servingsList = null;
    this.sugar = new FFQSugar(false,0);
    this.primary = false;
    this.foodTypes = [];
    this.nutrientId = "";
    this.portionSize = "";
    const foodtype = new FoodType("","");
    this.foodTypes.push(foodtype);
  }

}

export class FoodType {
  typeName: string;
  nutrientListID: string;

  constructor(typeName: string, nutrientListID: string){
    this.typeName = "";
    this.nutrientListID = "";
  }
}
