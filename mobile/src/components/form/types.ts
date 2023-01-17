import {FieldMetaProps, FieldProps} from 'formik';

export type TValues = {
  [field: string]: any;
};

interface Imeta extends FieldMetaProps<any> {
  error: any;
}

export interface IFieldProps extends FieldProps {
  meta: Imeta;
}
