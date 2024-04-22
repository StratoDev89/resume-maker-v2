import { DynamicForm } from '@interfaces/dynamic-form.interface';

export enum EducationOptions {
  HIGH = 'High School Diploma',
  COLLEGE = 'Some College (No Degree)',
  ASOCIATE = "Associate's Degree",
  BACHELLOR = "Bachelor's Degree",
  MASTER = "Master's Degree",
  DOCTORAL = 'Doctoral Degree',
  PROFESSIONAL = 'Professional Degree (e.g., MD, JD, DDS)',
}

const educationOptions: EducationOptions[] = [
  EducationOptions.HIGH,
  EducationOptions.COLLEGE,
  EducationOptions.ASOCIATE,
  EducationOptions.BACHELLOR,
  EducationOptions.MASTER,
  EducationOptions.DOCTORAL,
  EducationOptions.PROFESSIONAL,
];
export const educationFormConfig: DynamicForm = {
  formTitle: 'education',
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
      name: 'degree',
      controlName: 'degree',
      label: 'Degree Or Diploma Name',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*Degree Or Diploma Name is required',
        },
      ],
    },
    {
      name: 'acronym',
      controlName: 'acronym',
      label: 'acronym',
      type: 'text',
      validators: [
        {
          validatorName: 'required',
          message: '*acronym is required',
        },
      ],
    },
    {
      name: 'year',
      controlName: 'year',
      label: 'Year Graduated',
      type: 'number',
      validators: [
        {
          validatorName: 'required',
          message: '*year is required',
        },
      ],
    },
    {
      name: 'level',
      controlName: 'level',
      label: 'Level Attained',
      type: 'select',
      options: educationOptions,
      validators: [
        {
          validatorName: 'required',
          message: '*level is required',
        },
      ],
    },
  ],
};
