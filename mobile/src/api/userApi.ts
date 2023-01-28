import {AxiosResponse} from 'axios';
import {IUser} from 'src/models/user';
import {MainProtectedAPI} from './restApi';

export const UserAPI = {
  getMyInfo: (): Promise<AxiosResponse<IUser>> =>
    MainProtectedAPI.get('/api/users/me'),
};
