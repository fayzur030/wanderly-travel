'use client'
import { ArrowRight, CalendarDays } from 'lucide-react'
import React from 'react'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Destinations } from '@/types/allDestinationType'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'

interface DestinationsProps {
  destinations: Destinations
}

const AddBookingCard = ({ destinations }: DestinationsProps) => {
  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const departureDate = formData.get('departureDate')
    const data = {
      user: user,
      ...destinations,
      departureDate,
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!res) {
        throw new Error('Add booking failed')
      }
      toast.success('Booking successful!')
    } catch (error) {
      console.log(error)
      toast.error('Booking failed. Please try again.')
    }
  }

  return (
    <div>
      <form onSubmit={handleBookingSubmit}>
        <div className='flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-3'>
          <CalendarDays className='size-5 shrink-0 text-muted-foreground' />

          <div className='flex min-w-0 flex-1 flex-col gap-1'>
            <Label
              htmlFor='departure-date'
              className='text-xs text-muted-foreground'
            >
              Departure Date
            </Label>

            <input
              id='departure-date'
              name='departureDate'
              type='date'
              defaultValue={destinations.departureDate}
              required
              className='w-full bg-transparent text-sm font-medium text-foreground outline-none'
            />
          </div>
        </div>

        {/* Book Now Button */}
        <Button
          type='submit'
          className='mt-6 w-full cursor-pointer gap-2 rounded-none bg-cyan-600 py-6 text-base font-medium text-white shadow-md transition-all hover:bg-cyan-700'
        >
          Book Now
          <ArrowRight className='size-4' />
        </Button>
      </form>
    </div>
  )
}

export default AddBookingCard
