import {
  DatePicker,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules'
import { Control } from 'react-hook-form'

interface DateFieldProps {
  control: Control<any>
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  value?: Date
}

export const DateField = ({
  control,
  name,
  label,
  placeholder,
  disabled,
  value
}: DateFieldProps) => {
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
            <DatePicker
              {...field}
              disabled={disabled}
              onChange={(value: Date | undefined) => {
                if (value != null) {
                  const date = new Date(value)
                  field.onChange(date)
                }
              }}
              value={field.value ?? value}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
