import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { DataStateService } from './data-state.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  //constructor(private appState: AppStateService) {}
  constructor(){}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /*this.appState.setOfferState({
      status: "LOADING"
    })
    let req=request.clone({
      headers : request.headers.set("Authorization","Bearer JWT")
    });
  
    return next.handle(req).pipe(
      finalize(()=>{
        this.appState.setOfferState({
          status: "LOADED"
        })
      })
    ); */

    return next.handle(request);
    
}
}
