const API_URL = process.env.API_URL
export const verifyEmail = async (token: string) => {
  const response = await fetch(`${API_URL}/auths/verify-email/${token}`)
  return response
}
