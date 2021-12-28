import {Component, OnInit} from '@angular/core';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {TableDataType} from '../../../../components/table/table.component.constants';
import {TableAction, TableActionEvent} from '../../../../components/table/table.component';
import {Router} from '@angular/router';
import {AppRoles} from '../../../../constants/app-roles.constants';
import {AppPortals} from '../../../../constants/app-portals.constants';

@Component({
  selector: 'app-system-management-page',
  templateUrl: './system-management-page.component.html',
  styleUrls: ['./system-management-page.component.scss'],
})
export class SystemManagementPageComponent implements OnInit {
  public editActive = false;
  public tabs = ['Lehrgänge', 'Klassen', 'Registrierung'];
  public activeTab = this.tabs[0];

  //#region Professions Table
  public professions = [
    {
      id: '973d7252-be4c-4262-a87d-ce0c1fb0fbfc',
      name: 'Informatiker Fachr. Applikationsentwicklung',
    },
    {
      id: '973d7252-be4c-4262-a87d-ce0c1fb0fbfd',
      name: 'Informatiker Fachr. Plattformentwicklung',
    },
    {
      id: '973d7252-be4c-4262-a87d-ce0c1fb0fbfe',
      name: 'Interactive Media Designer',
    },
  ];
  public professionsMapping = [
    {
      header: 'Bezeichnung',
      valueKey: 'name',
      editable: true,
      type: TableDataType.STRING,
    },
  ];
  public professionsActions: TableAction[] = [
    {
      name: 'Entfernen',
      icon: {
        iconClass: 'bi bi-x-circle',
        colorClass: 'text-danger',
      },
      event: 'delete',
    },
    {
      name: 'Gewichtung',
      icon: {
        iconClass: 'bi bi-gear-wide-connected',
        colorClass: 'text-dark',
      },
      event: 'edit-calculation',
      display: true, // always
    },
  ];
  //#endregion Professions Table

  //#region Classes Table
  public classes = [
    {
      name: 'INA1a_2019',
      starting: 2019,
      ending: 2023,
      key: 'hello-world_INA1a',
      profession: {
        name: 'Informatiker Fachr. Applikationsentwicklung',
      },
      teacher: {
        fullName: 'Daniel Jenny',
      },
    },
    {
      name: 'INS1a_2019',
      starting: 2019,
      ending: 2023,
      key: 'whoami?_INS1a-',
      profession: {
        name: 'Informatiker Fachr. Systemtechnik',
      },
      teacher: {
        fullName: 'Thomas Keller',
      },
    },
  ];
  public classesMapping = [
    {
      header: 'Name',
      valueKey: 'name',
      editable: true,
      type: TableDataType.STRING,
    },
    {
      header: 'Beruf',
      valueKey: 'profession.name',
      editable: true,
      type: TableDataType.STRING,
      lookup: [
        {
          name: 'Informatiker Fachr. Systemtechnik',
          value: 'Informatiker Fachr. Systemtechnik',
        },
        {
          name: 'Informatiker Fachr. Applikationsentwicklung',
          value: 'Informatiker Fachr. Applikationsentwicklung',
        },
        {
          name: 'Interactive Media Designer',
          value: 'Interactive Media Designer',
        },
      ],
    },
    {
      header: 'Eintritt',
      valueKey: 'starting',
      editable: true,
      type: TableDataType.NUMBER,
    },
    {
      header: 'Austritt',
      valueKey: 'ending',
      editable: true,
      type: TableDataType.NUMBER,
    },
    {
      header: 'Einschreibeschlüssel',
      valueKey: 'key',
      editable: true,
      type: TableDataType.STRING,
    },
    {
      header: 'Austritt',
      valueKey: 'ending',
      editable: true,
      type: TableDataType.NUMBER,
    },
    {
      header: 'Klassen-Lehrperson',
      valueKey: 'teacher.fullName',
      editable: true,
      type: TableDataType.STRING,
      lookup: [
        {
          name: 'Thomas Keller',
          value: 'Thomas Keller',
        },
        {
          name: 'Daniel Jenny',
          value: 'Daniel Jenny',
        },
        {
          name: 'Marcel Weber',
          value: 'Marcel Weber',
        },
        {
          name: 'Oliver Lux',
          value: 'Oliver Lux',
        },
      ],
    },
  ];
  public classesActions: TableAction[] = [
    {
      name: 'Entfernen',
      icon: {
        iconClass: 'bi bi-x-circle',
        colorClass: 'text-danger',
      },
      event: 'delete',
    },
  ];
  //#endregion Classes Table

  //#region Domains Table
  public domains = [
    {
      domain: 'edu.gbssg.ch',
      forRole: 'Student',
    },
    {
      domain: 'ksb-sg.ch',
      forRole: 'Student',
    },
    {
      domain: 'gbssg.ch',
      forRole: 'Teacher',
    },
    {
      domain: 'gbssg.ch',
      forRole: 'Administrator',
    },
    {
      domain: 'cl04.ch',
      forRole: 'Administrator',
    },
  ];
  public domainsMapping = [
    {
      header: 'Domain',
      valueKey: 'domain',
      editable: true,
      type: TableDataType.DOMAIN,
    },
  ];
  public domainsActions: TableAction[] = [
    {
      name: 'Entfernen',
      icon: {
        iconClass: 'bi bi-x-circle',
        colorClass: 'text-danger',
      },
      event: 'delete',
    },
  ];
  //#endregion Domains Table

  // enum mapping
  public appRoles = AppRoles;

  constructor(private router: Router) {}

  ngOnInit() {}

  getDomainsForRole(role: AppRoles): any[] {
    return this.domains.filter(d => d.forRole === role);
  }

  onEditClick($event: EditClickEvent) {
    this.editActive = $event.edit;
  }

  onTabChange($event: string) {
    this.activeTab = $event;
  }

  onProfessionsTableAction($event: TableActionEvent) {
    if ($event.event === 'edit-calculation') {
      this.router.navigate([`/app/${AppPortals.ADMIN}/edit-calculation`, $event.object.id]);
    } else if ($event.event === 'delete') {
      this.professions = this.professions.filter(p => p !== $event.object);
    }
  }

  onClassesTableAction($event: TableActionEvent) {
    if ($event.event === 'delete') {
      this.classes = this.classes.filter(c => c !== $event.object);
    }
  }

  onDomainsTableAction($event: TableActionEvent) {
    if ($event.event === 'delete') {
      this.domains = this.domains.filter(d => d !== $event.object);
    }
  }
}
