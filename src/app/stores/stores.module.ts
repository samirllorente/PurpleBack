import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductEffects } from 'src/app/stores/product/product.effect';
import * as productStore from 'src/app/stores/product/product.reducer';
import { ProductService } from 'src/app/stores/product/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      ProductEffects
    ]),
    StoreModule.forFeature(productStore.productFeatureKey, productStore.reducer)
  ],
  providers: [
    ProductService
  ]
})
export class StoresModule { }
