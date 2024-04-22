export interface DynamicForm {
  formTitle: Title;
  saveBtnTitle?: string;
  deleteBtnTitle?: string;
  addBtnTitle?: string;
  formControls: FormControlInt[];
  storageVariable: string | string[];
  create?: Function;
  delete?: Function;
  update?: Function;
  add?: Function;
}

export interface FormControlInt {
  name: string;
  controlName: string;
  label: string;
  type: string;
  validators?: Validators[];
  placeholder?: string;
  value?: string;
  class?: string;
  options?: string[];
  style?: string;
  extraText?: string;
}

export interface Validators {
  validatorName: string;
  message: string;
  required?: boolean;
  email?: boolean;
}

export type Title =
  | 'summary'
  | 'experience'
  | 'awards'
  | 'certifications'
  | 'references'
  | 'languages'
  | 'header'
  | 'additional'
  | 'education';
