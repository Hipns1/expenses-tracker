import { Control } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  TimeInput
} from '@/modules'

interface TimeFieldProps {
  control: Control<any>
  label?: string
  placeholder?: string
  name: string
  disabled?: boolean
  className?: string
}

export const TimeField = ({
  control,
  label,
  placeholder = '--:--',
  name,
  disabled,
  className
}: TimeFieldProps) => {
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
            <TimeInput
              placeholder={placeholder}
              onChange={field.onChange}
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
