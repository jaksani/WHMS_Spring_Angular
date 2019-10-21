import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ManufacturerAuthService } from '../services/manufacturer-auth.service';

@Injectable({
  providedIn: 'root'
})

export class ManufacturerGuard implements CanActivate {

  constructor(private manufacturerAuth : ManufacturerAuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.manufacturerAuth.hasAccess();
  }
  
}
