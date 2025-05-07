import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
<footer className="w-full bg-transparent text-[#B8B8B8] text-sm font-light montserrat py-6 px-4 sm:px-8 md:px-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between gap-6">
        
        {/* Logo + Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center md:text-left gap-4 sm:gap-6">
          <Link href="/" className='hidden sm:block'>
            <Image
              src="/Ascella-logo.svg"
              alt="Ascella logo"
              width={48}
              height={48}
            />
          </Link>
          <p className="leading-tight">
            © {new Date().getFullYear()}, All Rights Reserved<br />
            <span className="text-white font-medium">Ascella Group</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex sm:flex-row gap-4 sm:gap-10 w-full sm:w-auto">
          <Link
            href="mailto:a@ascella.in?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20ask%20about..."
            className="block text-center hover:text-white hover:border-white transform hover:scale-105 w-full sm:w-auto text-white nanumgothic font-thin border border-[#1AD1B2] rounded-full px-5 py-2 mt-2 sm:mt-0 bg-black
        shadow-[0_0_30px_0px_rgba(255,255,255,0.4)] 
        hover:shadow-[0_0_12px_3px_rgba(26,209,178,0.6)] 
        transition-all duration-300"
          >
            Contact US
          </Link>
          <Link
            href="/subscribe-us"
            className="block text-center hover:text-white hover:border-white transform hover:scale-105 w-full sm:w-auto text-white nanumgothic font-thin border border-[#1AD1B2] rounded-full px-5 py-2 mt-2 sm:mt-0 bg-black
        shadow-[0_0_30px_0px_rgba(255,255,255,0.4)] 
        hover:shadow-[0_0_12px_3px_rgba(26,209,178,0.6)] 
        transition-all duration-300"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer