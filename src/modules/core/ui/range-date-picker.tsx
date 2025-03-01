import { format } from 'date-fns'
import { useState, useEffect, forwardRef } from 'react'
import { Button, Calendar, cn, SelectInput } from '@/modules'
import { es } from 'date-fns/locale'
import { IoCalendarClearOutline } from 'react-icons/io5'
import * as Popover from '@radix-ui/react-popover'
import { DateRange } from 'react-day-picker'
import { GoChevronRight, GoChevronLeft } from 'react-icons/go'

interface DatePickerProps {
  className?: string
  onChange?: (value: DateRange | undefined) => void
  disabled?: boolean
  value?: DateRange
  minDate?: Date
  maxDate?: Date
}

export const RangeDatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ className, onChange, disabled, value, minDate, maxDate }, ref) => {
    const [date, setDate] = useState<DateRange | undefined>()
    const [open, setOpen] = useState(false)
    const [selectedYear, setSelectedYear] = useState<number>(
      new Date().getFullYear()
    )
    const [selectedMonth, setSelectedMonth] = useState<number>(
      new Date().getMonth()
    )

    const handleSelectDate = (selectedDate: DateRange | undefined) => {
      if (selectedDate) {
        if (selectedDate.from && !selectedDate.to) {
          setDate({ ...selectedDate })
        } else if (selectedDate.from && selectedDate.to) {
          setDate(selectedDate)
          onChange?.(selectedDate)
        }
      }
    }

    const years = Array.from(
      { length: new Date().getFullYear() - 1950 + 1 },
      (_, index) => 1950 + index
    )
      .map((year) => ({
        label: `${year}`,
        value: `${year}`
      }))
      .reverse()

    const handleYearChange = (year: number) => {
      setSelectedYear(Number(year))
    }

    const handleMonthChange = (increment: boolean) => {
      setSelectedMonth((prevMonth) => {
        const newMonth = increment ? prevMonth + 1 : prevMonth - 1
        if (newMonth > 11) return 0
        if (newMonth < 0) return 11
        return newMonth
      })
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
            'flex h-10 w-full items-center justify-between gap-1 truncate rounded-sm border-[1px] border-tertiary-200 pl-3 pr-4 text-left text-sm font-normal',
            'disabled:bg-tertiary-400 disabled:opacity-50',
            !date && 'text-muted-foreground',
            className
          )}
        >
          {date?.from && date?.to ? (
            <span
              className='truncate'
              title={`${format(date.from, 'dd/MM/yy', { locale: es })} | ${format(date.to, 'dd/MM/yy', { locale: es })}`}
            >{`${format(date.from, 'dd/MM/yy', { locale: es })} | ${format(date.to, 'dd/MM/yy', { locale: es })}`}</span>
          ) : (
            <span className='flex gap-6 truncate text-tertiary-100'>
              <p>Desde</p>
              <p className='flex items-center gap-2.5'>
                <span>|</span>Hasta
              </p>
            </span>
          )}
          <div>
            <IoCalendarClearOutline className='h-3.5 w-3.5' />
          </div>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className='z-20 rounded-md border border-tertiary-200 bg-tertiary-50 p-4 shadow-lg'>
            <SelectInput
              search={true}
              value={selectedYear.toString()}
              items={years}
              onChange={(value) => handleYearChange(value as number)}
              className='mb-6'
            />
            <div className='relative pt-0.5'>
              <div className='absolute top-0 z-10 flex w-full items-center justify-between'>
                <Button
                  variant='tertiary'
                  onClick={() => handleMonthChange(false)}
                  className='h-8 w-8 p-0 text-sm font-medium text-tertiary hover:underline'
                >
                  <GoChevronLeft size={20} />
                </Button>
                <Button
                  variant='tertiary'
                  onClick={() => handleMonthChange(true)}
                  className='h-8 w-8 p-0 text-sm font-medium text-tertiary hover:underline'
                >
                  <GoChevronRight size={20} />
                </Button>
              </div>
              <Calendar
                minDate={minDate}
                maxDate={maxDate}
                locale={es}
                initialFocus
                mode='range'
                month={new Date(selectedYear, selectedMonth, 1)}
                selected={date}
                onSelect={handleSelectDate}
                numberOfMonths={2}
              />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    )
  }
)
