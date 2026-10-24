'use client'

import Image, { type StaticImageData } from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import michaelPhoto from '@/assets/person2.png'
import sarahPhoto from '@/assets/person1.png'

type Testimonial = {
  quote: string
  name: string
  location: string
  image: StaticImageData
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.',
    name: 'Michael Chen',
    location: 'Singapore',
    image: michaelPhoto,
  },
  {
    quote:
      'Swiss Alps Adventure Exceeded All My Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: sarahPhoto,
  },
]

function Controls() {
  const { scrollPrev, scrollNext } = useCarousel()

  return (
    <div className='flex shrink-0 items-center gap-3.5 pt-1.5'>
      <Button
        type='button'
        aria-label='Previous testimonials'
        variant='outline'
        size='icon-sm'
        onClick={scrollPrev}
        className='size-[42px] rounded-full border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-700'
      >
        <ArrowLeft className='size-4' />
      </Button>
      <Button
        type='button'
        aria-label='Next testimonials'
        variant='outline'
        size='icon-sm'
        onClick={scrollNext}
        className='size-[42px] rounded-full border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:border-neutral-400 hover:bg-neutral-50 hover:text-neutral-700'
      >
        <ArrowRight className='size-4' />
      </Button>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24'>
      <div className='mx-auto w-full max-w-[972px]'>
        <Carousel opts={{ align: 'start', containScroll: 'trimSnaps' }}>
          <div className='flex items-start justify-between gap-6'>
            <div>
              <h2 className='font-serif text-[32px] leading-[1.12] text-neutral-900 sm:text-[40px] lg:text-[46px]'>
                What Travelers Say
              </h2>
              <p className='mt-2 text-[13px] text-neutral-500 sm:text-[15px]'>
                Real experiences from our happy travelers
              </p>
            </div>

            <Controls />
          </div>

          <CarouselContent className='-ml-6 mt-8'>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem key={testimonial.name} className='pl-6 md:basis-1/2'>
                <article className='flex h-full gap-6 border-t border-neutral-200 pt-1.5 pl-6'>
                  <div className='flex flex-1 flex-col py-3'>
                    <blockquote className='text-[17px] font-semibold leading-[1.15] tracking-tight text-neutral-900'>
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    <footer className='mt-auto pt-10'>
                      <p className='text-[15px] font-medium text-[#15A1BF]'>
                        &mdash; {testimonial.name}
                      </p>
                      <p className='mt-1 text-xs text-neutral-500'>
                        {testimonial.location}
                      </p>
                    </footer>
                  </div>

                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='h-[165px] w-[150px] shrink-0 object-cover'
                  />
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
