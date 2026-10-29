import BookingCard from '@/components/booking/BookingCard'
import { auth } from '@/lib/auth'
import { getTokenFromServer } from '@/lib/getTokenFromServer'
import { Booking } from '@/types/BookingType'
import { headers } from 'next/headers'

const session = await auth.api.getSession({
  headers: await headers(),
})
const user = session?.user

const getBookingData = async (): Promise<Booking[]> => {
  const jwtToken = await getTokenFromServer()

  if (!user?.email) {
    throw new Error('User email not found')
  }

  const res = await fetch(
    `http://localhost:5000/my-bookings/${encodeURIComponent(user.email)}`,
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

const BookingsPage = async () => {
  const booking = await getBookingData()

  return (
    <div>
      {booking.length === 0
        ? 'No booking item'
        : booking.map((booking) => (
            <BookingCard key={booking._id} item={booking} />
          ))}
    </div>
  )
}

export default BookingsPage
