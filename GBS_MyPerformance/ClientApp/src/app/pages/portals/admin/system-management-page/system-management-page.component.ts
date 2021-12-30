import {Component, OnInit} from '@angular/core';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {TableDataType, TableMapping} from '../../../../components/table/table.component.constants';
import {
  TableAction,
  TableActionEvent,
} from '../../../../components/table/table.component.constants';
import {Router} from '@angular/router';
import {AppRoles} from '../../../../constants/app-roles.constants';
import {AppPortals} from '../../../../constants/app-portals.constants';
import {data} from '../mock';

@Component({
  selector: 'app-system-management-page',
  templateUrl: './system-management-page.component.html',
  styleUrls: ['./system-management-page.component.scss'],
})
export class SystemManagementPageComponent implements OnInit {
  public editActive = false;
  public tabs = ['Lehrgänge', 'Klassen', 'Registrierung'];
  public activeTab = this.tabs[0];
  public data = data;

  //#region Professions Table
  public professionsMapping: TableMapping[] = [
    {
      header: 'Bezeichnung',
      valueKey: 'name',
      editable: true,
      type: TableDataType.STRING,
    },
    {
      header: 'Fachbereich',
      valueKey: 'professionArea.name',
      editable: true,
      type: TableDataType.STRING,
      lookup: [...this.data.professionArea.map(a => ({name: a.name, value: a.name}))],
    },
    {
      header: 'Inkraftsetzung',
      valueKey: 'activeFrom',
      editable: true,
      type: TableDataType.NUMBER,
    },
    {
      header: 'Ausserkraftsetzung',
      valueKey: 'activeTo',
      editable: true,
      type: TableDataType.NUMBER,
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
  public classesMapping: TableMapping[] = [
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
      lookup: [...this.data.professions.map(p => ({name: p.name, value: p.name}))],
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
      lookup: [...this.data.teachers.map(t => ({name: t.fullName, value: t.fullName}))],
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
    return this.data.domains.filter(d => d.forRole === role);
  }

  get professionsData(): any[] {
    return this.data.professions;
  }

  get classesData(): any[] {
    return this.data.classes;
  }

  get domainsData(): any[] {
    return this.data.domains;
  }

  onEditClick($event: EditClickEvent) {
    this.editActive = $event.edit;
  }

  onTabChange($event: string) {
    this.activeTab = $event;
  }

  async onProfessionsTableAction($event: TableActionEvent) {
    if ($event.event === 'edit-calculation') {
      await this.router.navigate([`/app/${AppPortals.ADMIN}/calculation`, $event.object.id]);
    } else if ($event.event === 'delete') {
      this.data.professions = this.data.professions.filter(p => p !== $event.object);
    }
  }

  onClassesTableAction($event: TableActionEvent) {
    if ($event.event === 'delete') {
      this.data.classes = this.data.classes.filter(c => c !== $event.object);
    }
  }

  onDomainsTableAction($event: TableActionEvent) {
    if ($event.event === 'delete') {
      this.data.domains = this.data.domains.filter(d => d !== $event.object);
    }
  }
}
