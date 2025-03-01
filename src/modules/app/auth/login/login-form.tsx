import { Button, Form, InputField, Spinner, useLoginForm } from '@/modules'

export const LoginForm = () => {
  const { form, isLoading, onSuccess } = useLoginForm()
  const { control, handleSubmit } = form

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSuccess)} className='w-full'>
        <div className='flex w-full flex-col items-center justify-center'>
          <div className='flex w-full flex-col gap-2'>
            <InputField
              control={control}
              label='Usuario'
              labelClassName='text-sm'
              name='user'
              type='text'
              placeholder='Ingrese su usuario'
            />
            <InputField
              control={control}
              label='Contraseña'
              labelClassName='text-sm'
              name='password'
              type='password'
              placeholder='Ingrese su contraseña'
            />
          </div>
          <Button type='submit' className='mt-8 flex w-full gap-2 sm:mt-10 xl:mt-16' variant='secondary'>
            {isLoading && <Spinner size='sm' />}
            <span className='text-sm font-semibold'>Iniciar sesión</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}
