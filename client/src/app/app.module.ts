import { JwtInterceptor } from './core/Interceptors/jwt.interceptor';
import { LoadingInterceptor } from './core/Interceptors/loading.interceptors';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ShopModule } from './shop/shop.module';
import { ErrorInterceptor } from './core/Interceptors/error.interceptor';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [AppComponent, OrdersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    // ShopModule,
    HomeModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }, // v 130
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // 237


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
