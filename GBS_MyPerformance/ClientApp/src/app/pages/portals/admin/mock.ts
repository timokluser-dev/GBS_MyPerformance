export const data = {
    professions: [
        {
            id: '973d7252-be4c-4262-a87d-ce0c1fb0fbfc',
            name: 'Informatiker Fachr. Applikationsentwicklung',
            activeFrom: 2014,
            activeTo: 2024,
            professionArea: {
                id: 'a26fc926-eb24-4269-9d7c-d45a1c057051',
                name: 'Informatik',
            },
            subjects: [
                {
                    id: '01d08d0e-be3b-4bee-a062-e6b220b094a4',
                    subject: 'M100',
                    name: 'Daten charakterisieren',
                },
                {
                    id: '01d08d0e-be3b-4bee-a062-e6b220b094a5',
                    subject: 'M104',
                    name: 'Datenmodell implementieren',
                },
            ],
            ratingCategories: [
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a0',
                    name: 'Informatikkompetenzen BFS',
                    abbreviation: 'IK_BFS',
                    diplomaFactor: 0.24,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'M100',
                            name: 'Daten charakterisieren',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'M104',
                            name: 'Datenmodell implementieren',
                            semester: {
                                number: 2,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a1',
                    name: 'Informatikkompetenzen ÜK',
                    abbreviation: 'IK_ÜK',
                    diplomaFactor: 0.06,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'ÜK304',
                            name: 'Einzelplatz-Computer in Betrieb nehmen',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK305',
                            name: 'Betriebssysteme installieren, konfigurieren und administrieren',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK302',
                            name: 'Fortgeschrittene Funktionen von Office Werkzeugen nutzen',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK101',
                            name: 'Webauftritt erstellen und veröffentlichen',
                            semester: {
                                number: 2,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a2',
                    name: 'Erweiterte Grundkompetenzen',
                    abbreviation: 'EGK',
                    diplomaFactor: 0.2,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'M',
                            name: 'Mathematik',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'NW',
                            name: 'Naturwissenschaften',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'WIR',
                            name: 'Wirtschaft',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'M',
                            name: 'Mathematik',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 4,
                            },
                        },
                        {
                            subject: 'WIR',
                            name: 'Wirtschaft',
                            semester: {
                                number: 4,
                            },
                        },
                        {
                            subject: 'NW',
                            name: 'Naturwissenschaften',
                            semester: {
                                number: 4,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a3',
                    name: 'Allgemeinbildung',
                    abbreviation: 'ABU',
                    diplomaFactor: 0.2,
                    roundingType: 0.1,
                    ratings: [
                        {
                            subject: 'SUK',
                            name: 'Sprache und Kommunikation',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'GES',
                            name: 'Gesellschaft',
                            semester: {
                                number: 1,
                            },
                        },
                    ],
                    singleRatings: [
                        {
                            subject: 'VA',
                            name: 'Vertiefungsarbeit',
                            roundingType: 0.1,
                        },
                        {
                            subject: 'SP',
                            name: 'Schlussprüfung',
                            roundingType: 0.1,
                        },
                    ],
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a4',
                    name: 'Facharbeit',
                    abbreviation: 'FA',
                    diplomaFactor: 0.2,
                    roundingType: 0.1,
                    ratings: [],
                    singleRatings: [
                        {
                            subject: 'IPA',
                            name: 'IPA',
                            roundingType: 0.1,
                        },
                    ],
                },
            ]
        },
        {
            id: '973d7252-be4c-4262-a87d-ce0c1fb0fbfd',
            name: 'Informatiker Fachr. Systemtechnik',
            activeFrom: 2014,
            activeTo: 2024,
            professionArea: {
                id: 'a26fc926-eb24-4269-9d7c-d45a1c057051',
                name: 'Informatik',
            },
            subjects: [
                {
                    id: '01d08d0e-be3b-4bee-a062-e6b220b094a4',
                    subject: 'M100',
                    name: 'Daten charakterisieren',
                },
                {
                    id: '01d08d0e-be3b-4bee-a062-e6b220b094a5',
                    subject: 'M104',
                    name: 'Datenmodell implementieren',
                },
            ],
            ratingCategories: [
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a0',
                    name: 'Informatikkompetenzen BFS',
                    abbreviation: 'IK_BFS',
                    diplomaFactor: 0.24,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'M100',
                            name: 'Daten charakterisieren',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'M104',
                            name: 'Datenmodell implementieren',
                            semester: {
                                number: 2,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a1',
                    name: 'Informatikkompetenzen ÜK',
                    abbreviation: 'IK_ÜK',
                    diplomaFactor: 0.06,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'ÜK304',
                            name: 'Einzelplatz-Computer in Betrieb nehmen',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK305',
                            name: 'Betriebssysteme installieren, konfigurieren und administrieren',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK302',
                            name: 'Fortgeschrittene Funktionen von Office Werkzeugen nutzen',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK101',
                            name: 'Webauftritt erstellen und veröffentlichen',
                            semester: {
                                number: 2,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a2',
                    name: 'Erweiterte Grundkompetenzen',
                    abbreviation: 'EGK',
                    diplomaFactor: 0.2,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'M',
                            name: 'Mathematik',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'NW',
                            name: 'Naturwissenschaften',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'WIR',
                            name: 'Wirtschaft',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'M',
                            name: 'Mathematik',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 4,
                            },
                        },
                        {
                            subject: 'WIR',
                            name: 'Wirtschaft',
                            semester: {
                                number: 4,
                            },
                        },
                        {
                            subject: 'NW',
                            name: 'Naturwissenschaften',
                            semester: {
                                number: 4,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a3',
                    name: 'Allgemeinbildung',
                    abbreviation: 'ABU',
                    diplomaFactor: 0.2,
                    roundingType: 0.1,
                    ratings: [
                        {
                            subject: 'SUK',
                            name: 'Sprache und Kommunikation',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'GES',
                            name: 'Gesellschaft',
                            semester: {
                                number: 1,
                            },
                        },
                    ],
                    singleRatings: [
                        {
                            subject: 'VA',
                            name: 'Vertiefungsarbeit',
                            roundingType: 0.1,
                        },
                        {
                            subject: 'SP',
                            name: 'Schlussprüfung',
                            roundingType: 0.1,
                        },
                    ],
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a4',
                    name: 'Facharbeit',
                    abbreviation: 'FA',
                    diplomaFactor: 0.2,
                    roundingType: 0.1,
                    ratings: [],
                    singleRatings: [
                        {
                            subject: 'IPA',
                            name: 'IPA',
                            roundingType: 0.1,
                        },
                    ],
                },
            ]
        },
        {
            id: '973d7252-be4c-4262-a87d-ce0c1fb0fbfe',
            name: 'Informatiker Fachr. Plattformentwicklung',
            activeFrom: 2021,
            activeTo: null,
            professionArea: {
                id: 'a26fc926-eb24-4269-9d7c-d45a1c057051',
                name: 'Informatik',
            },
            ratingCategories: []
        },
        {
            id: '973d7252-be4c-4262-a87d-ce0c1fb0fbff',
            name: 'Interactive Media Designer',
            activeFrom: 2014,
            activeTo: null,
            professionArea: {
                id: 'a26fc926-eb24-4269-9d7c-d45a1c057052',
                name: 'Gestaltung',
            },
            subjects: [
                {
                    id: '01d08d0e-be3b-4bee-a062-e6b220b094a4',
                    subject: 'M100',
                    name: 'Daten charakterisieren',
                },
                {
                    id: '01d08d0e-be3b-4bee-a062-e6b220b094a5',
                    subject: 'M104',
                    name: 'Datenmodell implementieren',
                },
            ],
            ratingCategories: [
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a0',
                    name: 'Informatikkompetenzen BFS',
                    abbreviation: 'IK_BFS',
                    diplomaFactor: 0.24,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'M100',
                            name: 'Daten charakterisieren',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'M104',
                            name: 'Datenmodell implementieren',
                            semester: {
                                number: 2,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a1',
                    name: 'Informatikkompetenzen ÜK',
                    abbreviation: 'IK_ÜK',
                    diplomaFactor: 0.06,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'ÜK304',
                            name: 'Einzelplatz-Computer in Betrieb nehmen',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK305',
                            name: 'Betriebssysteme installieren, konfigurieren und administrieren',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK302',
                            name: 'Fortgeschrittene Funktionen von Office Werkzeugen nutzen',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'ÜK101',
                            name: 'Webauftritt erstellen und veröffentlichen',
                            semester: {
                                number: 2,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a2',
                    name: 'Erweiterte Grundkompetenzen',
                    abbreviation: 'EGK',
                    diplomaFactor: 0.2,
                    roundingType: 0.5,
                    ratings: [
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'M',
                            name: 'Mathematik',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'NW',
                            name: 'Naturwissenschaften',
                            semester: {
                                number: 2,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'WIR',
                            name: 'Wirtschaft',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'M',
                            name: 'Mathematik',
                            semester: {
                                number: 3,
                            },
                        },
                        {
                            subject: 'E',
                            name: 'Englisch',
                            semester: {
                                number: 4,
                            },
                        },
                        {
                            subject: 'WIR',
                            name: 'Wirtschaft',
                            semester: {
                                number: 4,
                            },
                        },
                        {
                            subject: 'NW',
                            name: 'Naturwissenschaften',
                            semester: {
                                number: 4,
                            },
                        },
                    ],
                    singleRatings: []
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a3',
                    name: 'Allgemeinbildung',
                    abbreviation: 'ABU',
                    diplomaFactor: 0.2,
                    roundingType: 0.1,
                    ratings: [
                        {
                            subject: 'SUK',
                            name: 'Sprache und Kommunikation',
                            semester: {
                                number: 1,
                            },
                        },
                        {
                            subject: 'GES',
                            name: 'Gesellschaft',
                            semester: {
                                number: 1,
                            },
                        },
                    ],
                    singleRatings: [
                        {
                            subject: 'VA',
                            name: 'Vertiefungsarbeit',
                            roundingType: 0.1,
                        },
                        {
                            subject: 'SP',
                            name: 'Schlussprüfung',
                            roundingType: 0.1,
                        },
                    ],
                },
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a4',
                    name: 'Facharbeit',
                    abbreviation: 'FA',
                    diplomaFactor: 0.2,
                    roundingType: 0.1,
                    ratings: [],
                    singleRatings: [
                        {
                            subject: 'IPA',
                            name: 'IPA',
                            roundingType: 0.1,
                        },
                    ],
                },
            ]
        },
    ],
    professionArea: [
        {
            id: 'a26fc926-eb24-4269-9d7c-d45a1c057051',
            name: 'Informatik',
        },
        {
            id: 'a26fc926-eb24-4269-9d7c-d45a1c057052',
            name: 'Gestaltung',
        },
    ],
    classes: [
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
        {
            name: 'IMD1a_2019',
            starting: 2019,
            ending: 2023,
            key: 'design?IMd',
            profession: {
                name: 'Interactive Media Designer',
            },
            teacher: {
                fullName: 'Martin Heim',
            },
        },
    ],
    teachers: [
        {
            fullName: 'Thomas Keller',
        },
        {
            fullName: 'Daniel Jenny',
        },
        {
            fullName: 'Marcel Weber',
        },
        {
            fullName: 'Oliver Lux',
        },
        {
            fullName: 'Martin Heim',
        },
    ],
    domains: [
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
    ],
};
