import { DynamicForm } from '@interfaces/dynamic-form.interface';
import { states } from './states';

export const headerFormConfig: DynamicForm = {
  formTitle: 'header',
  saveBtnTitle: 'save header',
  deleteBtnTitle: '',
  addBtnTitle: '',
  storageVariable: '',
  create: () => {},
  add:() => {},
  update: (id: string) => {},
  delete: (id: string) => {},
  formControls: [
    {
      name: 'firstName',
      controlName: 'firstName',
      label: 'first name',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: 'name is required',
        },
      ],
    },
    {
      name: 'lastName',
      controlName: 'lastName',
      label: 'last name',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: 'lastname is required',
        },
      ],
    },
    {
      name: 'street',
      controlName: 'street',
      label: 'street',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: 'street is required',
        },
      ],
    },
    {
      name: 'city',
      controlName: 'city',
      label: 'city',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: 'city is required',
        },
      ],
    },
    {
      name: 'state',
      controlName: 'state',
      label: 'state',
      type: 'select',
      options: states,
      validators: [
        {
          validatorName: 'required',
          message: 'state is required',
        },
      ],
    },
    {
      name: 'zipCode',
      controlName: 'zipCode',
      label: 'zip code',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          message: '*zip code is required',
        },
      ],
    },
    {
      name: 'email',
      controlName: 'email',
      label: 'email',
      type: 'email',
      validators: [
        {
          validatorName: 'required',
          message: '*email code is required',
        },
        {
          validatorName: 'email',
          message: '*email must be in the format john@doe.com',
        },
      ],
    },
    {
      name: 'phone',
      controlName: 'phone',
      label: 'phone',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          message: 'phone is required',
        },
      ],
    },
  ],
};
