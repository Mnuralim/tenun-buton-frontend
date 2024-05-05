const API_URL = process.env.API_URL
export const getUserById = async (id: string, accessToken: string) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const responseParse = await response.json()
    if (!response.ok) {
      throw new Error(responseParse.message)
    }
    const data: IUser = responseParse.data || null
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Internal server error')
    }
  }
}
