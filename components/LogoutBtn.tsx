import { LogOut } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

const LogoutBtn = () => {
  return (
    <Link
      className={`${buttonVariants({
        variant: 'default',
      })} h-7 text-[18px] `}
      href={'/api/auth/signout'}
      aria-label='Login'
    >
      LogOut <LogOut />
    </Link>
  )
}

export default LogoutBtn
