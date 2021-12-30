import {Component, Input, OnInit} from '@angular/core';
import {TableDataType} from '../../components/table/table.component.constants';
import {StudentData} from '../../components/students-mark-table/students-mark-table.component';

@Component({
  selector: 'app-mark-overview-container',
  templateUrl: './mark-overview-container.component.html',
  styleUrls: ['./mark-overview-container.component.scss'],
})
export class MarkOverviewContainerComponent implements OnInit {
  @Input() editMode: EditModes;
  @Input() editActive = false;
  @Input() data!: StudentData;

  public activeRatingCategory = 'Übersicht';

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

  public ratingCategoryOverviewMapping = [
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

  public semesterMarksMapping = [
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

  // enum mapping
  public editModes = EditModes; // tslint:disable-line

  constructor() {}

  ngOnInit() {}

  get isOverview(): boolean {
    return this.activeRatingCategory === 'Übersicht';
  }

  onTabChange($event: string) {
    this.activeRatingCategory = $event;
  }

  get tabs(): any[] {
    const tabs: string[] = ['Übersicht'];
    tabs.push(...this.ratingCategoriesWithRatings.map<string>(r => r.name));
    return tabs;
  }

  public editConditionEval = (row: any): boolean => {
    return this.editMode === EditModes.NEW_ONLY ? row.mark === null : true; // tslint:disable-line
  }; // tslint:disable-line:semicolon

  get ratingCategoriesWithRatings(): any[] {
    return this.ratingCategories.filter(
      r => r.ratings.length || (r.singleRatings && r.singleRatings.length)
    );
  }

  //#region Primary Table (left)
  get primaryTableData(): any[] {
    if (this.isOverview) {
      return [
        ...this.ratingCategories.map(r => ({...r, calculated: true})),
        // Append Diploma
        {
          name: 'EFZ',
          mark: this.data.diplomaMarkPreview,
          textBold: true,
          calculated: true,
        },
      ];
    }
    return this.selectedRatingCategory.ratings;
  }

  get primaryTableMapping(): any[] {
    if (this.isOverview) {
      return this.ratingCategoryOverviewMapping;
    }
    return this.semesterMarksMapping;
  }

  //#endregion Primary Table (left)

  //#region Secondary (Overview) Table (right)
  get overviewTableData(): any[] | null {
    return this.isOverview ? null : this.singleRatingsAndRatingCategoryAverage;
  }

  //#endregion Secondary (Overview) Table (right)

  get singleRatingsAndRatingCategoryAverage(): any[] {
    const average = {
      name: this.selectedRatingCategory.abbreviation,
      mark: this.selectedRatingCategory.mark,
      textBold: true,
      calculated: true,
    };

    if (this.selectedRatingCategory.singleRatings) {
      return [...this.selectedRatingCategory.singleRatings, average];
    }
    return [average];
  }

  get ratingCategories(): any[] {
    return this.data.ratingCategories;
  }

  get selectedRatingCategory(): any {
    return this.ratingCategories.filter(r => r.name === this.activeRatingCategory)[0] as any;
  }

  get ratingCategoryCalculationText(): string {
    return `${this.selectedRatingCategory.abbreviation}: ${this.selectedRatingCategory.name}
    (${this.selectedRatingCategory.diplomaFactor * 100}%)`;
  }

  get finalCalculationText(): string {
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
