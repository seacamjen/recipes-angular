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
var EditRecipeComponent = (function () {
    function EditRecipeComponent() {
        this.doneButtonClickedSender = new core_1.EventEmitter();
    }
    EditRecipeComponent.prototype.doneButtonClicked = function () {
        this.doneButtonClickedSender.emit();
    };
    return EditRecipeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", recipe_model_1.Recipe)
], EditRecipeComponent.prototype, "childSelectedRecipe", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditRecipeComponent.prototype, "doneButtonClickedSender", void 0);
EditRecipeComponent = __decorate([
    core_1.Component({
        selector: 'edit-recipe',
        template: "\n    <div *ngIf=\"childSelectedRecipe\">\n      <h4>{{childSelectedRecipe.title}}</h4>\n      <h3>Edit Recipe</h3>\n      <input [(ngModel)]=\"childSelectedRecipe.title\">\n      <input [(ngModel)]=\"childSelectedRecipe.ingredients\">\n      <input [(ngModel)]=\"childSelectedRecipe.source\">\n      <input [(ngModel)]=\"childSelectedRecipe.image\">\n      <button class=\"btn btn-default\" (click)=\"doneButtonClicked()\">Submit</button>\n    </div>\n  "
    })
], EditRecipeComponent);
exports.EditRecipeComponent = EditRecipeComponent;
//# sourceMappingURL=edit-recipe.component.js.map