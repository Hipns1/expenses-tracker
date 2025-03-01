import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  RadioButton,
  cn
} from '@/modules'
import { Control } from 'react-hook-form'

export interface RadioFieldProps {
  control: Control<any>
  name: string
  disabled?: boolean
  label?: string
  items: Array<{ label: string; value: string }>
  labelClassName?: string
  className?: string
}

export const RadioField = ({
  control,
  name,
  disabled = false,
  label,
  items,
  labelClassName,
  className
}: RadioFieldProps) => {
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
              {items?.map(({ label: itemLabel, value }) => (
                <RadioButton
                  key={value}
                  id={`${name}-${value}`}
                  name={name}
                  value={value}
                  checked={field.value === value}
                  onChange={(value: string) => field.onChange(`${value}`)}
                  disabled={disabled}
                  label={itemLabel}
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
