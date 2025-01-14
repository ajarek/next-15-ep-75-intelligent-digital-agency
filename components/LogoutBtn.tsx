import { LogOut } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const LogoutBtn = () => {
  return (
    <Link
      className={`${buttonVariants({
        variant: 'default',
      })} h-7 text-[18px] `}
      href={'/signout'}
      aria-label='signout'
    >
      LogOut <LogOut />
    </Link>
  )
}

export default LogoutBtn
