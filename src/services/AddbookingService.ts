import { PackageForm } from '@/types/addDestinationTypes'

export const addDestination = async (payload: PackageForm) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/add-destination`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    if (!res.ok) throw new Error('Add destination failed')
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}
