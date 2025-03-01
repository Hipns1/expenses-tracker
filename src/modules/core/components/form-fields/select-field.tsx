import { Control } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  SelectInput
} from '@/modules'

export interface Options {
  label: string
  value: string
}

interface SelectFieldProps {
  options: Options[]
  control: Control<any>
  label?: string
  placeholder?: string
  name: string
  search?: boolean
  disabled?: boolean
  className?: string
}

export const SelectField = ({
  options,
  control,
  label,
  placeholder,
  name,
  search,
  disabled,
  className
}: SelectFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <label
              htmlFor={name}
              className='text-xs font-semibold text-tertiary-600'
            >
              {label}
            </label>
          )}
          <FormControl>
            <SelectInput
              search={search}
              placeholder={placeholder}
              onChange={field.onChange}
              items={options}
              disabled={disabled}
              value={field.value}
              className={className}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
