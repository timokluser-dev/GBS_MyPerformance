import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthorizeService, IUserExtended} from '../../../api-authorization/authorize.service';
import {AppRoles} from '../../constants/app-roles.constants';
import {AppPortals} from '../../constants/app-portals.constants';

@Injectable({
  providedIn: 'root',
})
export class UserHomeRedirectGuard implements CanActivate {
  constructor(private authorize: AuthorizeService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role: string = next.data.role;

    return this.authorize.getUser().pipe(
      map(user => {
        const roles = (user as IUserExtended).role;
        if (roles == null) {
          return false;
        }

        let redirectTo: string = null;
        if (roles.includes(AppRoles.STUDENT)) {
          redirectTo = `/app/${AppPortals.STUDENT}/`;
        } else if (roles.includes(AppRoles.TRAINER)) {
          redirectTo = `/app/${AppPortals.TRAINER}/`;
        } else if (roles.includes(AppRoles.TEACHER)) {
          redirectTo = `/app/${AppPortals.TEACHER}/`;
        } else if (roles.includes(AppRoles.ADMIN)) {
          redirectTo = `/app/${AppPortals.ADMIN}/`;
        } else {
          redirectTo = '/error/no-role';
        }

        return this.router.createUrlTree([redirectTo]);
      })
    );
  }
}
