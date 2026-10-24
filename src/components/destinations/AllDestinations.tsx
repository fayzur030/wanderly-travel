import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Destinations } from '@/types/allDestinationType'
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface destinationsProps {
  destinations: Destinations[]
}

const AllDestinations = ({ destinations }: destinationsProps) => {
  return (
    <div className='max-w-7xl mx-auto py-10'>
      <div className='mb-11 space-y-2'>
        <h1 className='text-xl md:text-4xl font-light'>
          Explore All Destination
        </h1>
        <p className=' max-w-150 text-[15px] leading-relaxed text-gray-600 sm:text-base'>
          Find your perfect travel experience from our curated collection
        </p>
      </div>
      <div className=' grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {destinations.map((item) => (
          <Card
            key={item._id}
            className='overflow-hidden rounded-xl hover:shadow border border-border/50 bg-card shadow-sm transition-all duration-300 hover:shadow-md'
          >
            {/* Card Image Container */}
            <div className='relative aspect-video w-full overflow-hidden'>
              <Image
                src={item.imageUrl || '/placeholder.jpg'}
                alt={item.destinationName || 'Destination Image'}
                fill
                className='transition-transform duration-300 hover:scale-105 aspect-video'
              />
            </div>

            <CardHeader className='p-5 pb-2'>
              {/* Country / Location */}
              <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                <MapPin className='h-4 w-4 shrink-0 text-muted-foreground' />
                <span>{item.country}</span>
              </div>

              {/* Title & Price */}
              <div className='mt-2 flex items-baseline justify-between gap-2'>
                <h3 className='text-xl font-bold tracking-tight text-foreground line-clamp-1'>
                  {item.destinationName}
                </h3>
                <div className='text-right shrink-0'>
                  <span className='text-xl font-bold text-foreground'>
                    ${item.price}
                  </span>
                  <span className='text-xs text-muted-foreground'>/Person</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className='px-5 py-2'>
              {/* Duration */}
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Calendar className='h-4 w-4 shrink-0 text-muted-foreground' />
                <span>{item.duration}</span>
              </div>
            </CardContent>

            <CardFooter className='p-5 pt-3'>
              {/* Book Now Link */}
              <Link
                href={`/destinations/${item._id}`}
                className='group inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300'
              >
                <span className='underline underline-offset-4 decoration-2 decoration-sky-500/40 group-hover:decoration-sky-500'>
                  Book Now
                </span>
                <ArrowUpRight className='h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AllDestinations
