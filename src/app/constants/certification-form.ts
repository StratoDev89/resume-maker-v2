import { DynamicForm } from '@interfaces/dynamic-form.interface';

export const certificationFormConfig: DynamicForm = {
  formTitle: 'certifications',
  saveBtnTitle: 'save certifications',
  deleteBtnTitle: '',
  addBtnTitle: '',
  formControls: [
    {
      name: 'certifications',
      label: '',
      controlName: 'certifications',
      type: 'textarea',
      validators: [
        {
          validatorName: 'required',
          message: '*certifications field is required',
        },
      ],
      class: 'black-border',
      placeholder: '',
    },
  ],
  storageVariable: '',
  create: () => {},
  add:() => {},
  update: (id: string) => {},
  delete: (id: string) => {},
};
