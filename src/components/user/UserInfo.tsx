'use client'

import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOutIcon, UserIcon, ChevronDown } from 'lucide-react'
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const UserInfo = () => {
  const router = useRouter()
  const { data: session } = authClient.useSession()
  const user = session?.user

  const handleSignOut = async () => {
    const { error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/')
        },
      },
    })

    if (error) {
      toast.error(error.message)
      return
    }

    toast.success('Logged out successfully')
  }

  return (
    <div>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            className='group flex items-center gap-2 rounded-full border border-neutral-200 bg-white p-1 transition-all duration-200 hover:border-[#15A1BF]/40 hover:bg-[#15A1BF]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15A1BF]/30'
            aria-label='Open user menu'
          >
            <Avatar className='size-9 ring-2 ring-white'>
              <AvatarImage
                src={user.image ?? undefined}
                alt={user.name ?? 'User avatar'}
              />

              <AvatarFallback className='bg-[#15A1BF]/10 text-xs font-semibold text-[#1289a2]'>
                {user.name
                  ?.trim()
                  .split(/\s+/)
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase() || 'U'}
              </AvatarFallback>

              <AvatarBadge className='border-2 border-white bg-emerald-500' />
            </Avatar>

            <ChevronDown className='size-3.5 text-neutral-400 transition-transform duration-200' />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align='end'
            sideOffset={10}
            className='w-56 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg shadow-neutral-900/5'
          >
            <div className='flex items-center gap-3 px-2.5 py-3'>
              <Avatar className='size-10'>
                <AvatarImage
                  src={user.image ?? undefined}
                  alt={user.name ?? 'User avatar'}
                />
                <AvatarFallback className='bg-[#15A1BF]/10 text-sm font-semibold text-[#1289a2]'>
                  {user.name
                    ?.trim()
                    .split(/\s+/)
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>

              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-semibold text-neutral-900'>
                  {user.name}
                </p>
                <p className='truncate text-xs text-neutral-500'>
                  {user.email}
                </p>
              </div>
            </div>

            <DropdownMenuSeparator className='my-1 bg-neutral-100' />

            <DropdownMenuItem className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm text-neutral-700 focus:bg-[#15A1BF]/10 focus:text-[#1289a2]'>
              <UserIcon className='size-4' />
              Profile
            </DropdownMenuItem>

            <DropdownMenuSeparator className='my-1 bg-neutral-100' />

            <DropdownMenuItem
              variant='destructive'
              onClick={handleSignOut}
              className='cursor-pointer gap-2.5 rounded-lg px-2.5 py-2 text-sm'
            >
              <LogOutIcon className='size-4' />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className='flex items-center justify-self-end gap-3 text-sm font-medium sm:gap-5'>
          <Link
            href='/login'
            className='text-neutral-700 transition-colors duration-200 hover:text-[#15A1BF]'
          >
            Login
          </Link>

          <Link
            href='/sign-up'
            className='md:inline-flex hidden  h-9 items-center justify-center rounded-md bg-[#15A1BF] px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1290ab] hover:shadow-md active:scale-[0.98]'
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserInfo
