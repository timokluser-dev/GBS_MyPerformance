export interface StudentData {
  student: {
    id: string;
    firstName: string;
    lastName: string;
  };
  company: {
    name: string;
  };
  ratingCategories: {
    name: string;
    abbreviation: string;
    mark: number | null;
    diplomaFactor: number;
    ratings: {
      subject: string;
      name: string;
      mark: number | null;
      semester: {
        number: number;
      };
    }[];
    singleRatings?: {
      subject: string;
      name: string;
      mark: number | null;
    }[];
  }[];
  profession: {
    name: string;
  };
  diplomaMarkPreview: number | null;
}

export interface SchoolClassData {
  id: string;
  name: string;
  students: StudentData[];
}
