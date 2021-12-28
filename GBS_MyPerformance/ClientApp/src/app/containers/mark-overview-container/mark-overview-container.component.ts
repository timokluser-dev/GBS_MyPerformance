import {Component, Input, OnInit} from '@angular/core';
import {TableDataType} from '../../components/table/table.component.constants';

@Component({
  selector: 'app-mark-overview-container',
  templateUrl: './mark-overview-container.component.html',
  styleUrls: ['./mark-overview-container.component.scss'],
})
export class MarkOverviewContainerComponent implements OnInit {
  @Input() editMode: EditModes;
  @Input() editActive = false;
  @Input() studentId: string;

  public activeRatingCategory = 'Übersicht';
  public overview = {
    ratings: [
      {
        name: 'Informatikkompetenzen',
        mark: 5.5,
      },
      {
        name: 'Erweiterte Grundkompetenzen',
        mark: 5.5,
      },
      {
        name: 'Allgemeinbildung',
        mark: 5.5,
      },
      {
        name: 'Facharbeit',
        mark: 5.5,
      },
      {
        name: 'EFZ',
        mark: 5.5,
        textBold: true,
      },
    ],
  };
  public ratingCategories = [
    {
      name: 'Informatikkompetenzen BFS',
      abbreviation: 'IK_BFS',
      diplomaFactor: 0.24,
      average: 5,
      ratings: [
        {
          subject: 'M100',
          name: 'Daten charakterisieren',
          mark: 5.5,
          semester: {
            number: 1,
          },
        },
        {
          subject: 'M104',
          name: 'Datenmodell implementieren',
          mark: null,
          semester: {
            number: 2,
          },
        },
      ],
    },
    {
      name: 'Informatikkompetenzen ÜK',
      abbreviation: 'IK_ÜK',
      diplomaFactor: 0.06,
      average: 5,
      ratings: [
        {
          subject: 'ÜK304',
          name: 'Einzelplatz-Computer in Betrieb nehmen',
          mark: null,
          semester: {
            number: 2,
          },
        },
        {
          subject: 'ÜK305',
          name: 'Betriebssysteme installieren, konfigurieren und administrieren',
          mark: null,
          semester: {
            number: 2,
          },
        },
        {
          subject: 'ÜK302',
          name: 'Fortgeschrittene Funktionen von Office Werkzeugen nutzen',
          mark: null,
          semester: {
            number: 2,
          },
        },
        {
          subject: 'ÜK101',
          name: 'Webauftritt erstellen und veröffentlichen',
          mark: null,
          semester: {
            number: 2,
          },
        },
      ],
    },
    {
      name: 'Erweiterte Grundkompetenzen',
      abbreviation: 'EGK',
      diplomaFactor: 0.2,
      average: 5,
      ratings: [
        {
          subject: 'E',
          name: 'Englisch',
          mark: null,
          semester: {
            number: 1,
          },
        },
        {
          subject: 'M',
          name: 'Mathematik',
          mark: null,
          semester: {
            number: 1,
          },
        },
        {
          subject: 'E',
          name: 'Englisch',
          mark: null,
          semester: {
            number: 2,
          },
        },
        {
          subject: 'NW',
          name: 'Naturwissenschaften',
          mark: null,
          semester: {
            number: 2,
          },
        },
        {
          subject: 'E',
          name: 'Englisch',
          mark: null,
          semester: {
            number: 3,
          },
        },
        {
          subject: 'WIR',
          name: 'Wirtschaft',
          mark: null,
          semester: {
            number: 3,
          },
        },
        {
          subject: 'M',
          name: 'Mathematik',
          mark: null,
          semester: {
            number: 3,
          },
        },
        {
          subject: 'E',
          name: 'Englisch',
          mark: null,
          semester: {
            number: 4,
          },
        },
        {
          subject: 'WIR',
          name: 'Wirtschaft',
          mark: null,
          semester: {
            number: 4,
          },
        },
        {
          subject: 'NW',
          name: 'Naturwissenschaften',
          mark: null,
          semester: {
            number: 4,
          },
        },
      ],
    },
    {
      name: 'Allgemeinbildung',
      abbreviation: 'ABU',
      diplomaFactor: 0.2,
      average: 5,
      ratings: [
        {
          subject: 'SUK',
          name: 'Sprache und Kommunikation',
          mark: null,
          semester: {
            number: 1,
          },
        },
        {
          subject: 'GES',
          name: 'Gesellschaft',
          mark: null,
          semester: {
            number: 1,
          },
        },
      ],
      singleRatings: [
        {
          subject: 'VA',
          name: 'Vertiefungsarbeit',
          mark: null,
        },
        {
          subject: 'SP',
          name: 'Schlussprüfung',
          mark: null,
        },
      ],
    },
    {
      name: 'Facharbeit',
      abbreviation: 'FA',
      diplomaFactor: 0.2,
      average: 5,
      ratings: [],
      singleRatings: [
        {
          subject: 'IPA',
          name: 'IPA',
          mark: null,
        },
      ],
    },
    {
      name: 'empty',
      abbreviation: 'FA',
      diplomaFactor: 0.2,
      average: 5,
      ratings: [],
    },
  ];

  public mappingOverview = [
    {
      header: 'Bereich',
      valueKey: 'name',
      editable: false,
      type: TableDataType.STRING,
    },
    {
      header: 'Notendurchschnitt',
      valueKey: 'mark',
      editable: true,
      type: TableDataType.MARK,
    },
  ];

  public mappingMarks = [
    {
      header: 'Semester',
      valueKey: 'semester.number',
      editable: false,
      type: TableDataType.NUMBER,
    },
    {
      header: 'Fach',
      valueKey: 'subject',
      editable: false,
      type: TableDataType.STRING,
    },
    {
      header: 'Bezeichnung',
      valueKey: 'name',
      editable: false,
      type: TableDataType.STRING,
    },
    {
      header: 'Note',
      valueKey: 'mark',
      editable: true,
      type: TableDataType.MARK,
    },
  ];

  public overviewTableMapping = [
    {
      header: 'Bezeichnung',
      valueKey: 'name',
      editable: false,
      type: TableDataType.NUMBER,
    },
    {
      header: 'Durchschnitt',
      valueKey: 'mark',
      editable: true,
      type: TableDataType.NUMBER,
    },
  ];

  // enum mapping
  public editModes = EditModes;

  constructor() {}

  ngOnInit() {}

  public editConditionEval = (row: any) => {
    return this.editMode === EditModes.NEW_ONLY ? row.mark === null : true;
  };

  onTabChange($event: string) {
    this.activeRatingCategory = $event;
  }

  get ratingCategoriesWithRatings(): any[] {
    return this.ratingCategories.filter(
      r => r.ratings.length || (r.singleRatings && r.singleRatings.length)
    );
  }

  get primaryTableMapping(): any[] {
    return this.isOverview ? this.mappingOverview : this.mappingMarks;
  }

  get primaryTableData(): any[] {
    return this.isOverview ? this.overview.ratings : this.selectedRatingCategory.ratings;
  }

  get overviewTableData(): any[] | null {
    return this.isOverview ? null : this.ratingCategoryAverageAndSingleRatings;
  }

  get ratingCategoryAverageAndSingleRatings(): any[] {
    if (this.selectedRatingCategory.singleRatings) {
      return [
        ...this.selectedRatingCategory.singleRatings,
        {
          name: this.selectedRatingCategory.abbreviation,
          mark: this.selectedRatingCategory.average,
          textBold: true,
        },
      ];
    } else {
      return [
        {
          name: this.selectedRatingCategory.abbreviation,
          mark: this.selectedRatingCategory.average,
          textBold: true,
          editable: false,
        },
      ];
    }
  }

  get selectedRatingCategory(): any {
    return this.ratingCategories.filter(r => r.name === this.activeRatingCategory)[0] as any;
  }

  get isOverview(): boolean {
    return this.activeRatingCategory === 'Übersicht';
  }

  get tabs(): any[] {
    // tslint:disable-next-line
    let tabs: string[] = ['Übersicht'];
    tabs.push(...this.ratingCategoriesWithRatings.map<string>(r => r.name));
    return tabs;
  }

  get calculationText(): string {
    return this.ratingCategories
      .map(r => `${r.diplomaFactor * 100}% ${r.abbreviation}`)
      .join(' + ');
  }
}

export enum EditModes {
  ALL,
  NEW_ONLY,
  READ_ONLY,
}
