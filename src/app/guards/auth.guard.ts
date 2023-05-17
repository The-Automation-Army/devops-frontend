import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export function authGuard(route: Router): CanActivateFn {
  return () => {
    const jwtService: JwtHelperService = inject(JwtHelperService);

    if (jwtService.isTokenExpired()) {
      return true;
    }

    route.navigate(['/login']);

    return false;
  };
}
