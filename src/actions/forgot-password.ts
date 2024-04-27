'use server'

import { redirect } from 'next/navigation'

const API_URL = process.env.API_URL

interface CreateForgotPasswordState {
  success: boolean
  error?: {
    _form?: string[]
  }
}

export const forgotPassword = async (
  formState: CreateForgotPasswordState,
  formData: FormData
): Promise<CreateForgotPasswordState> => {
  try {
    const response = await fetch(`${API_URL}/auths/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: formData.get('email') }),
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

  redirect('/auth/forgot-password/?success=email-reset-password-sent')

  return {
    success: true,
    error: {},
  }
}
