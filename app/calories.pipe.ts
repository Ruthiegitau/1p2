import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var caloriesState = args[0];
    console.log(caloriesState);
    if (caloriesState === "below 500") {
      return input.filter((meal) => {
        return meal.calories < 500;
      });
    } else if (caloriesState === "above 500"){
      return input.filter((meal) => {
        return meal.calories > 500;
      });
    } else {
      return input
    }
  }
}
