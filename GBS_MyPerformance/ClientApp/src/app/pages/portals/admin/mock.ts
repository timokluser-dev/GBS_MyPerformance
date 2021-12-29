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
            ratingCategories: []
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
            ratingCategories: []
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
            ratingCategories: [
                {
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a0',
                    name: 'Informatikkompetenzen BFS',
                    abbreviation: 'IK_BFS',
                    diplomaFactor: 0.24,
                    mark: 5,
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
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a1',
                    name: 'Informatikkompetenzen ÜK',
                    abbreviation: 'IK_ÜK',
                    diplomaFactor: 0.06,
                    mark: 5,
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
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a2',
                    name: 'Erweiterte Grundkompetenzen',
                    abbreviation: 'EGK',
                    diplomaFactor: 0.2,
                    mark: 5,
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
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a3',
                    name: 'Allgemeinbildung',
                    abbreviation: 'ABU',
                    diplomaFactor: 0.2,
                    mark: 5,
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
                    id: '8f2fca42-2f97-414f-8d5a-17963fa772a4',
                    name: 'Facharbeit',
                    abbreviation: 'FA',
                    diplomaFactor: 0.2,
                    mark: 5,
                    ratings: [],
                    singleRatings: [
                        {
                            subject: 'IPA',
                            name: 'IPA',
                            mark: null,
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
