import {Component, OnInit} from '@angular/core';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {TableAction, TableActionEvent} from '../../../../components/table/table.component';
import {TableDataType} from '../../../../components/table/table.component.constants';

@Component({
  selector: 'app-manage-users-page',
  templateUrl: './manage-users-page.component.html',
  styleUrls: ['./manage-users-page.component.scss'],
})
export class ManageUsersPageComponent implements OnInit {
  public _users = [
    {
      id: 'fbb47b03-78b6-4cb4-a6ff-424c145cfaa0',
      firstName: 'Schüler',
      lastName: 'GBS',
      role: 'Student',
      email: 'student@gbssg.ch'
    },
    {
      id: 'fbb47b03-78b6-4cb4-a6ff-424c145cfaa1',
      firstName: 'Lehrer',
      lastName: 'GBS',
      role: 'Teacher',
      email: 'teacher@gbssg.ch'
    },
    {
      id: 'fbb47b03-78b6-4cb4-a6ff-424c145cfaa3',
      firstName: 'Trainer',
      lastName: 'COMPANY',
      role: 'Trainer',
      email: 'trainer@company.com'
    },
    {
      id: 'fbb47b03-78b6-4cb4-a6ff-424c145cfaa4',
      firstName: 'Administrator',
      lastName: 'GBS',
      role: 'Administrator',
      email: 'administrator@gbssg.ch'
    },
  ];
  public userMapping = [
    {
      header: 'Name',
      valueKey: 'firstName',
      editable: true,
      type: TableDataType.STRING,
    },
    {
      header: 'Vorname',
      valueKey: 'lastName',
      editable: true,
      type: TableDataType.STRING,
    },
    {
      header: 'E-Mail',
      valueKey: 'email',
      editable: true,
      type: TableDataType.EMAIL,
    },
  ];
  public filters = [
    {
      name: 'Schüler',
      nameSingular: 'Schüler',
      filter: 'Student',
    },
    {
      name: 'Lehrpersonen',
      nameSingular: 'Lehrperson',
      filter: 'Teacher',
    },
    {
      name: 'Ausbildner',
      nameSingular: 'Ausbildner',
      filter: 'Trainer',
    },
    {
      name: 'Administratoren',
      nameSingular: 'Administrator',
      filter: 'Administrator',
    },
  ];
  public activeFilter: any;

  public editActive = false;
  public modal = {
    show: false,
    data: null,
  };

  public tableActions: TableAction[] = [
    {
      name: 'Entfernen',
      icon: {
        iconClass: 'bi bi-x-circle',
        colorClass: 'text-danger',
      },
      event: 'delete-user',
    },
  ];

  constructor() {}

  ngOnInit() {}

  get tabs(): string[] {
    return this.filters.map(f => f.name);
  }

  get users(): any[] {
    return this._users.filter(u => u.role === this.activeFilter.filter);
  }

  onTabChange($event: string) {
    this.activeFilter = this.filters.filter(f => f.name === $event)[0];
  }

  onEditClick($event: EditClickEvent) {
    this.editActive = $event.edit;
  }

  onTableAction($event: TableActionEvent) {
    this.modal.show = true;
    this.modal.data = $event.object;
  }

  onDeleteConfirm() {
    this.deleteUser(this.modal.data);
    this.modal.show = false;
  }

  deleteUser(obj: any) {
    this._users = this._users.filter(u => u !== obj);
  }
}
