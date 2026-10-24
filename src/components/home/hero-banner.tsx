import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import banner from '@/assets/Banner.png'

const SEARCH_FIELDS = [
  { label: 'Location', value: 'Address, City Or Zip' },
  { label: 'Date/Duration', value: 'Anytime/3 Days' },
  { label: 'Budget', value: '$0-$3000' },
  { label: 'People', value: '5-10' },
] as const

export function HeroBanner() {
  return (
    <section className='relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-neutral-900'>
      <Image
        src={banner}
        alt=''
        fill
        preload
        sizes='100vw'
        aria-hidden
        className='-z-10 object-cover object-center'
      />
      <div aria-hidden className='absolute inset-0 -z-10 bg-black/35' />

      <div className='flex flex-1 flex-col items-center justify-center px-4 py-16 text-center'>
        <h1 className='font-light text-[34px] leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-[76px]'>
          Discover Your
          <br />
          Next Adventure
        </h1>

        <p className='mt-7 max-w-[600px] text-[15px] leading-relaxed text-white/85 sm:text-base'>
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className='mt-9 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row'>
          <button
            type='button'
            className='inline-flex h-12 cursor-pointer items-center justify-center gap-3 bg-[#15A1BF] px-7 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#12869E]'
          >
            Explore Now
            <ArrowRight className='size-4' strokeWidth={2} aria-hidden />
          </button>

          <button
            type='button'
            className='inline-flex h-12 cursor-pointer items-center justify-center border border-white/25 bg-white/15 px-7 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors hover:bg-white/25'
          >
            View Destination
          </button>
        </div>
      </div>

      <div
        role='search'
        className='border-t border-white/10 bg-black/35 backdrop-blur-sm'
      >
        <div className='grid grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]'>
          {SEARCH_FIELDS.map((field) => (
            <div
              key={field.label}
              className='border-b border-white/15 px-6 py-4 text-left odd:border-r lg:border-r lg:border-b-0 lg:px-8'
            >
              <p className='text-[15px] font-medium text-white'>{field.label}</p>
              <p className='mt-1 text-xs text-white/65'>{field.value}</p>
            </div>
          ))}

          <button
            type='button'
            className='col-span-2 flex cursor-pointer items-center justify-center bg-[#15A1BF] px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-[#12869E] lg:col-span-1'
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
