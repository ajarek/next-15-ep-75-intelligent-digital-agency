import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start p-16 gap-4 '>
      <h1 className='text-4xl font-bold'>Transform Your Business with Intelligent Solutions</h1>
      <p className='text-xl'>Empower Your Business with Innovation</p>
      <p className='text-lg'>
      We deliver AI-powered strategies and digital solutions tailored to your needs.
      </p>
      <p className='text-lg'>
        Get Started Today <Button>Click</Button>
      </p>
    </div>
  )
}
