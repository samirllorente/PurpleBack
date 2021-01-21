import { createAction, props } from '@ngrx/store';
import { ProductData } from './product.model';

export const GET_PRODUCT_LIST = createAction(
    '[Product] Get product list'
);
export const GET_PRODUCT_LIST_FAIL = createAction('[Product] Get product list fail');
export const GET_PRODUCT_LIST_SUCCESS = createAction(
    '[Product] Get product list success',
    props<{ products: Array<ProductData> }>()
);
