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
import {AuthorizeService, IUserExtended} from 'src/api-authorization/authorize.service';

@Injectable({
  providedIn: 'root',
})
export class MfaGuard implements CanActivate {
  constructor(private authorize: AuthorizeService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role: string = next.data.role;

    return this.authorize.getUser().pipe(
      map(user => {
        const mfaEnabled = (user as IUserExtended).amr.includes('mfa');
        return mfaEnabled ? mfaEnabled : this.router.createUrlTree(['error/mfa-required']);
      })
    );
  }
}
