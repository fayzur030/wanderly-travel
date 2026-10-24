import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import cta from '@/assets/CTA.png'

export function CtaSection() {
  return (
    <section className='relative isolate overflow-hidden bg-neutral-900'>
      <Image
        src={cta}
        alt=''
        fill
        sizes='100vw'
        aria-hidden
        className='-z-10 object-cover object-center'
      />
      <div aria-hidden className='absolute inset-0 -z-10 bg-black/45' />

      <div className='mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28'>
        <h2 className='font-serif text-[36px] leading-[1.1] font-light tracking-tight text-white sm:text-5xl lg:text-[56px]'>
          Ready To Start Your Journey?
        </h2>

        <p className='mt-4 max-w-[560px] text-sm leading-relaxed text-white/85 sm:text-base'>
          Join thousands of travelers who have discovered the world with us
        </p>

        <button
          type='button'
          className='mt-8 inline-flex h-12 cursor-pointer items-center justify-center gap-6 bg-white px-8 text-xs font-semibold tracking-[0.15em] text-neutral-900 uppercase transition-colors hover:bg-neutral-100 sm:mt-9'
        >
          Book Your Trip Today
          <ArrowRight className='size-4' strokeWidth={2} aria-hidden />
        </button>
      </div>
    </section>
  )
}
