import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductData } from 'src/app/stores/product/product.model';
import { ProductService } from 'src/app/stores/product/product.service';
import { SwitchComponent } from 'src/app/commons/switch/switch.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public products$: Observable<Array<ProductData>>;
  @ViewChild(SwitchComponent) switch: SwitchComponent;

  constructor(private productService: ProductService) {
    this.switch = new SwitchComponent(); // just to remove build warning
    this.products$ = this.productService.getProductList$();
  }

  ngOnInit(): void {
    this.productService.getProductList();
  }

  ngAfterViewInit(): void {
    this.switch.change$.subscribe((checked: boolean) => {
      this.productService.getProductList(checked);
    });
  }

}
