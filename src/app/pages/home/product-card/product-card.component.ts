import { Component, Input, OnInit } from '@angular/core';
import { ProductData } from 'src/app/stores/product/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  public data_: ProductData = {
    due_date: '',
    issue_date: '',
    product: {
      id: '',
      issuer: '',
      type: ''
    },
    summary: {}
  };

  @Input() 
    set data(value: ProductData) {
      this.data_ = value;
    };
    get data(): ProductData {
      return this.data_;
    }

  public getName(): string {
    switch(this.data?.product?.type) {
      case 'CREDIT_CARD':
        return'Tarjeta de crédito';
      case 'FIXED_TERM_DEPOSIT_CERTIFICATE':
        return 'CDT';
      case 'FREE_INVESTMENT_LOAN':
        return 'Prestamo de libre inversión';
      case 'CURRENT_ACCOUNT':
        return 'Cuenta corriente';
      default:
        return this.data?.product?.type || 'Unknown';
    }
  }

  public formatCardNro(nro: string): string {
    return [...nro.substring(0, nro.length-4)].map(x=> 'x').reduce((prev, next) => { 
        prev[prev.length-1].length < 4 ? prev[prev.length-1] += next : prev.push(next);
        return prev;
    }, ['']).join(' ') + ' ' + nro.substr(nro.length - 4, nro.length);
  }

  public pendingToPay(): number {
    return (this.data?.summary?.amount || 0) - 
          ((this.data?.summary?.paid_installments || 0) * (this.data?.summary?.next_payment_amount || 0))
  }

}
