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
import {
  LoginDomainDTO,
  LoginDomainService,
  ProfessionAreaDTO,
  ProfessionAreaService,
  ProfessionDTO,
  ProfessionService,
  SchoolClassDTO,
  SchoolClassService,
  TeacherDTO,
  TeacherService,
} from 'myperformance-client';
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

  public data = {
    professions: [],
    professionArea: [],
    classes: [],
    teachers: [],
    domains: [],
  };
  public profession: ProfessionDTO;
  public professionArea: ProfessionAreaDTO;
  public class: SchoolClassDTO;
  public teacher: TeacherDTO;
  public domain: LoginDomainDTO;

  constructor(
    private professionApi: ProfessionService,
    private professionAreaApi: ProfessionAreaService,
    private schoolClassApi: SchoolClassService,
    private teacherApi: TeacherService,
    private loginDomainApi: LoginDomainService,
    private router: Router
  ) {}

  ngOnInit() {
    this.professionApi.apiProfessionGet().subscribe(data => {
      data.forEach(p => {
        this.profession = {
          id: p.id,
          name: p.name,
          diplomaRoundingType: p.diplomaRoundingType,
          professionArea: {
            name: p.professionArea.name,
          },
          professionAreaId: p.professionAreaId,
          activeFrom: p.activeFrom.substr(0, p.activeFrom.indexOf('-')),
          activeTo: p.activeTo.substr(0, p.activeTo.indexOf('-')),
          students: [], //Array<StudentDTO>
          semesters: [], // Array<SemesterDTO>
        };
        this.data.professions.push(this.profession);

        // this.teacher {

        // }

        // teacher.id

        this.data.teachers.push(this.teacher);
      });
    });

    this.schoolClassApi.apiSchoolClassGet().subscribe(data => {
      data.forEach(c => {
        this.class = {
          id: c.id,
          name: c.name,
          starting: c.starting.substr(0, c.starting.indexOf('-')),
          ending: c.ending.substr(0, c.ending.indexOf('-')),
          einschreibeSchluessel: c.einschreibeSchluessel,
          professionArea: c.professionArea,
          // todo: api should return teachers
          teacher: {
            firstName: "Max",
            lastName: "Mustermann"
          }
        };
        this.data.classes.push(this.class);
      });
    });

    // maybe not needed
    this.professionAreaApi.apiProfessionAreaGet().subscribe(data => {
      console.log(data);
      data.forEach(c => {
        console.log(c);
        this.professionArea = {};
        this.data.professionArea.push(this.professionArea);
      });
    });

    // this.teacherApi.apiTeacherGet().subscribe(data => {
    //   console.log('teacher request1');
    //   console.log(data);
    //   // data.forEach(c => {
    //   //   this.domain = {

    //   //   };
    //   //   this.data.domains.push(this.domain);
    //   // });
    // });

    this.loginDomainApi.apiLoginDomainGet().subscribe(data => {
      data.forEach(d => {
        this.domain = {
          id: d.id,
          domain: d.domain,
          role: d.role,
        };
        this.data.domains.push(this.domain);
      });
    });
  }

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
      valueKey: 'professionArea.name',
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
      valueKey: 'einschreibeSchluessel',
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
      valueKey: 'teacher.lastName',
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
