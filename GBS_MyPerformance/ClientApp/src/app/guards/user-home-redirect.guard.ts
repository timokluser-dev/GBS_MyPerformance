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
import {AuthorizeService, IUserExtended} from '../../api-authorization/authorize.service';
import {AppRoles} from './role.guard';

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
          redirectTo = '/app/student/';
        } else if (roles.includes(AppRoles.TRAINER)) {
          redirectTo = '/app/trainer/';
        } else if (roles.includes(AppRoles.TEACHER)) {
          redirectTo = '/app/teacher/';
        } else if (roles.includes(AppRoles.ADMIN)) {
          redirectTo = '/app/admin/';
        }

        return this.router.createUrlTree([redirectTo]);
      })
    );
  }
}
