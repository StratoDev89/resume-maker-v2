import { DynamicForm } from '@interfaces/dynamic-form.interface';

export enum LanguageOptions {
  NONE = 'none',
  NOVICE = 'novice',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

const options = [
  LanguageOptions.NONE,
  LanguageOptions.NOVICE,
  LanguageOptions.INTERMEDIATE,
  LanguageOptions.ADVANCED,
];

export const languagesFormConfig: DynamicForm = {
  formTitle: 'languages',
  saveBtnTitle: 'save',
  deleteBtnTitle: '',
  addBtnTitle: '',
  storageVariable: '',
  create: () => {},
  add: () => {},
  update: (id: string) => {},
  delete: (id: string) => {},
  formControls: [
    {
      name: 'language',
      controlName: 'language',
      label: 'language',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*language is required',
        },
      ],
    },
    {
      name: 'spoken',
      controlName: 'spoken',
      label: 'spoken',
      type: 'select',
      options: options,
      validators: [
        {
          validatorName: 'required',
          message: '*spoken is required',
        },
      ],
    },
    {
      name: 'read',
      controlName: 'read',
      label: 'read',
      type: 'select',
      options: options,
      validators: [
        {
          validatorName: 'required',
          message: '*read is required',
        },
      ],
    },
    {
      name: 'written',
      controlName: 'written',
      label: 'written',
      type: 'select',
      options: options,
      validators: [
        {
          validatorName: 'required',
          message: '*written is required',
        },
      ],
    },
  ],
};
