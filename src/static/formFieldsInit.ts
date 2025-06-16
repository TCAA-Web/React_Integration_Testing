import type { FormFieldType } from '../types/FormTypes'

export const formFieldsInit: Array<FormFieldType> = [
  { type: 'text', fieldName: 'name', value: '' },
  { type: 'number', fieldName: 'age', value: 0 },
  {
    type: 'select',
    fieldName: 'image',
    value: 1,
    options: [
      { value: 'Lonely Robot', id: 1 },
      { value: 'Big Decisions', id: 2 },
      { value: 'Rich Problems', id: 3 },
    ],
  },
]
