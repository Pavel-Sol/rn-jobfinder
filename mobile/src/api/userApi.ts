import RestAPI from './rest';
import {AxiosResponse} from 'axios';

const MainAPI = new RestAPI(false, 'http://10.0.2.2:1337');
const MainProtectedAPI = new RestAPI(true, 'http://10.0.2.2:1337');

export const UserAPI = {
  login: ({identifier, password}: any): Promise<AxiosResponse> => {
    return MainAPI.post('/api/auth/local', {identifier, password});
  },
  getMyInfo: (): Promise<AxiosResponse> => MainAPI.get('/api/users/me'),
};
