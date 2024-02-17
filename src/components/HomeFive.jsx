import React from 'react'
import camnyt from '@/images/camnyt.png'
import google from '@/images/google1.png'
import playstore from '@/images/playstore.png'
import main from '@/images/main.png'
import Image from 'next/image';

function HomeFive() {
  return (

    <section className='bg-light-white relative font-inter'>
      <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-[20px] sm:py-16 flex lg:flex-row flex-col  justify-start  '>
      <div className='lg:w-[10%]'></div>
        <div className='items-center sm:items-start lg:w-[50%] w-full flex flex-col md:gap-2 gap-6 mt-[-40px]'>
        

        <div className='flex justify-center'>
          <Image src={camnyt} className='hidden sm:w-[20%]' />

          </div>
          <div className='flex my-4 px-3 sm:px-0'>
            <p className='font-bold text-[20px] md:text-3xl mx-1 text-[#262626] sm:text-[24px] sm:leading-8'>Mobile</p><p className='font-bold mx-1 text-[20px] md:text-3xl text-[#FF5887] sm:text-[24px] sm:leading-8'>App</p><p className='mx-1 text-[#262626] font-bold text-[20px] md:text-3xl sm:text-[24px] sm:leading-8'>on</p> <p className='mx-1 text-[#262626] font-bold text-[20px] md:text-3xl sm:text-[24px] sm:leading-8'>the</p><p className='font-bold mx-1  text-[20px] md:text-3xl text-[#FF5887] sm:text-[24px] sm:leading-8'>Go</p>

          </div>
          <p className='md:text-lg text-base text-justify md:text-left'>

            As the perfect complement to our web browser-based chat platform, we are delighted to announce the launch of the Android Camsurf app. Now you can make new friends and meet new people wherever you are. The app is 100% free to download and designed to use minimal storage space on your device.

          </p>
          <p className='md:text-lg text-base  text-justify md:text-left'>
             We’ve designed the app to offer all the same great features you find on our web-based platform. Enjoy lightning fast connections, the ability to filter by location and language and other features that make Camsurf one of the fastest growing video chat services online. Keep an eye out for our Apple Store app which is in development.
          </p>
          <div className='flex gap-4 mt-1'>
          <Image src={google} className=' h-[39px] w-[114px] sm:w-[140px]  sm:h-16' />
          <Image src={playstore} className='h-[39px] w-[114px] sm:w-[140px]  sm:h-16' />
    
         </div>

        </div>
        <div className='lg:w-[40%] w-full flex md:justify-center lg:justify-end justify-center  sm:mt-0 -mb-16'>
          <Image
            src={main}
            width={1000}
            height={1000}
           className=' md:ml-[85px] md:mt-[8px] lg:mt-0 lg:ml-0 sm:w-[600px] sm:h-[600px] md:w-[600px] md:h-[600px] lg:w-[554.16px] lg:h-[712px] mt-10' />
        </div>
      </section>
    </section>
  )
}

export default HomeFive
