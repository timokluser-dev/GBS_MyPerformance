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
