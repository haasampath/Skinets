import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule} from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { TextInputComponent } from './components/text-input/text-input.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from './components/stepper/stepper.component';
import { BasketSummeryComponent } from './basket-summery/basket-summery.component';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent, OrderTotalsComponent, TextInputComponent, StepperComponent, BasketSummeryComponent],
  imports: [CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(), // 194
    ReactiveFormsModule,
    FormsModule,
    CdkStepperModule,
    RouterModule
  ],
  exports: [PaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    BsDropdownModule,
    OrderTotalsComponent,
    ReactiveFormsModule,
    FormsModule,
    TextInputComponent,
    CdkStepperModule,
    StepperComponent,
    BasketSummeryComponent
  ],
})
export class SharedModule {}
