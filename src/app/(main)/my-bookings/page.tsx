import BookingCard from '@/components/booking/BookingCard'
import { auth } from '@/lib/auth'
import { getTokenFromServer } from '@/lib/getTokenFromServer'
import { Booking } from '@/types/BookingType'
import { headers } from 'next/headers'

const BookingsPage = async () => {
  // Get current user session
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const user = session?.user

  // Check whether user is authenticated
  if (!user?.email) {
    throw new Error('User email not found')
  }

  // Fetch booking data
  const getBookingData = async (): Promise<Booking[]> => {
    const jwtToken = await getTokenFromServer()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/my-bookings/${encodeURIComponent(user.email)}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch booking data')
    }

    const data = await res.json()

    return data.data
  }

  const booking = await getBookingData()

  return (
    <div>
      {booking.length === 0 ? (
        <p>No booking item</p>
      ) : (
        booking.map((item) => <BookingCard key={item._id} item={item} />)
      )}{' '}
    </div>
  )
}

export default BookingsPage
