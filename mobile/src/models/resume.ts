import {IPaginationResult} from 'src/models/paginationResult';

export interface IResume {
  id: number;
  attributes: IResumeAttributes;
}

interface IResumeAttributes {
  userId: number;
  title: string;
  skillsDesc: string;
  isActive: boolean;
}

export type GetMyResumesResponseType = IPaginationResult<IResume>;
