System.register(['angular2/core', './meal-info.component', './edit-meal.component'], function(exports_1, context_1) {
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
    var core_1, meal_info_component_1, edit_meal_component_1;
    var MealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_info_component_1_1) {
                meal_info_component_1 = meal_info_component_1_1;
            },
            function (edit_meal_component_1_1) {
                edit_meal_component_1 = edit_meal_component_1_1;
            }],
        execute: function() {
            MealComponent = (function () {
                function MealComponent() {
                }
                MealComponent.prototype.mealClicked = function (clickedMeal) {
                    console.log(clickedMeal.details);
                    this.selectedMeal = clickedMeal;
                    this.onMealSelect.emit(clickedMeal);
                };
                MealComponent.prototype.mealInfoClicked = function (clickedMealInfo) {
                    console.log(clickedMealInfo);
                    this.selectedMealInfo = clickedMealInfo;
                    this.onMealInfoSelect.emit(clickedMealInfo);
                };
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        inputs: ['meal'],
                        directives: [edit_meal_component_1.EditMealComponent, meal_info_component_1.MealInfoComponent],
                        template: "\n  <div class=\"mealItem\">\n    <p (click)=\"mealInfoClicked(meal)\" [class.selectedInfo]=\"meal === selectedInfo\">Meal: {{ meal.name }}</p>\n    <meal-info *ngIf=\"selectedMealInfo\" [meal]=\"selectedMealInfo\"></meal-info>\n    <button (click)=\"mealClicked(meal)\" [class.selected]=\"meal === selectedMeal\">Edit Meal Details</button>\n    <edit-meal *ngIf=\"selectedMeal\" [meal]=\"selectedMeal\"></edit-meal>\n    <hr>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealComponent);
                return MealComponent;
            }());
            exports_1("MealComponent", MealComponent);
        }
    }
});
//# sourceMappingURL=meal.component.js.map