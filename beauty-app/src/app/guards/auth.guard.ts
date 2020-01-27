import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from '../services/hero.service';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private hero: HeroService) {}
 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

   const userAuthenticated = this.hero.getAuth();

   if (userAuthenticated) {
     return true;
   } else {
     return false;
   }
 }
}
