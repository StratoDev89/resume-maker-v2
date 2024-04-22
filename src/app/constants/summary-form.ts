import { DynamicForm } from '@interfaces/dynamic-form.interface';

export const summaryFormConfig: DynamicForm = {
  formTitle: 'summary',
  saveBtnTitle: 'save summary',
  deleteBtnTitle: '',
  addBtnTitle: '',
  storageVariable: '',
  formControls: [
    {
      name: 'summary',
      label: '',
      controlName: 'summary',
      type: 'textarea',
      validators: [
        {
          validatorName: 'required',
          message: '*summary field is required',
        },
      ],
      class: 'black-border',
      placeholder: '',
    },
  ],
  create: () => {},
  add: () => {},
  update: (id: string) => {},
  delete: (id: string) => {},
};
