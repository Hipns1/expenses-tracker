import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea
} from '@/modules'
import { Control } from 'react-hook-form'

interface TextareaFieldProps {
  control: Control<any>
  name: string
  placeholder?: string
  type?: string
  disabled?: boolean
  className?: string
  label?: string
  mainClassName?: string
}

export const TextareaField = ({
  control,
  name,
  placeholder,
  disabled,
  className,
  label,
  mainClassName
}: TextareaFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={mainClassName}>
          {label && (
            <label
              htmlFor={name}
              className='text-xs font-semibold text-tertiary-600'
            >
              {label}
            </label>
          )}
          <FormControl>
            <div className='relative'>
              <Textarea
                {...field}
                placeholder={placeholder}
                disabled={disabled}
                className={`${className} pr-10`}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
