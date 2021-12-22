import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomePageComponent} from './pages/home/home.component';
import {CounterComponent} from './counter/counter.component';
import {FetchDataComponent} from './fetch-data/fetch-data.component';
import {ApiAuthorizationModule} from 'src/api-authorization/api-authorization.module';
import {AuthorizeGuard} from 'src/api-authorization/authorize.guard';
import {AuthorizeInterceptor} from 'src/api-authorization/authorize.interceptor';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RoleGuard} from './guards/role.guard';
import {MfaGuard} from './guards/mfa.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomePageComponent,
    CounterComponent,
    FetchDataComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'app', pathMatch: 'full'},
      // Account Mgmt redirect
      {path: 'login', redirectTo: 'authentication/login', pathMatch: 'full'},
      {path: 'register', redirectTo: 'authentication/register', pathMatch: 'full'},
      // All Protected Routes
      {
        path: 'app',
        canActivate: [AuthorizeGuard],
        children: [
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          {
            path: 'home',
            component: HomePageComponent,
          },
          {
            path: 'counter',
            component: CounterComponent,
          },
          {
            path: 'fetch-data',
            component: FetchDataComponent,
          },
          {
            path: 'student',
            canActivate: [RoleGuard],
            data: {role: 'Student'},
            children: [
              {path: '', redirectTo: 'home', pathMatch: 'full'},
              {
                path: 'home',
                component: HomePageComponent,
                data: {
                  edit: true,
                },
              },
            ],
          },
          {
            path: 'trainer',
            canActivate: [RoleGuard],
            data: {role: 'Trainer'},
            children: [
              {path: '', redirectTo: 'home', pathMatch: 'full'},
              {
                path: 'home',
                component: HomePageComponent,
                data: {
                  edit: true,
                },
              },
            ],
          },
          {
            path: 'teacher',
            canActivate: [RoleGuard],
            data: {role: 'Teacher'},
            children: [
              {path: '', redirectTo: 'home', pathMatch: 'full'},
              {
                path: 'home',
                component: HomePageComponent,
              },
            ],
          },
          {
            path: 'admin',
            canActivate: [RoleGuard],
            data: {role: 'Administrator'},
            children: [
              {path: '', redirectTo: 'home', pathMatch: 'full'},
              {
                path: 'home',
                component: HomePageComponent,
              },
            ],
          },
        ],
      },
    ]),
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
