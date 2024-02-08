import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthentificationService} from "./authentification.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements  HttpInterceptor{
  constructor(private  authService: AuthentificationService,private inject: Injector) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token=this.authService.accessToken
     if(!req.url.includes("/auth/login")){
       let reqToken: any=req.clone({
         headers : req.headers.set('Authorization','Bearer '+this.authService.accessToken)
       })

       return  next.handle(reqToken);
     }
     else{
       return  next.handle(req)
     }

  }

}
