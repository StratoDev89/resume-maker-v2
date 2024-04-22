import { DynamicForm } from '@interfaces/dynamic-form.interface';

export const additionalFormConfig: DynamicForm = {
  formTitle: 'additional',
  saveBtnTitle: 'save',
  deleteBtnTitle: '',
  addBtnTitle: '',
  formControls: [
    {
      name: 'additional',
      label: '',
      controlName: 'additional',
      type: 'textarea',
      class: 'black-border',
      placeholder: '',
      validators: [
        {
          validatorName: 'required',
          message: '*additional info is required',
        },
      ],
    },
  ],
  storageVariable: '',
  create: () => {},
  add: () => {},
  update: (id: string) => {},
  delete: (id: string) => {},
};

