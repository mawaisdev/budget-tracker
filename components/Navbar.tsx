'use client'

import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import ThemeSwitcherButton from './ThemeSwitcherButton'

const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
    </>
  )
}

const items = [
  { label: 'Dashboard', link: '/' },
  { label: 'Transactions', link: '/transactions' },
  { label: 'Manage', link: '/manage' },
]

function DesktopNavbar() {
  return (
    <div className='hidden border-separate border-b bg-background md:block'>
      <nav className='container flex items-center justify-between px-8'>
        <div className='flex h-[80px] min-[60px] items-center gap-x-4'>
          <Logo />
          <div className='flex h-full'>
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <ThemeSwitcherButton />
          <UserButton afterSignOutUrl='/sign-in' />
        </div>
      </nav>
    </div>
  )
}

function NavbarItem({ label, link }: { label: string; link: string }) {
  const pathName = usePathname()
  const isActive = pathName === link

  return (
    <div className='relative flex items-center'>
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'w-full justify-start text-lg text-muted-foreground hover:text-foreground',
          isActive && 'text-foreground'
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className='absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block'></div>
      )}
    </div>
  )
}
export default Navbar
