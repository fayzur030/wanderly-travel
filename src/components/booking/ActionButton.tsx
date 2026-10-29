'use client'
import { getTokenFromClient } from '@/lib/getTokenFromClient'
import { Booking } from '@/types/BookingType'
import { Eye, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
interface BookingProps {
  item: Booking
}
const ActionButton = ({ item }: BookingProps) => {
  const router = useRouter()
  const handleDeleteBooking = async (id: string) => {
    const jwtToken = await getTokenFromClient()
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/delete-booking/${id}`,
        {
          cache: 'no-store',
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      if (!res.ok) {
        console.log('Failed to delete booking')
      }
      toast.success(`Booking ${item.destinationName} delete successfully`)
      router.refresh()
    } catch (error) {
      console.error('Error deleting booking:', error)
    }
  }

  return (
    <div>
      <div className='flex items-center gap-3'>
        <button
          onClick={() => handleDeleteBooking(item._id)}
          className='inline-flex items-center gap-1.5 cursor-pointer  px-4 py-2 border border-red-200 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors'
        >
          <Trash2 className='w-4 h-4' />
          <span>Cancel</span>
        </button>

        <Link href={`/destinations/${item._id}`}>
          <button className='inline-flex cursor-pointer items-center gap-1.5 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors'>
            <Eye className='w-4 h-4' />
            <span>View</span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ActionButton
