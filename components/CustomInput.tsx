//path: lendsqr-fe-test\components\CustomInput.tsx
import { authFormSchema } from '@/lib/utils'
import React from 'react'
import { FormControl, FormField, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { z } from 'zod'
import "./styles/auth-style.scss";
import { Control, FieldPath } from 'react-hook-form'

const formSchema = authFormSchema("login")

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>
    name: FieldPath<z.infer<typeof formSchema>>
    placeholder: string
}

const CustomInput = ({control, name, placeholder }: CustomInput) => {
  return (
      
      <FormField
  control={control}
  name={name}
  render={({ field }) => (
      <div>
      <FormControl>
        <div className=" input ">
        <Input 
        placeholder={placeholder}
        type={name === "password" ? "password" : "text"}
        {...field} />
        </div>

      </FormControl>
      <FormMessage />
      </div>
  )}
/>
  )
}

export default CustomInput