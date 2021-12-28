import {Component, OnInit} from '@angular/core';
import {TableAction, TableActionEvent} from '../../../../components/table/table.component';

@Component({
  selector: 'app-registration-requests-page',
  templateUrl: './registration-requests-page.component.html',
  styleUrls: ['./registration-requests-page.component.scss'],
})
export class RegistrationRequestsPageComponent implements OnInit {
  public tableActions: TableAction[] = [
    {
      name: 'Ablehnen',
      icon: {
        iconClass: 'bi bi-x-circle',
        colorClass: 'text-danger',
      },
      event: 'reject-request',
      display: true,
    },
    {
      name: 'Annehmen',
      icon: {
        iconClass: 'bi bi-check-circle',
        colorClass: 'text-success',
      },
      event: 'accept-request',
      display: true,
    },
  ];
  public requests = [
    {
      date: '10.12.2021',
      user: {
        id: '8d4c90c8-97fb-4d5c-85a5-be9303c78132',
        email: 'max.mustermann@edu.gbssg.ch',
      },
    },
    {
      date: '10.12.2021',
      user: {
        id: '8d4c90c8-97fb-4d5c-85a5-be9303c78133',
        email: 'max.mustermann@edu.gbssg.ch',
      },
    },
    {
      date: '10.12.2021',
      user: {
        id: '8d4c90c8-97fb-4d5c-85a5-be9303c78134',
        email: 'max.mustermann@edu.gbssg.ch',
      },
    },
    {
      date: '10.12.2021',
      user: {
        id: '8d4c90c8-97fb-4d5c-85a5-be9303c78135',
        email: 'max.mustermann@edu.gbssg.ch',
      },
    },
    {
      date: '09.12.2021',
      user: {
        id: '8d4c90c8-97fb-4d5c-85a5-be9303c78136',
        email: 'john.doe@edu.gbssg.ch',
      },
    },
  ];
  public requestsMapping = [
    {
      header: 'Datum',
      valueKey: 'date',
    },
    {
      header: 'E-Mail',
      valueKey: 'user.email',
    },
  ];

  public search = '';

  public modalReject = {
    show: false,
    data: null,
  };

  public modalAccept = {
    show: false,
    data: null,
  };

  constructor() {}

  ngOnInit() {}

  get requestsResult(): any[] {
    return this.requests.filter(r => r.user.email.includes(this.search));
  }

  public onTableAction($event: TableActionEvent) {
    if ($event.event === 'reject-request') {
      this.modalReject.show = true;
      this.modalReject.data = $event.object;
    }
    if ($event.event === 'accept-request') {
      this.modalAccept.show = true;
      this.modalAccept.data = $event.object;
    }
  }

  public onRejectConfirm() {
    this.requests = this.requests.filter(r => r.user.id !== (this.modalReject.data as any).user.id);
    this.modalReject.show = false;
  }

  public onAcceptConfirm() {
    this.requests = this.requests.filter(r => r.user.id !== (this.modalAccept.data as any).user.id);
    this.modalAccept.show = false;
  }
}
