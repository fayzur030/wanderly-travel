'use client'

import { Menu, UserRound, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import brand from '@/assets/Wanderlast.png'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'My Bookings', href: '/my-bookings' },
  { label: 'Admin', href: '/admin' },
] as const

const AUTH_LINKS = [
  { label: 'Login', href: '/login' },
  { label: 'Sign Up', href: '/signup' },
] as const

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  return (
    <header className='relative z-50 bg-white'>
      <div className='mx-auto grid h-16 container grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:h-16 lg:px-10'>
        <nav
          aria-label='Main'
          className='hidden items-center gap-7 text-sm font-medium text-neutral-800 lg:flex'
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={
                isActive(link.href)
                  ? 'border-b-2 border-[#15A1BF] pb-1 text-[#15A1BF]'
                  : 'border-b-2 border-transparent pb-1 transition-colors hover:text-[#15A1BF]'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type='button'
          className='-ml-2 inline-flex size-10 items-center justify-center justify-self-start text-neutral-800 transition-colors hover:text-[#15A1BF] lg:hidden'
          aria-expanded={menuOpen}
          aria-controls='mobile-menu'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className='size-6' /> : <Menu className='size-6' />}
        </button>

        <Link
          href='/'
          aria-label='Wanderlast home'
          className='justify-self-center'
          onClick={() => setMenuOpen(false)}
        >
          <Image src={brand} alt='Wanderlast' className='h-6 w-auto' />
        </Link>

        <div className='hidden items-center justify-self-end gap-7 text-sm font-medium text-neutral-800 lg:flex'>
          <Link
            href='/profile'
            className='flex items-center gap-2 transition-colors hover:text-[#15A1BF]'
          >
            <UserRound className='size-4' strokeWidth={1.6} />
            Profile
          </Link>

          {AUTH_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='transition-colors hover:text-[#15A1BF]'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          id='mobile-menu'
          className='border-t border-neutral-200 bg-white px-5 pb-6 pt-3 sm:px-8 lg:hidden'
        >
          <nav
            aria-label='Mobile'
            className='flex flex-col gap-4 text-[15px] font-medium text-neutral-800'
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? 'text-[#15A1BF]'
                    : 'transition-colors hover:text-[#15A1BF]'
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='mt-5 flex flex-col gap-4 border-t border-neutral-200 pt-5 text-[15px] font-medium text-neutral-800'>
            <Link
              href='/profile'
              onClick={() => setMenuOpen(false)}
              className='flex items-center gap-2 transition-colors hover:text-[#15A1BF]'
            >
              <UserRound className='size-4' strokeWidth={1.6} />
              Profile
            </Link>

            {AUTH_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className='transition-colors hover:text-[#15A1BF]'
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
