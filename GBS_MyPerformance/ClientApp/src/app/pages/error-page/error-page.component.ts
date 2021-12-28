import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  errorType: Errors | null = null;
  subscription: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe(data => {
      this.errorType = data.error;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get error(): string {
    switch (this.errorType) {
      case Errors.NO_PERMISSION:
        return 'Leider haben Sie keinen Zugriff auf die gewünschte Seite.';
      case Errors.NOT_FOUND:
        return 'Die gewünschte Seite wurde leider nicht gefunden.';
      case Errors.MFA_REQUIRED:
        return 'Sie müssen die 2 Faktor Authentifizierung aktiviert haben, um auf die gewünschte Seite zu gelangen.';
      default:
        return 'Leider ist ein Fehler aufgetreten. Wir arbeiten schon daran.';
    }
  }
}

export enum Errors {
  NO_PERMISSION,
  NOT_FOUND,
  MFA_REQUIRED,
  GENERAL_ERROR,
}
