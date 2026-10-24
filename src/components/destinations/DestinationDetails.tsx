import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Destinations } from '@/types/allDestinationType'

// Lucide Icons
import {
  ArrowLeft,
  Edit,
  Trash2,
  MapPin,
  Calendar,
  Clock,
  Tag,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Headphones,
  CalendarDays,
} from 'lucide-react'

// Shadcn UI Components
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import EditDestination from './EditDestinationModal'
import EditDestinationModal from './EditDestinationModal'

interface DestinationDetailsProps {
  destination: Destinations | Destinations[]
}

const DestinationDetails = ({ destination }: DestinationDetailsProps) => {
  const item = Array.isArray(destination) ? destination[0] : destination

  if (!item) {
    return (
      <div className='p-8 text-center text-muted-foreground'>
        No destination details found.
      </div>
    )
  }

  const {
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = item

  return (
    <div className='max-w-6xl mx-auto px-4 py-6 font-sans'>
      {/* Top Header Controls */}
      <div className='flex flex-col lg:flex-row items-start gap-4 lg:items-center  justify-between mb-6'>
        <Link href='/destinations'>
          <Button
            variant='ghost'
            className='gap-2 text-muted-foreground cursor-pointer hover:text-foreground'
          >
            <ArrowLeft className='w-4 h-4' />
            Back to Destinations
          </Button>
        </Link>
        <div className='flex items-center gap-3'>
          {/* <Button variant='outline' size='sm' className='gap-2'>
            <Edit className='w-4 h-4' />
            Edit
          </Button> */}
          <EditDestinationModal destination={item} />
          <Button
            variant='outline'
            size='sm'
            className='gap-2 text-destructive border-destructive/30 hover:bg-destructive/10'
          >
            <Trash2 className='w-4 h-4' />
            Cancel
          </Button>
        </div>
      </div>

      {/* Main Image Banner (Dynamic) */}
      <div className='relative w-full h-[380px] sm:h-[450px]  overflow-hidden mb-8 shadow-md'>
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* Content Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Left Column: Details & Information */}
        <div className='lg:col-span-2 space-y-6'>
          {/* Location & Title (Dynamic) */}
          <div>
            <div className='flex items-center gap-2 text-muted-foreground text-sm mb-2'>
              <MapPin className='w-4 h-4 text-emerald-600' />
              <span>{country}</span>
              {category && (
                <>
                  <span>•</span>
                  <Badge variant='secondary' className='font-normal text-xs'>
                    <Tag className='w-3 h-3 mr-1' />
                    {category}
                  </Badge>
                </>
              )}
            </div>
            <h1 className='text-3xl sm:text-4xl font-light tracking-tight text-foreground'>
              {destinationName}
            </h1>

            {/* Meta Info (Duration & Departure - Dynamic) */}
            <div className='flex flex-wrap items-center gap-6 mt-4 text-sm font-medium text-muted-foreground'>
              <div className='flex items-center gap-2'>
                <Clock className='w-4 h-4 text-emerald-600' />
                <span>{duration}</span>
              </div>
              {departureDate && (
                <div className='flex items-center gap-2'>
                  <Calendar className='w-4 h-4 text-emerald-600' />
                  <span>Departure: {departureDate}</span>
                </div>
              )}
            </div>
          </div>

          <hr className='border-border' />

          {/* Overview (Dynamic) */}
          <div className='space-y-3'>
            <h2 className='text-2xl font-semibold'>Overview</h2>
            <p className='text-muted-foreground leading-relaxed'>
              {description}
            </p>
          </div>
          <div className='space-y-4 pt-2'>
            <h2 className='text-2xl font-semibold'>Highlights</h2>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 mt-0.5 shrink-0' />
                <span>
                  Explore {country}&apos;s beautiful beaches and landscapes
                </span>
              </li>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 mt-0.5 shrink-0' />
                <span>Visit ancient temples & vibrant local culture</span>
              </li>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 mt-0.5 shrink-0' />
                <span>Experience top-rated local accommodations</span>
              </li>
              <li className='flex items-start gap-2 text-sm text-muted-foreground'>
                <CheckCircle2 className='w-4 h-4 text-emerald-600 mt-0.5 shrink-0' />
                <span>Guided tours with professional experts</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Pricing & Booking Card */}
        <div className='lg:col-span-1'>
          <Card className='sticky top-6 shadow-lg border-border/60'>
            <CardContent className='p-6 space-y-6'>
              {/* Price (Dynamic) */}
              <div>
                <span className='text-xs text-muted-foreground  uppercase tracking-wider font-semibold'>
                  Starting from
                </span>
                <div className='flex items-baseline gap-1 mt-1'>
                  <span className='text-4xl font-extrabold text-cyan-600'>
                    ${price}
                  </span>
                  <span className='text-sm text-muted-foreground'>
                    / per person
                  </span>
                </div>
              </div>

              {/* Date Box (Dynamic) */}
              <div className='flex items-center gap-3 p-3 bg-muted/50 rounded-lg border border-border'>
                <CalendarDays className='w-5 h-5 text-muted-foreground' />
                <div className='flex flex-col'>
                  <span className='text-xs text-muted-foreground'>
                    Departure Date
                  </span>
                  <span className='text-sm font-medium'>{departureDate}</span>
                </div>
              </div>

              {/* Book Now Button */}
              <Button className='w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-6 text-base gap-2 cursor-pointer rounded-none shadow-md transition-all'>
                Book Now
                <ArrowRight className='w-4 h-4' />
              </Button>

              {/* Trust Badges / Features */}
              <div className='space-y-3 pt-2 text-xs text-muted-foreground'>
                <div className='flex items-center gap-2'>
                  <CheckCircle2 className='w-4 h-4 text-emerald-600' />
                  <span>Free cancellation up to 7 days before departure</span>
                </div>
                <div className='flex items-center gap-2'>
                  <ShieldCheck className='w-4 h-4 text-emerald-600' />
                  <span>Travel insurance included</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Headphones className='w-4 h-4 text-emerald-600' />
                  <span>24/7 customer support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DestinationDetails
