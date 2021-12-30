import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
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
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role: string = next.data.role;

    return this.authorize.getUser().pipe(
      map(user => {
        const userHasRole = user.role.includes(role);
        return userHasRole ? userHasRole : this.router.createUrlTree(['error/no-permission']);
      })
    );
  }
}

