import { PackageForm } from '@/types/addDestinationTypes'

export const updateDestination = async (id: string, payload: PackageForm) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/update-destination/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) throw new Error('update destination failed')
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}
