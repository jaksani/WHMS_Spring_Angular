import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { WhmAuthService } from '../services/whm-auth.service';

@Injectable({
  providedIn: 'root'
})
export class WhmGuard implements CanActivate {
  constructor( private whmAuthService:WhmAuthService ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.whmAuthService.hasAccess();
  }
  
}
