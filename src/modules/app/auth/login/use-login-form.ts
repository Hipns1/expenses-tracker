import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginProps, loginSchema, useAuth } from '@/modules'

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useAuth()

  const form = useForm<LoginProps>({
    resolver: zodResolver(loginSchema)
  })

  const onSuccess = async (data: LoginProps): Promise<void> => {
    setIsLoading(true)
    await login(data)
    setIsLoading(false)
  }

  return {
    form,
    isLoading,
    onSuccess
  }
}
