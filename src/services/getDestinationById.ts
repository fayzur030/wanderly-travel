import { getTokenFromServer } from '@/lib/getTokenFromServer'
import { Destinations } from '@/types/allDestinationType'
export const getDestinationById = async (id: string): Promise<Destinations> => {
  const jwtToken = await getTokenFromServer()

  try {
    const res = await fetch(`http://localhost:5000/destination/${id}`, {
      headers: {
        authorization: `Bearer ${jwtToken.token}`,
      },
    })
    if (!res.ok) {
      throw new Error('Failed to fetch destination data')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching destination by ID:', error)
    throw error
  }
}
