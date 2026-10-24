export const deleteDestination = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:5000/delete-destination/${id}`, {
      method: 'DELETE',
    })

    if (!res.ok) throw new Error('update destination failed')
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}
