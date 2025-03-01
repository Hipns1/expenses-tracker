import {
  Checkbox,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  cn
} from '@/modules'
import { useState } from 'react'
import { Control } from 'react-hook-form'

export interface CheckboxFieldProps {
  control: Control<any>
  name: string
  disabled?: boolean
  label?: string
  items: Array<{ label: string; value: string }>
  labelClassName?: string
  className?: string
}

export const CheckboxField = ({
  control,
  name,
  disabled = false,
  label,
  items,
  labelClassName,
  className
}: CheckboxFieldProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    let updatedValues
    if (isChecked) {
      updatedValues = [...selectedValues, value]
    } else {
      updatedValues = selectedValues.filter(
        (selectedValue) => selectedValue !== value
      )
    }
    setSelectedValues(updatedValues)
    return updatedValues
  }

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
            <div className={cn('flex space-x-4', className)}>
              {items.map(({ label: itemLabel, value }) => (
                <Checkbox
                  label={itemLabel}
                  key={`${name}-${value}`}
                  onChange={(isChecked: boolean) => {
                    const updatedValues = handleCheckboxChange(value, isChecked)
                    field.onChange(updatedValues)
                  }}
                  disabled={disabled}
                  labelClassName={cn('text-sm', labelClassName)}
                />
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
