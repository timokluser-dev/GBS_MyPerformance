export enum TableDataType {
    STRING = 'string',
    DATE = 'date',
    NUMBER = 'number',
    MARK = 'number',
    DOMAIN = 'text',
    EMAIL = 'email',
    SUBTABLE = 'subtable'
}

export interface TableAction {
    name: string;
    icon: {
        iconClass: string;
        colorClass: string;
    };
    event: string;
    /**
     * if not set to true, it will only be display when edit is active
     */
    display?: boolean;
}

export interface TableActionEvent {
    event: string;
    object: any;
    row?: any | null;
}

export interface TableMapping {
    header: string;
    /**
     * the key in the object
     * (e.g. name; object.name)
     */
    valueKey: string;
    /**
     * if nothing specified, col is editable
     */
    editable?: boolean;
    type: TableDataType;
    /**
     * a lookup for the col
     */
    lookup?: TableMappingLookup[];
    subMapping?: TableMapping[];
}

export interface TableMappingLookup {
    name: string;
    value: string | number;
}
