import { FaCheck } from 'react-icons/fa'
import { cn } from '@/modules/core'
import { useState } from 'react'

export interface RadioButtonProps {
  id?: string
  value?: string
  checked?: boolean
  onChange?: any
  disabled?: boolean
  label?: string
  name?: string
  labelClassName?: string
  radioClassName?: string
}

export function RadioButton({
  id,
  value,
  checked,
  onChange,
  disabled,
  label,
  name,
  labelClassName,
  radioClassName
}: Readonly<RadioButtonProps>) {
  const [internalChecked, setInternalChecked] = useState(false)
  const isChecked = checked || internalChecked

  const handleChange = () => {
    if (checked === undefined) {
      if (!internalChecked) {
        setInternalChecked(true)
      }
    }
    onChange?.(value)
  }

  return (
    <div
      className={cn(
        'relative flex items-center',
        disabled ? 'pointer-events-none opacity-50' : ''
      )}
    >
      <label
        htmlFor={id}
        className='flex cursor-pointer items-center space-x-2'
      >
        <input
          type='radio'
          name={name}
          id={id}
          value={value}
          checked={checked}
          onChange={handleChange}
          className='peer hidden'
        />
        <div
          className={cn(
            'flex h-4 min-h-4 w-4 min-w-4 items-center justify-center rounded-full border-2 border-tertiary-200 transition-colors duration-300 peer-checked:border-none peer-checked:bg-secondary',
            radioClassName
          )}
        >
          {isChecked && (
            <FaCheck className='h-[10px] w-[10px] text-tertiary-50' />
          )}
        </div>
        <span className={labelClassName}>{label}</span>
      </label>
    </div>
  )
}
