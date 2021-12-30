import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {data} from '../mock';
import {TableAction, TableActionEvent, TableDataType, TableMapping} from '../../../../components/table/table.component.constants';
import {EditClickEvent} from '../../../../components/page-title/page-title.component';
import {Location} from '@angular/common';
import {AppPortals} from '../../../../constants';

@Component({
    selector: 'app-edit-calculation-page',
    templateUrl: './edit-calculation-page.component.html',
    styleUrls: ['./edit-calculation-page.component.scss'],
})
export class EditCalculationPageComponent implements OnInit {
    public professionId: string;
    public data = data;
    public editActive = false;
    public initialCategoriesCount: number;

    public _partialRoundingTypeMapping: TableMapping = {
        header: 'Rundung',
        valueKey: 'roundingType',
        editable: true,
        type: TableDataType.NUMBER,
        lookup: [
            {
                name: '0.5',
                value: 0.5
            },
            {
                name: '0.1',
                value: 0.1
            },
        ]
    };
    public _professionConfigMapping: TableMapping[] = [
        {
            header: 'Bezeichnung',
            valueKey: 'name',
            editable: true,
            type: TableDataType.STRING,
        },
        {
            header: 'Kürzel',
            valueKey: 'abbreviation',
            editable: true,
            type: TableDataType.STRING,
        },
        {
            header: 'Gewicht (dezimal)',
            valueKey: 'diplomaFactor',
            editable: true,
            type: TableDataType.NUMBER,
        },
        this._partialRoundingTypeMapping,
        {
            header: 'Semester-Noten',
            valueKey: 'ratings',
            editable: true,
            type: TableDataType.SUBTABLE,
            subMapping: [
                {
                    header: 'Fach',
                    valueKey: 'subject',
                    editable: true,
                    type: TableDataType.STRING,
                },
                {
                    header: 'Semester',
                    valueKey: 'semester.number',
                    editable: true,
                    type: TableDataType.NUMBER
                },
            ]
        },
        {
            header: 'Einzel-Noten',
            valueKey: 'singleRatings',
            editable: true,
            type: TableDataType.SUBTABLE,
            subMapping: [
                {
                    header: 'Bezeichnung',
                    valueKey: 'subject',
                    editable: true,
                    type: TableDataType.STRING
                },
                this._partialRoundingTypeMapping,
            ]
        },
    ];
    public _tableActions: TableAction[] = [
        {
            name: 'Entfernen',
            icon: {
                iconClass: 'bi bi-x-circle',
                colorClass: 'text-danger',
            },
            event: 'delete',
            display: true
        },
    ];
    public createAdditionalParams = {
        ratings: [],
        singleRatings: []
    };

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
    }

    ngOnInit() {
        this.professionId = this.activatedRoute.snapshot.paramMap.get('id');
        this.initialCategoriesCount = this.profession.ratingCategories.length;
    }

    onTableAction($event: TableActionEvent) {
        if ($event.event === 'delete') {
            this.profession.ratingCategories = this.profession.ratingCategories.filter(c => c.name !== $event.object.name);
        } else if ($event.event === 'delete-singleRatings') {
            // sub-table event: delete-<valueKey>
            // tslint:disable-next-line
            let ratingCategory = this.profession.ratingCategories.filter(c => c.id === $event.row.id)[0];
            // eslint-disable-next-line
            ratingCategory.singleRatings = ratingCategory.singleRatings.filter(r => r !== $event.object);
        } else if ($event.event === 'delete-ratings') {
            // tslint:disable-next-line
            let ratingCategory = this.profession.ratingCategories.filter(c => c.id === $event.row.id)[0];
            // eslint-disable-next-line
            ratingCategory.ratings = ratingCategory.ratings.filter(r => r !== $event.object);
        }
    }

    onEditClick($event: EditClickEvent) {
        this.initialCategoriesCount = this.profession.ratingCategories.length;
        this.editActive = $event.edit;

        if (!this.editActive) {
            this.forceRefreshComponent();
        }
    }

    get professionConfigMapping(): TableMapping[] {
        return this._professionConfigMapping;
    }

    get tableActions(): TableAction[] {
        return this._tableActions;
    }

    get profession(): any {
        const profession = this.data.professions.filter(p => p.id === this.professionId)[0];
        return profession ? profession : null;
    }

    get professionData(): any[] {
        return this.profession.ratingCategories;
    }

    forceRefreshComponent() {
        const currentUrl = this.location.path();
        this.router.navigateByUrl(`${currentUrl}/update`, {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]).then();
        });
    }
}
