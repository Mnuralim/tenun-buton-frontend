'use server'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const API_URL = process.env.API_URL
interface CreateResetPasswordState {
  success: boolean
  error?: {
    _form?: string[]
    password?: string[]
    confirmPassword?: string[]
  }
}

const createResetPasswordSchema = z.object({
  password: z
    .string()
    .min(6, {
      message: 'Password harus minimal 6 karakter',
    })
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]+$/, {
      message: 'Password setidaknya mengandung satu angka, dan setidaknya satu karakter khusus.',
    }),
  confirmPassword: z.string().min(1, { message: 'Konfirmasi password wajib diisi' }),
})

export const resetPassword = async (
  token: string,
  formState: CreateResetPasswordState,
  formData: FormData
): Promise<CreateResetPasswordState> => {
  const result = createResetPasswordSchema.safeParse({
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  })

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
      success: false,
    }
  }

  if (result.data.password !== result.data.confirmPassword) {
    return {
      error: {
        confirmPassword: ['Konfirmasi password tidak sesuai'],
      },
      success: false,
    }
  }

  try {
    const response = await fetch(`${API_URL}/auths/reset-password/${token}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: result.data.password,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message)
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        error: {
          _form: [error.message],
        },
      }
    } else {
      return {
        success: false,
        error: {
          _form: ['Something went wrong'],
        },
      }
    }
  }

  redirect(`/auth/reset-password/${token}/?success=password-reset-success`)

  return {
    success: true,
    error: {},
  }
}
