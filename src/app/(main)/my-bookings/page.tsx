import BookingCard from '@/components/booking/BookingCard'
import { auth } from '@/lib/auth'
import { Booking } from '@/types/BookingType'
import { headers } from 'next/headers'

const session = await auth.api.getSession({
  headers: await headers(),
})
const user = session?.user

const getBookingData = async (): Promise<Booking[]> => {
  const res = await fetch(`http://localhost:5000/my-bookings/${user?.email}`)
  if (!res.ok) {
    throw new Error('Failed to booking data')
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
