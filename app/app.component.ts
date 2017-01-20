import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1>My calories intake</h1>
    <meal-list [mealList]="meals"></meal-list>

  </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("chips", "sweer", 500),
      new Meal("chapo madondo", "hustler mode", 30),
      new Meal("bajia", "with mkwaju", 100),
      new Meal("pilau", "with kachumbari", 65),
    ];
  }
}
