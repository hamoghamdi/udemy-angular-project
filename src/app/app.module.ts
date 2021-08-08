import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipesComponent } from './Recipes/components/recipes/recipes.component';
import { RecipeListComponent } from './Recipes/components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipes/components/recipe-item/recipe-item.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShoppingListComponent } from './ShoppingList/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './ShoppingList/components/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './Recipes/components/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
