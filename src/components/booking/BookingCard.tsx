'use client'
import Image from 'next/image'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { Booking } from '@/types/BookingType'
import ActionButton from './ActionButton'

interface BookingProps {
  item: Booking
}

const BookingCard = ({ item }: BookingProps) => {
  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <div className=' flex flex-col md:flex-row items-stretch gap-6 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200'>
        {/* Image Container */}
        <div className='relative w-full md:w-72 h-48 md:h-44 rounded-xl overflow-hidden flex-shrink-0'>
          <Image
            src={item.imageUrl}
            alt={item.destinationName}
            fill
            className='object-cover'
          />
        </div>

        {/* Content Container */}
        <div className='flex-1 flex flex-col justify-between py-1'>
          <div>
            {/* Status Badge */}
            <div className='inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium mb-2'>
              <CheckCircle2 className='w-3.5 h-3.5' />
              <span>Confirmed</span>
            </div>

            {/* Title */}
            <h2 className='text-2xl font-serif font-bold text-gray-900 mb-3'>
              {item.destinationName}
            </h2>

            {/* Details */}
            <div className='space-y-1.5 text-sm text-gray-500'>
              <div className='flex items-center gap-2'>
                <Calendar className='w-4 h-4 text-gray-400' />
                <span>Departure: {item.departureDate}</span>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4 text-gray-400' />
                <span>Booking ID: {item._id}</span>
              </div>
            </div>
          </div>

          {/* Price and Action Buttons */}
          <div className='flex items-center justify-between mt-4 pt-2'>
            <div className='text-2xl font-bold text-cyan-600'>
              ${item.price}
            </div>
            <ActionButton item={item} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingCard
