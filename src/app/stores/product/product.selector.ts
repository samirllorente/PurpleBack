import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductData } from './product.model';
import { productFeatureKey } from "./product.reducer";

export const getProductListState = createFeatureSelector<Array<ProductData>>(productFeatureKey);

export const getProductList = createSelector(
    getProductListState,
    (state: Array<ProductData>) => state
);
