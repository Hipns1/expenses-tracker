import { FaCheck } from 'react-icons/fa'
import { cn } from '@/modules'

export interface CheckboxProps {
  label: string
  onChange?: (e: boolean) => void
  disabled?: boolean
  labelClassName?: string
}

export function Checkbox({
  label,
  onChange,
  disabled,
  labelClassName
}: Readonly<CheckboxProps>) {
  return (
    <div className={cn('relative flex items-center', disabled && 'opacity-50')}>
      <label className='flex cursor-pointer items-center space-x-2'>
        <input
          disabled={disabled}
          type='checkbox'
          className='peer hidden'
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <div className='flex h-4 min-h-4 w-4 min-w-4 items-center justify-center rounded-[4px] border-2 border-tertiary-200 transition-colors duration-300 peer-checked:border-none peer-checked:bg-secondary'>
          <FaCheck className='h-[10px] w-[10px] text-tertiary-50 peer-checked:hidden' />
        </div>
        <span className={cn('ml-2 text-sm', labelClassName)}>{label}</span>
      </label>
    </div>
  )
}
