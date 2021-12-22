import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthorizeService} from 'src/api-authorization/authorize.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authorize: AuthorizeService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const role: string = next.data.role;

    return this.authorize.getUser().pipe(
      map(user => {
        if (!user.role) return false;

        const userHasRole = user.role.includes(role);
        !userHasRole && this.router.createUrlTree(['/']);

        return userHasRole;
      })
    );
  }
}
