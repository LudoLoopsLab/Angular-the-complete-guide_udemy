import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is simply a test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0PO3FoKphbvUDH24XRTGkwHaLH%26pid%3DApi&f=1'
    ),
    new Recipe(
      'Another  Recipe',
      'this is not a test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jISobxt-NW6-fsOTlp7GnAHaEK%26pid%3DApi&f=1'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
