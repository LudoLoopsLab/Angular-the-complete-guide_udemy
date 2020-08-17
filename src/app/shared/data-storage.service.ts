import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';

const urlServer = 'https://ng-complete-guide-9f5a7.firebaseio.com/recipes.json';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(urlServer, recipes).subscribe((response) => {
      console.log(response);
    });
  }
}
