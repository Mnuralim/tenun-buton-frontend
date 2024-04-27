'use server'

const API_URL = process.env.API_URL as string

export const loginCredentials = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/auths/login-credentials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  return response
}
