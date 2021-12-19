import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginMenuComponent} from './login-menu/login-menu.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RouterModule} from '@angular/router';
import {ApplicationPaths} from './api-authorization.constants';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule.forChild([
      {path: ApplicationPaths.Register, component: LoginComponent},
      {path: ApplicationPaths.Profile, component: LoginComponent},
      {path: ApplicationPaths.Login, component: LoginComponent},
      {path: ApplicationPaths.LoginFailed, component: LoginComponent},
      {path: ApplicationPaths.LoginCallback, component: LoginComponent},
      {path: ApplicationPaths.LogOut, component: LogoutComponent},
      {path: ApplicationPaths.LoggedOut, component: LogoutComponent},
      {path: ApplicationPaths.LogOutCallback, component: LogoutComponent},
    ]),
  ],
  declarations: [LoginMenuComponent, LoginComponent, LogoutComponent],
  exports: [LoginMenuComponent, LoginComponent, LogoutComponent],
})
export class ApiAuthorizationModule {}
