import { Popover, PopoverContent, PopoverTrigger, cn } from '@/modules'
import { Arrow } from '@radix-ui/react-popover'

export interface PopupProps {
  children: React.ReactNode
  className?: string
  triggerClassName?: string
  triggerContent?: React.ReactNode
  icon?: React.ReactNode
  title?: string
  titleClassName?: string
  description?: string
  onclick?: () => void
  open?: boolean
  setOpen?: (open: boolean) => void
  align?: 'start' | 'center' | 'end'
  headerClassName?: string
  disabled?: boolean
  showArrow?: boolean
}

export const Popup = ({
  children,
  className,
  triggerClassName,
  triggerContent,
  icon,
  title,
  titleClassName,
  description,
  onclick,
  open,
  setOpen,
  align = 'center',
  headerClassName,
  disabled = false,
  showArrow = false
}: PopupProps) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={disabled}
        onClick={onclick}
        className={cn(
          'v flex h-10 w-10 items-center justify-center rounded-[8px] bg-transparent',
          triggerClassName,
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        )}
      >
        {triggerContent}
      </PopoverTrigger>
      <PopoverContent
        className={cn('overflow-visible bg-tertiary-50 p-0', className)}
        align={align}
      >
        {showArrow && (
          <div className='absolute left-[75%]'>
            <Arrow
              className='absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rotate-180 transform fill-current text-tertiary'
              width={80}
              height={46}
            />
          </div>
        )}
        {(icon || title) && (
          <div className={cn('flex items-center gap-7 p-8', headerClassName)}>
            {icon && (
              <div className='flex h-16 w-16 min-w-16 items-center justify-center rounded-full bg-tertiary-300'>
                {icon}
              </div>
            )}
            <div>
              <p
                className={cn(
                  'text-2xl font-semibold text-tertiary',
                  titleClassName
                )}
              >
                {title}
              </p>
              <p className='mt-1 text-xs font-normal text-tertiary'>
                {description}
              </p>
            </div>
          </div>
        )}
        <div>{children}</div>
      </PopoverContent>
    </Popover>
  )
}
