import { DynamicForm } from '@interfaces/dynamic-form.interface';

export const referencesFormConfig: DynamicForm = {
  formTitle: 'references',
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
      name: 'name',
      controlName: 'name',
      label: 'name',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*name is required',
        },
      ],
    },
    {
      name: 'employer',
      controlName: 'employer',
      label: 'employer',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*employer is required',
        },
      ],
    },
    {
      name: 'title',
      controlName: 'title',
      label: 'title',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*title is required',
        },
      ],
    },
    {
      name: 'phone',
      controlName: 'phone',
      label: 'phone',
      type: 'text',
      validators: [],
    },
    {
      name: 'email',
      controlName: 'email',
      label: 'email',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*email is required',
        },
        {
          validatorName: 'email',
          message: '*email must be in the format john@doe.com',

        },
      ],
    },
  ],
};
