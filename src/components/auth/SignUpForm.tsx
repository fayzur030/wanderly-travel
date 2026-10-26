'use client'
import { Lock, Mail, User } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { Spinner } from '../ui/spinner'
type SignUpDataType = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
const fieldClassName =
  'h-10 rounded-md border-transparent bg-[#f7f8fa] pl-10 text-sm text-neutral-900 shadow-none placeholder:text-neutral-400 focus-visible:border-[#15A1BF] focus-visible:bg-white focus-visible:ring-[#15A1BF]/20 md:text-sm'

const labelClassName = 'text-[13px] font-semibold text-neutral-800'

function GoogleIcon() {
  return (
    <svg viewBox='0 0 24 24' className='size-4' aria-hidden='true'>
      <path
        fill='#4285F4'
        d='M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.26-2.09 3.58-5.17 3.58-8.81z'
      />
      <path
        fill='#34A853'
        d='M12 24c3.24 0 5.96-1.08 7.94-2.92l-3.88-3.01c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.28v3.11A12 12 0 0 0 12 24z'
      />
      <path
        fill='#FBBC05'
        d='M5.29 14.27a7.2 7.2 0 0 1 0-4.54V6.62H1.28a12 12 0 0 0 0 10.76l4.01-3.11z'
      />
      <path
        fill='#EA4335'
        d='M12 4.77c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.28 6.62l4.01 3.11C6.23 6.88 8.88 4.77 12 4.77z'
      />
    </svg>
  )
}

const SignUpForm = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries()) as SignUpDataType
    if (userData.password !== userData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      const { error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })

      if (error) {
        toast.error(error.message)
        return
      }
      form.reset()
      toast.success('Account create successfully')
      router.push('/login')
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
    } finally {
      setLoading(false)
    }

    console.log(userData)
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#f7f8fa] px-4 py-12'>
      <span className='h-0.5 w-4 rounded-full bg-[#15A1BF]' />

      <h1 className='mt-7 text-[28px] leading-none font-light tracking-tight text-neutral-900'>
        Create Account
      </h1>
      <p className='mt-2.5 text-[13px] text-neutral-500'>
        Start your adventure with Wanderlust
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-6 w-full max-w-md rounded-lg bg-white p-7 shadow-[0_1px_5px_rgba(15,23,42,0.08)]'
      >
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1.5'>
            <Label className={labelClassName} htmlFor='full-name'>
              Full Name
            </Label>
            <div className='relative'>
              <User
                className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400'
                aria-hidden='true'
              />
              <Input
                name='name'
                id='full-name'
                type='text'
                placeholder='Enter your name'
                className={fieldClassName}
              />
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <Label className={labelClassName} htmlFor='email'>
              Email Address
            </Label>
            <div className='relative'>
              <Mail
                className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400'
                aria-hidden='true'
              />
              <Input
                name='email'
                id='email'
                type='email'
                placeholder='Enter your email'
                className={fieldClassName}
              />
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <Label className={labelClassName} htmlFor='password'>
              Password
            </Label>
            <div className='relative'>
              <Lock
                className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400'
                aria-hidden='true'
              />
              <Input
                name='password'
                id='password'
                type='password'
                placeholder='Create a password'
                className={fieldClassName}
              />
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <Label className={labelClassName} htmlFor='confirm-password'>
              Confirm Password
            </Label>
            <div className='relative'>
              <Lock
                className='pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400'
                aria-hidden='true'
              />
              <Input
                name='confirmPassword'
                id='confirm-password'
                type='password'
                placeholder='Confirm your password'
                className={fieldClassName}
              />
            </div>
          </div>
        </div>

        <button
          type='submit'
          disabled={loading}
          className='mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#15A1BF] text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1290ab] hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-none'
        >
          {loading ? (
            <>
              <Spinner className='size-4' />
              <span>Creating Account...</span>
            </>
          ) : (
            'Create Account'
          )}
        </button>

        <div className='my-4 flex items-center gap-3'>
          <span className='h-px flex-1 bg-neutral-200' />
          <span className='text-xs text-neutral-500'>Or sign up with</span>
          <span className='h-px flex-1 bg-neutral-200' />
        </div>
        <button
          type='button'
          className='flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50'
        >
          <GoogleIcon />
          Sign Up With Google
        </button>
        <p className='mt-5 text-center text-[13px] text-neutral-500'>
          Already have an account?{' '}
          <Link
            href={'/login'}
            className='font-semibold text-[#15A1BF] hover:underline'
          >
            login
          </Link>
        </p>
      </form>

      <span className='mt-8 h-0.5 w-4 rounded-full bg-[#15A1BF]' />
    </div>
  )
}

export default SignUpForm
