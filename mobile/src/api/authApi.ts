import {AxiosResponse} from 'axios';
import {MainAPI} from './restApi';

export const AuthAPI = {
  login: ({identifier, password}: any): Promise<AxiosResponse> => {
    return MainAPI.post('/api/auth/local', {identifier, password});
  },
  // getMyInfo: (): Promise<AxiosResponse> => MainAPI.get('/api/users/me'),
};
