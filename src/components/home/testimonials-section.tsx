'use client'

import Image, { type StaticImageData } from 'next/image'
import person1 from '@/assets/person1.png'
import person2 from '@/assets/person2.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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
    image: person2,
  },
  {
    quote:
      'Swiss Alps Adventure Exceeded All My Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    image: person1,
  },
]

const ARROW_CLASS =
  'static left-auto inset-auto my-0 size-[42px] shrink-0 rounded-full border-neutral-300 bg-transparent text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-700 disabled:opacity-50'

export function TestimonialsSection() {
  return (
    <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24'>
      <div className='mx-auto w-full max-w-[972px]'>
        <Carousel opts={{ align: 'start', containScroll: 'trimSnaps' }}>
          <div className='flex items-start justify-between gap-6'>
            <div>
              <h2 className='font-serif text-[30px] leading-[1.12] text-neutral-900 sm:text-[34px] lg:text-[38px]'>
                What Travelers Say
              </h2>
              <p className='mt-2 text-[13px] text-neutral-500'>
                Real experiences from our happy travelers
              </p>
            </div>

            <div className='flex shrink-0 items-center gap-3.5 pt-1.5'>
              <CarouselPrevious className={ARROW_CLASS} />
              <CarouselNext className={ARROW_CLASS} />
            </div>
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
