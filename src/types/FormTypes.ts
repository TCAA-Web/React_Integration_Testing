export type FormFieldOptionType = {
  value: string
  id: number
}

export type FormFieldType = {
  type: 'text' | 'number' | 'select'
  fieldName: string
  options?: Array<FormFieldOptionType>
  value: string | number
}

export type formValueType = {
  name: string
  age: number
  image: string
}
