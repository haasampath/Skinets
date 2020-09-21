import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusyService } from './../services/busy.service';
import { Injectable } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url.includes('orders')) {
      return next.handle(req); // 272 just move to next step
    }

    if (req.method === 'DELETE') {
      return next.handle(req); // 286
    }

    if (req.url.includes('emailexists')) {
      // 202 is for small modification for mail exists
      // this.busyService.busy();
      return next.handle(req); // 272
    }

    this.busyService.busy();

    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}
