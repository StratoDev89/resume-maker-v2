import { DynamicForm } from '@interfaces/dynamic-form.interface';

export const experienceFormConfig: DynamicForm = {
  formTitle: 'experience',
  saveBtnTitle: 'save experience',
  deleteBtnTitle: 'delete',
  addBtnTitle: '',
  storageVariable: [''],
  create: () => {},
  add:() => {},
  update: (id: string) => {},
  delete: (id: string) => {},
  formControls: [
    {
      name: 'position',
      controlName: 'position',
      label: 'Position',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*Position is required',
        },
      ],
    },
    {
      name: 'organization',
      controlName: 'organization',
      label: 'Organization',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*Organization is required',
        },
      ],
    },
    {
      name: 'address',
      controlName: 'address',
      label: 'Address',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*Address is required',
        },
      ],
    },
    {
      name: 'city',
      controlName: 'city',
      label: 'City',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*City is required',
        },
      ],
    },
    {
      name: 'state',
      controlName: 'state',
      label: 'State',
      type: 'select',
      options: ['1', '2'],
      validators: [
        {
          validatorName: 'required',
          message: '*State is required',
        },
      ],
    },
    {
      name: 'zipCode',
      controlName: 'zipCode',
      label: 'Zip Code',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          message: '*Zip Code is required',
        },
      ],
    },
    {
      name: 'startDate',
      controlName: 'startDate',
      label: 'Start Date',
      type: 'date',
      validators: [
        {
          validatorName: 'required',
          message: '*Start Date is required',
        },
      ],
    },
    {
      name: 'endDate',
      controlName: 'endDate',
      label: 'End Date',
      type: 'date',
      validators: [],
      value:'current',
      extraText:'Leave Blank For Current'
    },
    {
      name: 'hours',
      controlName: 'hours',
      label: 'Hours',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          message: '*Hours are required',
        },
      ],
    },
    {
      name: 'salary',
      controlName: 'salary',
      label: 'Salary',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          message: '*Salary is required',
        },
      ],
    },
    {
      name: 'skills',
      controlName: 'skills',
      label: 'Duties, Accomplishments And Related Skills',
      type: 'textarea',
      validators: [
        {
          validatorName: 'required',
          message: '*Skills are required',
        },
      ],
      class: 'black-border',
    },
  ],
};
