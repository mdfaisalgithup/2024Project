import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import "../components/navbar/Navbar.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SchedulMeet',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
    <body className={`bg-[#0d0c22] ${inter.className} text-white`}>
    <link rel="icon" href="https://i.ibb.co/5LFVvdk/logo-white.webp" sizes="any" />
      <div>
<div className='navBarStyle static top-0 w-full z-50'>
<div className='xl:w-[70%] w-[90%] mx-auto'>
       <Navbar></Navbar>
       </div>
</div>


    {children}


       <div className='bg-[#2B3440]'>

       <div className='w-[70%] mx-auto'>

    
         <Footer></Footer>
        </div>
</div>
        

       </div> 
       </body>
    </html>
  )
}
