import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngredientDetailsPage } from './ingredient-details';

@NgModule({
  declarations: [
    IngredientDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(IngredientDetailsPage),
  ],
  exports: [
    IngredientDetailsPage
  ]
})
export class IngredientDetailsPageModule {}
