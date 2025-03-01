import { format } from 'date-fns'
import { useState, useEffect, forwardRef } from 'react'
import { Calendar, cn, Button } from '@/modules'
import { es } from 'date-fns/locale'
import * as Popover from '@radix-ui/react-popover'
import { GoChevronRight, GoChevronLeft } from 'react-icons/go'
import { IoCalendarClearOutline } from 'react-icons/io5'

interface DatePickerProps {
  placeholder?: string
  className?: string
  onChange?: (value: Date | undefined) => void
  disabled?: boolean
  value?: any
  minDate?: Date
  maxDate?: Date
  placeholderClassName?: string
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      placeholder,
      className,
      onChange,
      disabled,
      value,
      minDate,
      maxDate,
      placeholderClassName
    },
    ref
  ) => {
    const [date, setDate] = useState<Date>()
    const [open, setOpen] = useState(false)
    const [currentMonth, setCurrentMonth] = useState(new Date())

    const handleNextMonth = () => {
      setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
      )
    }

    const handlePreviousMonth = () => {
      setCurrentMonth(
        (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
      )
    }
    const handleSelectDate = (selectedDate: Date | undefined) => {
      setDate(selectedDate)
      onChange?.(selectedDate)
      setOpen(false)
    }
    useEffect(() => {
      setDate(value)
    }, [value])

    return (
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger
          type='button'
          ref={ref}
          disabled={disabled}
          className={cn(
            'flex h-10 w-full items-center justify-between rounded-md border-[1px] border-tertiary-200 pl-3 pr-4 text-left text-sm font-normal',
            'disabled:bg-tertiary-400 disabled:opacity-50',
            !date && 'text-muted-foreground',
            className
          )}
        >
          {date ? (
            format(date, 'dd/MM/yyyy', { locale: es })
          ) : (
            <span className={cn('text-tertiary-100', placeholderClassName)}>
              {placeholder ?? 'DD/MM/AAAA'}
            </span>
          )}
          <div>
            <IoCalendarClearOutline className='ml-50 h-3.5 w-3.5' />
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content className='rounded-md border border-tertiary-200 bg-tertiary-50 p-4 shadow-lg'>
            <div className='mb-2 flex items-center justify-between'>
              <Button
                variant='tertiary'
                onClick={handlePreviousMonth}
                className='h-8 w-8 p-0 text-sm font-medium text-tertiary hover:underline'
              >
                <GoChevronLeft size={20} />
              </Button>
              <span className='text-center text-base font-bold capitalize'>
                {format(currentMonth, 'MMMM yyyy', { locale: es })}
              </span>
              <Button
                variant='tertiary'
                onClick={handleNextMonth}
                className='h-8 w-8 p-0 text-sm font-medium text-tertiary hover:underline'
              >
                <GoChevronRight size={20} />
              </Button>
            </div>
            <Calendar
              minDate={minDate}
              maxDate={maxDate}
              weekStartsOn={0}
              mode='single'
              selected={date}
              onSelect={handleSelectDate}
              locale={es}
              month={currentMonth}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    )
  }
)
