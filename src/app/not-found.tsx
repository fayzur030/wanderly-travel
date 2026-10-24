import Link from 'next/link'
import { ArrowLeft, ArrowRight, Compass, MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#F8FAFC] px-6 py-16'>
      <div className='w-full max-w-xl text-center'>
        <div className='relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-orange-100'>
          <Compass size={58} strokeWidth={1.4} className='text-orange-500' />
          <span className='absolute -right-1 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#102A43] text-white shadow-lg'>
            <MapPin size={20} />
          </span>
        </div>

        <p className='mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-500'>
          Lost your way?
        </p>

        <h1 className='text-7xl font-extrabold tracking-tight text-[#102A43] sm:text-8xl'>
          404
        </h1>

        <h2 className='mt-5 text-2xl font-bold text-[#102A43] sm:text-3xl'>
          Oops! Destination Not Found
        </h2>

        <p className='mx-auto mt-4 max-w-md text-base leading-7 text-slate-500'>
          Looks like this page is off the map. Let’s get you back on track and
          discover somewhere amazing.
        </p>

        <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Link
            href='/'
            className='group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#124E4A] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#176B67] hover:shadow-lg hover:shadow-[#124E4A]/20 sm:w-auto'
          >
            {' '}
            <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />{' '}
            Back to Home{' '}
          </Link>

          <Link
            href='/destinations'
            className='group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#124E4A]/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#124E4A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#124E4A] hover:bg-white sm:w-auto'
          >
            {' '}
            Explore Destinations{' '}
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />{' '}
          </Link>
        </div>

        <p className='mt-12 text-sm text-slate-400'>
          Every great journey starts somewhere.{' '}
          <span className='font-medium text-[#102A43]'>Wanderly</span>
        </p>
      </div>
    </main>
  )
}
