import {AxiosResponse} from 'axios';
import {GetMyResumesResponseType} from 'src/models/resume';
import {MainProtectedAPI} from './restApi';

export const ResumeAPI = {
  getMyResumes: (): Promise<AxiosResponse<GetMyResumesResponseType>> => {
    return MainProtectedAPI.get('/api/myresumes');
  },
};
