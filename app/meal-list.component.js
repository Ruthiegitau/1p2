System.register(['angular2/core', './meal.model', './new-meal.component', './meal.component', './calories.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_model_1, new_meal_component_1, meal_component_1, calories_pipe_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (calories_pipe_1_1) {
                calories_pipe_1 = calories_pipe_1_1;
            }],
        execute: function() {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.filterCalories = "all";
                }
                MealListComponent.prototype.createMeal = function (newMealInfo) {
                    this.mealList.push(new meal_model_1.Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2]));
                };
                MealListComponent.prototype.onChange = function (filterOption) {
                    this.filterCalories = filterOption;
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        pipes: [calories_pipe_1.CaloriesPipe],
                        directives: [new_meal_component_1.NewMealComponent, meal_component_1.MealComponent],
                        template: "\n  <div class=\"dropdowns\">\n  <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n    <option value=\"all\"  selected=\"selected\">my meals</option>\n    <option value=\"healthy\">below 500</option>\n    <option value=\"unhealthy\">above 500</option>\n  </select>\n  </div>\n  <meal-display *ngFor=\"#meal of mealList | calories:filterCalories\"\n  [meal]=\"meal\">\n  </meal-display>\n  <new-meal (onSubmitNewMeal)=\"createMeal($event)\"></new-meal>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map