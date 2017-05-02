"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_model_1 = require("./recipe.model");
var NewRecipeComponent = (function () {
    function NewRecipeComponent() {
        this.newRecipeSender = new core_1.EventEmitter();
    }
    NewRecipeComponent.prototype.submitForm = function (title, image, ingredients, source) {
        var newRecipeToAdd = new recipe_model_1.Recipe(title, image, ingredients, source);
        this.newRecipeSender.emit(newRecipeToAdd);
    };
    return NewRecipeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewRecipeComponent.prototype, "newRecipeSender", void 0);
NewRecipeComponent = __decorate([
    core_1.Component({
        selector: 'new-recipe',
        template: "\n  <div>\n    <h1>Add New Recipe</h1>\n    <input placeholder=\"Recipe Title\" #newTitle>\n    <input placeholder=\"Ingredients\"#newIngredients>\n    <input placeholder=\"Source\" #newSource>\n    <input placeholder=\"Image\" #newImage>\n    <button (click)=\"submitForm(newTitle.value, newImage.value, newIngredients.value, newSource.value); newTitle.value='';\">Add</button>\n  </div>\n  "
    })
], NewRecipeComponent);
exports.NewRecipeComponent = NewRecipeComponent;
//# sourceMappingURL=new-recipe.component.js.map