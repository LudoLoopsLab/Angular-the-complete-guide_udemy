import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fwiener-schnitzel-french-fries-breaded-steak-lemon-56757436.jpg&f=1&nofb=1',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nrn.com%2Fsites%2Fnrn.com%2Ffiles%2Fburger_0.gif&f=1&nofb=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('buns', 2),
        new Ingredient('tomato', 1),
      ]
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
