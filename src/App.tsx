import { useState } from 'react'
import { Form } from './components/Form'
import { ImageSlider } from './components/ImageSlider'
import { FormField } from './components/FormField'
import { MainLayout } from './layout/MainLayout'
import { Heading } from './components/Heading'
import { imageArray } from './static/imageArray'
import type { FormFieldType, formValueType } from './types/FormTypes'
import { formFieldsInit } from './static/formFieldsInit'
import { Select } from './components/Select'
import { capitalizeFirstLetter } from './utils/capitalizeFirstLetter'

function App() {
  const initialState: formValueType = { name: 'Enter your name', age: 0, image: '' }

  const [formState, setFormState] = useState<formValueType>(initialState)

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = event.target
    console.log(value, name)
    console.log(formState)
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`${formState.name}, du har valgt ${formState.image} som dit billede.`)
  }

  return (
    <MainLayout>
      <Heading aria-label='heading'>Pick the image you like the most</Heading>
      <ImageSlider imageGallery={imageArray} />
      <Form callback={handleSubmit}>
        {formFieldsInit?.map((field: FormFieldType) => {
          if (field.type === 'text' || field.type == 'number') {
            const fieldName = field.fieldName as keyof formValueType
            return (
              <FormField
                key={fieldName}
                labelText={capitalizeFirstLetter(field.fieldName)}
                type={field.type}
                name={field.fieldName}
                value={formState[fieldName]}
                callback={handleFormInput}
              />
            )
          }
          if (field.type === 'select') {
            return (
              <Select
                key={field.fieldName}
                labelText={capitalizeFirstLetter(field.fieldName)}
                callback={handleFormInput}
                name={field.fieldName}
                options={field.options!}
              />
            )
          }
        })}
      </Form>
    </MainLayout>
  )
}

export default App
