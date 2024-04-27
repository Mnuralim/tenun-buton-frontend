const API_URL = process.env.API_URL
export const getAllCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      cache: 'reload',
    })
    const responseParse = await response.json()
    if (!response.ok) {
      throw new Error(responseParse.message)
    }
    const data: ICategory[] = responseParse.data || []
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Internal server error')
    }
  }
}
