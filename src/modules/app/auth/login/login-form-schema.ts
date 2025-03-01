import { v } from '@/modules/core'
import { z } from 'zod'

export const loginSchema = z.object({
  user: v.string({
    required: true,
    type: 'text'
  }),
  password: v.string({
    required: true,
    type: 'text'
  })
})
export type LoginProps = z.infer<typeof loginSchema>
