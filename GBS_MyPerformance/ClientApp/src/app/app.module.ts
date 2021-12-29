import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NoPreloading, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from 'src/environments/environment';
import * as process from 'process';
import {AppComponent} from './app.component';

//#region Constants
import {AppRoles, AppPortals} from './constants';
//#endregion Constants

//#region Guards
import {AuthorizeGuard} from 'src/api-authorization/authorize.guard';
import {DevRouteGuard, MfaGuard, RoleGuard, UserHomeRedirectGuard} from './guards';
//#endregion Guards

//#region Portals
import {BlankPageComponent, ErrorPageComponent, Errors} from './pages/common';

import {MarkOverviewPageComponent} from './pages/portals/student';

import {
  ApprenticesListPageComponent,
  ApprenticesDetailPageComponent,
} from './pages/portals/trainer';

import {
  ClassDetailPageComponent,
  ClassesOverviewPageComponentComponent,
  ClassStudentDetailPageComponent,
} from './pages/portals/teacher';

import {
  EditCalculationPageComponent,
  ManageEditPeriodPageComponent,
  ManageUsersPageComponent,
  RegistrationRequestsPageComponent,
  SystemManagementPageComponent,
} from './pages/portals/admin';
//#endregion Portals

//#region Non-Module Components
import {FetchDataComponent} from './pages/boilerplate/fetch-data/fetch-data.component';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
//#endregion Non-Module Components

//#region Containers
import {MarkOverviewContainerComponent} from './containers';
//#endregion Containers

//#region Modules
import {ApiAuthorizationModule} from 'src/api-authorization/api-authorization.module';
import {AuthorizeInterceptor} from 'src/api-authorization/authorize.interceptor';
import {ComponentsModule} from './components/components.module';
import {DirectivesModule} from './directives/directives.module';

//#endregion Modules

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    NavMenuComponent,
    ErrorPageComponent,
    MarkOverviewPageComponent,
    MarkOverviewContainerComponent,
    RegistrationRequestsPageComponent,
    ManageUsersPageComponent,
    ManageEditPeriodPageComponent,
    SystemManagementPageComponent,
    EditCalculationPageComponent,
    ApprenticesListPageComponent,
    ApprenticesDetailPageComponent,
    ClassDetailPageComponent,
    ClassStudentDetailPageComponent,
    ClassesOverviewPageComponentComponent,
    BlankPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ApiAuthorizationModule,
    ComponentsModule,
    DirectivesModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo: 'app', pathMatch: 'full'},
        // Account Mgmt redirect
        {path: 'login', redirectTo: 'authentication/login', pathMatch: 'full'},
        {path: 'register', redirectTo: 'authentication/register', pathMatch: 'full'},
        // Errors
        {
          path: 'error',
          children: [
            {
              path: 'no-permission',
              component: ErrorPageComponent,
              data: {
                error: Errors.NO_PERMISSION,
              },
            },
            {
              path: 'no-role',
              component: ErrorPageComponent,
              data: {
                error: Errors.NO_ROLE,
              },
            },
            {
              path: 'mfa-required',
              component: ErrorPageComponent,
              data: {
                error: Errors.MFA_REQUIRED,
              },
            },
            {
              path: 'not-found',
              component: ErrorPageComponent,
              data: {
                error: Errors.NOT_FOUND,
              },
            },
            {
              path: 'oops',
              component: ErrorPageComponent,
              data: {
                error: Errors.GENERAL_ERROR,
              },
            },
          ],
        },
        // All Protected Routes
        {
          path: 'app',
          canActivate: [AuthorizeGuard],
          children: [
            {
              path: '',
              pathMatch: 'full',
              canActivate: [UserHomeRedirectGuard],
              component: BlankPageComponent,
            },
            {
              path: AppPortals.STUDENT,
              canActivate: [RoleGuard],
              data: {role: AppRoles.STUDENT},
              children: [
                {path: '', redirectTo: 'home', pathMatch: 'full'},
                {
                  path: 'home',
                  component: MarkOverviewPageComponent,
                },
              ],
            },
            {
              path: AppPortals.TRAINER,
              canActivate: [RoleGuard],
              data: {role: AppRoles.TRAINER},
              children: [
                {path: '', redirectTo: 'apprentices', pathMatch: 'full'},
                {
                  path: 'apprentices',
                  component: ApprenticesListPageComponent,
                },
                {
                  path: 'apprentice/:id',
                  component: ApprenticesDetailPageComponent,
                },
              ],
            },
            {
              path: AppPortals.TEACHER,
              canActivate: [RoleGuard],
              data: {role: AppRoles.TEACHER},
              children: [
                {path: '', redirectTo: 'classes', pathMatch: 'full'},
                {
                  path: 'classes',
                  component: ClassesOverviewPageComponentComponent,
                },
                {
                  path: 'class/:class',
                  component: ClassDetailPageComponent,
                },
                {
                  path: 'class/:class/student/:id',
                  component: ClassStudentDetailPageComponent,
                },
              ],
            },
            {
              path: AppPortals.ADMIN,
              canActivate: [RoleGuard, MfaGuard],
              data: {role: AppRoles.ADMIN},
              children: [
                {path: '', redirectTo: 'system-management', pathMatch: 'full'},
                {
                  path: 'system-management',
                  component: SystemManagementPageComponent,
                },
                {
                  path: 'calculation/:id',
                  component: EditCalculationPageComponent,
                },
                {
                  path: 'manage-users',
                  component: ManageUsersPageComponent,
                },
                {
                  path: 'registration-requests',
                  component: RegistrationRequestsPageComponent,
                },
                {
                  path: 'manage-edit-period',
                  component: ManageEditPeriodPageComponent,
                },
              ],
            },
          ],
        },
        {
          path: 'dev',
          canActivate: [DevRouteGuard],
          children: [
            {
              path: '',
              pathMatch: 'full',
              component: BlankPageComponent,
            },
            {
              path: 'fetch-data',
              component: FetchDataComponent,
            },
          ],
        },
        {path: '**', redirectTo: '/error/not-found'},
      ],
      {
        preloadingStrategy: NoPreloading,
        enableTracing:
          !environment.production &&
          ((process.env.ENABLE_TRACING as undefined as boolean) || false),
        errorHandler() {
          // because of error, angular router should not be used
          // @see: https://stackoverflow.com/a/47290078
          window.location.href = '/error/oops';
        },
      }
    ),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
