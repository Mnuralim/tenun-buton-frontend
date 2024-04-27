'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'

export interface CreateRegisterFormState {
  errors: {
    email?: string[]
    password?: string[]
    confirmPassword?: string[]
    _form?: string[]
  }
}

const API_URL = process.env.API_URL

const createRegisterSchema = z.object({
  email: z.string().min(1, { message: 'Email wajib diisi' }).email('Email tidak valid'),
  password: z
    .string()
    .min(6, {
      message: 'Password harus minimal 6 karakter',
    })
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {
      message: 'Password setidaknya mengandung satu angka, dan setidaknya satu karakter khusus.',
    }),
  confirmPassword: z.string().min(1, { message: 'Konfirmasi password wajib diisi' }),
})

export async function register(
  formState: CreateRegisterFormState,
  formData: FormData
): Promise<CreateRegisterFormState> {
  const result = createRegisterSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  if (result.data.password !== result.data.confirmPassword) {
    return {
      errors: {
        confirmPassword: ['Konfirmasi password tidak sesuai'],
      },
    }
  }

  try {
    const response = await fetch(`${API_URL}/auths/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: result.data.email,
        password: result.data.password,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      return {
        errors: {
          _form: [data.message],
        },
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      }
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      }
    }
  }

  redirect('/auth/login')
  return {
    errors: {},
  }
}
