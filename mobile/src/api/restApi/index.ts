import RestAPI from './rest';
import {baseUrl} from 'src/constants/urls';

export const MainAPI = new RestAPI(false, baseUrl);
export const MainProtectedAPI = new RestAPI(true, baseUrl);
