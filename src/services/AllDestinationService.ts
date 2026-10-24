import { Destinations } from '@/types/allDestinationType'

export const allDestinationService = async (): Promise<Destinations[]> => {
  try {
    const res = await fetch(`http://localhost:5000/destinations`)
    if (!res.ok) {
      throw new Error('Failed to fetch destinations')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error('Error fetching all destinations:', error)
    throw error
  }
}
