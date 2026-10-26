'use client'
import { authClient } from '@/lib/auth-client'
import { Mail, Lock } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { Spinner } from '../ui/spinner'
type LoginDataType = {
  email: string
  password: string
}
export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries()) as LoginDataType

    setLoading(true)
    try {
      const { error } = await authClient.signIn.email({
        email: userData.email,
        password: userData.password,
      })

      if (error) {
        toast.error(error.message)
        return
      }
      form.reset()
      toast.success('Login successfully')
      router.push('/')
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen w-full bg-[#f8fafc] flex flex-col items-center justify-center p-4 text-slate-800 font-sans'>
      {/* Top Accent Pill */}
      <div className='w-8 h-0.75 bg-[#1ab0ca] rounded-full mb-6' />

      {/* Header Section */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-extrabold text-slate-900 tracking-tight mb-2'>
          Welcome Back
        </h1>
        <p className='text-slate-500 text-sm font-medium'>
          Resume your adventure with Wanderlust
        </p>
      </div>

      {/* Main Card Container */}
      <div className='w-full max-w-md bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-10'>
        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Email Field */}
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-900 block'>
              Email Address
            </label>
            <div className='relative'>
              <Mail className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                className='w-full bg-[#f8fafc] border border-slate-200/80 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1ab0ca]/30 focus:border-[#1ab0ca] transition-all'
              />
            </div>
          </div>

          {/* Password Field */}
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-900 block'>
              Password
            </label>
            <div className='relative'>
              <Lock className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Enter your password'
                className='w-full bg-[#f8fafc] border border-slate-200/80 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1ab0ca]/30 focus:border-[#1ab0ca] transition-all'
              />
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          <div className='flex items-center justify-between pt-1'>
            <label className='flex items-center gap-2 cursor-pointer select-none'>
              <input
                type='checkbox'
                className='w-4 h-4 rounded border-slate-300 text-[#1ab0ca] focus:ring-[#1ab0ca] accent-[#1ab0ca]'
              />
              <span className='text-xs font-medium text-slate-500'>
                Remember me
              </span>
            </label>
            <Link
              href='/forgot-password'
              className='text-xs font-medium text-[#1ab0ca] hover:underline'
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            type='submit'
            disabled={loading}
            className='mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#15A1BF] text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1290ab] hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:shadow-none'
          >
            {loading ? (
              <>
                <Spinner className='size-4' />
                <span>Login...</span>
              </>
            ) : (
              'Login'
            )}
          </button>

          {/* Divider */}
          <div className='relative my-6 flex items-center justify-center'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-slate-200' />
            </div>
            <span className='relative bg-white px-3 text-xs text-slate-500 font-medium'>
              Or continue with
            </span>
          </div>

          {/* Google Sign In Button */}
          <button
            type='button'
            className='w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2.5 text-sm transition-colors shadow-sm'
          >
            <svg className='w-4 h-4' viewBox='0 0 24 24'>
              <path
                fill='#4285F4'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='#34A853'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='#FBBC05'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z'
              />
              <path
                fill='#EA4335'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z'
              />
            </svg>
            Sign Up With Google
          </button>
        </form>

        {/* Footer Link */}
        <div className='mt-6 text-center text-xs text-slate-500 font-medium'>
          Don&apos;t have an account?{' '}
          <Link
            href='/sign-up'
            className='text-[#1ab0ca] font-bold hover:underline'
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Bottom Accent Pill */}
      <div className='w-8 h-0.75 bg-[#1ab0ca] rounded-full mt-10' />
    </div>
  )
}
