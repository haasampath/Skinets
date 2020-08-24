import { AccountService } from './account/account.service';
import { IProduct } from './shared/models/product';
import { IPagination } from './shared/models/pagination';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {} // 150, 193

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');

    this.accountService.loadCurrentUser(token).subscribe(
      () => {
        console.log('loaded user');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id'); // check if local storage exist
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(
        // when application start call getbasket method
        () => {
          console.log('initialised basket');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
