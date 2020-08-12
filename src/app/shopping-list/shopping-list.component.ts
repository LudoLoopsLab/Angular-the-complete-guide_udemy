import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private sListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.sListService.getIngredients();
    this.sListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
