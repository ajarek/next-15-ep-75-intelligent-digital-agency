
import { ArrowUpRight, Sparkles, TrendingUp } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='relative min-h-[calc(100vh-(32px*2+48px))] flex flex-col items-center justify-start bg-[url("/images/hero.webp")] bg-cover bg-no-repeat bg-[bottom_center] p-4 gap-4 '>
      <h1 className='text-4xl font-bold'>Transform Your Business with Intelligent Solutions</h1>
     
      
      <div className='w-3/4 flex items-center justify-end'>
        <Link href='/contact' className={`${buttonVariants({
            variant: 'default',
          })}  shadow-xl  text-xl flex items-center gap-2 `}
          aria-label='Get Started'> Get Started Today <TrendingUp size={32} /></Link>

      </div>
      <div className='absolute bottom-0 left-0 w-[250px] h-[150px] flex flex-col items-end bg-black text-white p-4'>
        <p className='text-3xl pr-4'>54 </p>
        <p>Daily<br />New <br />Clients</p>
      </div>
      <div className='absolute bottom-[144px] left-[244px] w-[40px] h-[40px] flex items-center justify-center  bg-black rounded-lg '>
      <ArrowUpRight  color='white' />
      </div>
      <div className='absolute bottom-[75px] left-[40px] w-[100px] h-[130px] flex flex-col items-start bg-primary  p-4 rounded-lg'>
        <Image src='/images/overlapping.png' alt='overlapping users' width={100} height={36} className='rounded-full' />
        <p className='text-sm'>Total Clients</p>
        <p className='text-2xl'>5400+ </p>
      </div>
      <div className='absolute bottom-[190px] left-[130px] w-[50px] h-[50px] flex items-center justify-center  bg-primary rounded-full '>
      <Sparkles size={32} />
      </div>
      <div className='absolute bottom-0 left-[250px] w-[140px] h-[100px] flex flex-col items-center justify-center bg-primary  p-4 rounded-tr-lg'>
      <p className='text-2xl'>2.5K </p>
            <p className='text-xs'>263 Contributions</p>
            <p className='text-xs'>in the las Year</p>
      </div>
    </div>
  )
}
