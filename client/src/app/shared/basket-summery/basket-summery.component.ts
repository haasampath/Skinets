import { IBasket, IBasketItem } from 'src/app/shared/models/basket';
import { BasketService } from './../../basket/basket.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrderItem } from '../models/order';

@Component({
  selector: 'app-basket-summery',
  templateUrl: './basket-summery.component.html',
  styleUrls: ['./basket-summery.component.scss'],
})
export class BasketSummeryComponent implements OnInit {
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true; // only add element for increment,decremet,delete when baskt component and not the checkou-review
  @Input() items: IBasketItem[] | IOrderItem[] = []; // 253 // item can be from those any of type and id is mistmatch of tose classes
  @Input() isOrder = false; // for styling purpose

  constructor() {}

  ngOnInit(): void {
  }

  decrementItemQuantity(item: IBasketItem){
    this.decrement.emit(item);
  }
  incrementItemQuantity(item: IBasketItem){
    this.increment.emit(item);
  }
  removeBasketItem(item: IBasketItem){
    this.remove.emit(item);
  }
}
