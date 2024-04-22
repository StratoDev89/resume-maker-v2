import { DynamicForm } from '@interfaces/dynamic-form.interface';

export const awardsFormConfig: DynamicForm = {
  formTitle: 'awards',
  saveBtnTitle: 'save awards',
  deleteBtnTitle: '',
  addBtnTitle: '',
  storageVariable:'',
  formControls: [
    {
      name: 'awards',
      label: '',
      controlName: 'awards',
      type: 'textarea',
      validators: [
        {
          validatorName: 'required',
          message: '*awards field is required',
        },
      ],
      class: 'black-border',
      placeholder: '',
    },
  ],
  create: () => {},
  add:() => {},
  update: (id: string) => {},
  delete: (id: string) => {},
};
