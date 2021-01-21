import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ProductData } from './product.model';
import * as ProductActions from './product.action';
import * as ProductSelector from './product.selector';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private alls: boolean = false;
  constructor(private store: Store<ProductData>) {}
    
  public getProductList(alls: boolean = false): void {
      this.alls = alls;
      this.store.dispatch(ProductActions.GET_PRODUCT_LIST());
  }

  public getProductList$(): Observable<ProductData[]> {
      return this.store.select(ProductSelector.getProductList)
        .pipe(
          map(products => 
            this.alls ? products : products.filter(item => item.product.issuer === 'PURPLE_BANK')
          )
        );
  }
}
