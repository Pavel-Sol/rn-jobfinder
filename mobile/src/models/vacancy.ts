import {IPaginationResult} from 'src/models/paginationResult';

export interface IVacancy {
  id: number;
  attributes: IVacancyAttributes;
}

interface IVacancyAttributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type GetVacanciesResponseType = IPaginationResult<IVacancy>;
