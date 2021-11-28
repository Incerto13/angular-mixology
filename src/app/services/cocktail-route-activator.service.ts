import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Injectable } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root'}
  )
export class CocktailRouteActivator implements CanActivate {
  constructor(private cocktailService:CocktailService, private router:Router) {

   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const cocktailtExists = !!this.cocktailService.getCocktail(+route.params['id'])

    if (!cocktailtExists) {
        this.router.navigate(['/404'])
    }
    return cocktailtExists
    
    throw new Error('Method not implemented.');
  }
}
