import { Destinations } from '@/types/allDestinationType'

export const getDestinationById = async (
  id: string
): Promise<Destinations[]> => {
  try {
    const res = await fetch(`http://localhost:5000/destination/${id}`)
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
