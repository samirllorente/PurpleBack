import { Action, createReducer, on } from '@ngrx/store';
import {
    GET_PRODUCT_LIST_FAIL,
    GET_PRODUCT_LIST_SUCCESS
} from './product.action';
import { ProductData } from './product.model';

export const productFeatureKey = 'product';

export interface ProductState {
    products: Array<ProductData>;
}

export const initialState: Array<ProductData> = [{
    product: {
        id: '',
        issuer: '',
        type: ''
    },
    issue_date: '',
    due_date: '',
    summary: {}
}];

const productReducer = createReducer(
    initialState,
    on(GET_PRODUCT_LIST_SUCCESS, (state: any, { products }: any) => {
        return products;
    }),
    on(GET_PRODUCT_LIST_FAIL, (state: any) => state),
);

export function reducer(
    state: ProductData | undefined,
    action: Action
): ProductData {
    return productReducer(state, action);
}
