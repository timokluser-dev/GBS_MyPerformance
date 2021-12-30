import {Component, OnInit} from '@angular/core';
import {AuthorizeService, IUserExtended} from '../authorize.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {AppRoles} from '../../app/constants/app-roles.constants';
import {Location} from '@angular/common';
import {AppPortals} from '../../app/constants/app-portals.constants';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss'],
})
export class LoginMenuComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  public showAdmin: Observable<boolean>;
  public adminDisabledNoMfa: Observable<boolean>;
  public roles: Observable<string[]>;

  // enum reference
  appRoles = AppRoles;
  appPortals = AppPortals;

  constructor(private authorizeService: AuthorizeService, private location: Location) {}

  async ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    // show Admin option only to teachers with admin role
    this.showAdmin = this.authorizeService
      .getUser()
      .pipe(
        map(
          u =>
            u &&
            (u as IUserExtended).role.includes(AppRoles.ADMIN) &&
            (u as IUserExtended).role.includes(AppRoles.TEACHER)
        )
      );
    this.adminDisabledNoMfa = this.authorizeService
      .getUser()
      .pipe(map(u => u && !(u as IUserExtended).amr.includes('mfa')));
    this.roles = this.authorizeService.getUser().pipe(map(u => u && (u as IUserExtended).role));
  }

  get pendingRequestsCount(): number {
    return 5;
  }

  /**
   * the portal of the app
   */
  get appPortal(): string {
    // /app/admin/home/page/some-other-page
    const pathRegex = /^\/app\/(.[^\/]*)\/.*$/i;
    const appPortalExtract = this.location.path().match(pathRegex);
    return appPortalExtract && appPortalExtract.length > 1 ? appPortalExtract[1] : null;
  }
}
