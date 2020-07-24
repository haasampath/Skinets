import { BasketService } from './../../basket/basket.service';
import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { IType } from 'src/app/Shared/models/productType';
import { IBrand } from 'src/app/Shared/models/brand';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct; // input need when parent component pass propery => prducts to product item

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}
  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
}
