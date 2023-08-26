import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const user = authService.userValue;
  console.log(route.data['expectedRole'])
  if (user) {
    console.log(user);
    return true;
  }
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};

