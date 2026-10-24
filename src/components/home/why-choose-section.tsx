import { BookOpen, Headphones, ShieldCheck } from 'lucide-react'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description:
      'Your safety is our priority with comprehensive travel insurance and 24/7 support.',
  },
  {
    icon: BookOpen,
    title: 'Expert Guides',
    description:
      'Local experts who bring destinations to life with authentic cultural insights.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock customer service to assist you wherever your journey takes you.',
  },
] as const

export function WhyChooseSection() {
  return (
    <section className='bg-[#E8F6FB] px-5 py-16 sm:px-8 sm:py-20 lg:py-24'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-[30px] font-light leading-[1.15] tracking-tight text-neutral-900 sm:text-[38px] lg:text-[42px]'>
            Why Choose Wanderlust
          </h2>
          <p className='mt-2 text-sm text-neutral-500 sm:mt-2.5 sm:text-[15px]'>
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className='mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3'>
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className='bg-white p-7 shadow-[0_2px_10px_rgba(0,0,0,0.05)]'
            >
              <Icon
                className='size-[30px] text-[#15A1BF]'
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className='mt-5 font-serif text-[23px] leading-tight font-normal text-neutral-900'>
                {title}
              </h3>
              <p className='mt-2.5 text-xs leading-[1.8] text-neutral-500'>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
