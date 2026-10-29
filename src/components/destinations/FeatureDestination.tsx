import { Destinations } from '@/types/allDestinationType'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ArrowRight, ArrowUpRight, Calendar, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

const getFeatureDestination = async (): Promise<Destinations[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feature-destination`)
    if (!res.ok) {
      throw new Error('fetch to failed feature destination')
    }
    const data = await res.json()
    return data.data
  } catch (error) {
    console.log(error)
  }
  return []
}

const FeatureDestination = async () => {
  const featuredDestinations = await getFeatureDestination()

  return (
    <section className='mx-auto mt-6 max-w-7xl px-4 py-24 md:px-0'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-4xl md:text-5xl font-medium'>
            Featured Destinations
          </h1>
          <p className='text-sm md:text-base text-gray-500'>
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <Link href={'/destinations'}>
          <Button
            variant={'outline'}
            className='inline-flex h-12 cursor-pointer items-center justify-center gap-3  px-7 text-xs font-semibold uppercase tracking-[0.15em]  transition-colors border-[#12869E] border text-[#12869E] rounded-none'
          >
            See All Destination
            <ArrowRight className='size-4' strokeWidth={2} aria-hidden />
          </Button>
        </Link>
      </div>
      <Carousel
        opts={{ align: 'start' }}
        aria-label='Featured destinations'
        className='mt-10 px-4'
      >
        <CarouselContent>
          {featuredDestinations.map((destination) => (
            <CarouselItem
              key={destination._id}
              className='basis-full sm:basis-1/2 lg:basis-1/3'
            >
              <Card className='h-full border-border/50 bg-card shadow-sm transition-shadow duration-300 hover:shadow-md'>
                <div className='relative aspect-[4/3] w-full overflow-hidden bg-muted'>
                  {destination.imageUrl && (
                    <Image
                      src={destination.imageUrl}
                      alt={destination.destinationName}
                      fill
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      className='object-cover transition-transform duration-300 group-hover/card:scale-105'
                    />
                  )}
                </div>

                <CardHeader className='gap-3 px-5 pt-5'>
                  <div className='flex items-center gap-1.5 text-sm text-muted-foreground'>
                    <MapPin className='size-4 shrink-0' aria-hidden />
                    <span>{destination.country}</span>
                  </div>
                  <div className='flex items-baseline justify-between gap-3'>
                    <h2 className='line-clamp-1 text-xl font-medium tracking-tight text-foreground'>
                      {destination.destinationName}
                    </h2>
                    <p className='shrink-0 text-right'>
                      <span className='text-xl font-light text-foreground'>
                        ${destination.price}
                      </span>
                      <span className='ml-1 text-xs text-muted-foreground'>
                        / person
                      </span>
                    </p>
                  </div>
                </CardHeader>

                <CardContent className='px-5'>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Calendar className='size-4 shrink-0' aria-hidden />
                    <span>{destination.duration}</span>
                  </div>
                </CardContent>

                <CardFooter className='border-t-0 bg-transparent px-5 pt-0 pb-5'>
                  <Link
                    href={`/destinations/${destination._id}`}
                    className='group inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-[#12869E] hover:text-[#0f6f82]'
                  >
                    <span>Explore destination</span>
                    <ArrowUpRight
                      className='size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      aria-hidden
                    />
                  </Link>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {featuredDestinations.length > 1 && (
          <>
            <CarouselPrevious className='left-1 z-10 bg-background/90 shadow-md sm:-left-3' />
            <CarouselNext className='right-1 z-10 bg-background/90 shadow-md sm:-right-3' />
          </>
        )}
      </Carousel>
    </section>
  )
}

export default FeatureDestination
