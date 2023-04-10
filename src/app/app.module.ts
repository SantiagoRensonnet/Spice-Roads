import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RecipesComponent } from './routes/recipes/recipes.component';
import { RecipeListComponent } from './routes/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './routes/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './routes/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './routes/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './routes/shopping/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
