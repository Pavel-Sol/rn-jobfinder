import {AxiosResponse} from 'axios';
import {GetVacanciesResponseType} from 'src/models/vacancy';
import {MainProtectedAPI} from './restApi';

export const VacancyAPI = {
  getVacancies: (
    queryParams: string,
  ): Promise<AxiosResponse<GetVacanciesResponseType>> => {
    return MainProtectedAPI.get(`/api/vacancies?populate=*?${queryParams}`);
  },
};

// export const VacancyAPI = {
//   getVacancies: (queryParams: string): Promise<AxiosResponse> => {
//     return MainProtectedAPI.get(`/api/vacancies?populate=*?${queryParams}`);
//   },
// };
