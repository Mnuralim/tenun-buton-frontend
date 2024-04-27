'use server'
import * as auth from '@/auth'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export interface CreateLoginFormState {
  success: boolean
  error?: {
    email?: string[]
    password?: string[]
    _form?: string[]
  }
}

const createLoginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email('Invalid email'),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters',
    })
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/, {
      message: 'The password contains at least one number, and at least one special character.',
    }),
})

export async function signInCredentials(
  formState: CreateLoginFormState,
  formData: FormData
): Promise<CreateLoginFormState> {
  try {
    const result = createLoginSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    if (!result.success) {
      return {
        success: false,
        error: result.error.flatten().fieldErrors,
      }
    }

    await auth.signIn('credentials', {
      redirect: false,
      email: result.data.email,
      password: result.data.password,
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        error: {
          _form: ['Incorrect email or password, or try logging in with google'],
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

  // redirect('/main')

  return {
    error: {},
    success: true,
  }
}
