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
import { LogOutIcon, UserIcon } from 'lucide-react'
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../ui/avatar'

const AUTH_LINKS = [
  { label: 'Login', href: '/login' },
  { label: 'Sign Up', href: '/sign-up' },
] as const

type MenuProps = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UserInfoMobile = ({ setMenuOpen }: MenuProps) => {
  const { data: session } = authClient.useSession()
  const user = session?.user
  return (
    <div>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge className='bg-green-600 dark:bg-green-800' />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <UserIcon />
              Profile
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem variant='destructive'>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className='mt-5 flex flex-col gap-4 border-t border-neutral-200 pt-5 text-[15px] font-medium text-neutral-800'>
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
      )}
    </div>
  )
}

export default UserInfoMobile
