import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    GET_PRODUCT_LIST,
    GET_PRODUCT_LIST_FAIL,
    GET_PRODUCT_LIST_SUCCESS
} from './product.action';
import { ProductData } from './product.model';

@Injectable()
export class ProductEffects {

    private file: string = 'assets/data/data.json';

    constructor(
        private actions$: Actions,
        private http: HttpClient,
    ) { }

    public getProductList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GET_PRODUCT_LIST),
            exhaustMap(() =>
                this.http
                    .get(this.file)
                    .pipe(
                        map(this.resolveGetProductListSuccess as any),
                        catchError(this.resolveGetProductListFailure)
                    )
            )
        )
    );
    
    private resolveGetProductListFailure = (): Observable<any> =>
            of(GET_PRODUCT_LIST_FAIL());

    private resolveGetProductListSuccess = (products: Array<ProductData>): any =>
        products
            ? GET_PRODUCT_LIST_SUCCESS({ products })
            : GET_PRODUCT_LIST_FAIL();

}