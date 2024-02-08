import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthentificationService} from "../services/authentification.service";

export const authGuard: CanActivateFn = (route, state) => {
  const  auth=inject(AuthentificationService);
  const  router=inject(Router)
  if(!auth.isAuthenticated)
  {
    return  false
  }
  else   return  true;
};
