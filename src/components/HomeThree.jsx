import React from 'react'
import Image from 'next/image';
import person from '@/images/person.png'
import line from '@/images/line.png'

function HomeThree() {
  return (

      <section className='bg-[#212121] font-inter lg:h-[50vh] md:[90vh] sm:h-[100vh] max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col  justify-between items-center '>
        <div className='lg:w-[40%] flex lg:justify-end md:justify-center justify-center md:w-[86%] w-[61%]'>
          <Image
            src={person}
            className='lg:w-[70%] md:w-[50%] lg:relative lg:left-[18px] lg:bottom-[100px] relative  bottom-[106px] md:relative md:left-[5px] md:bottom-[105px] w-[90%]  '
          />
        </div>
        <div className='lg:w-1/2 lg:mt-10 md sm:pb-20 w-full flex flex-col md:gap-4 gap-6 text-white padding-[10px] md:mt-[-25px]  sm:mt-[-25px] justify-start'>
        <h2 className='font-bold text-[25px] text-center  md:text-center md:text-[35px] lg:text-left'> Random Video <span className='text-[#FF5887] '> Chat</span></h2>
        <p className=' text-[14px] lg:text-[15px]  px-[8px] sm:px-0 text-center sm:text-justify pb-[6px] font-[300] ' >Camsurf is unique in many ways. We believe that everyone should be able to easily meet people from all over the world using their webcam. That is why we created a way for you to instantly video chat with people worldwide or in a specific location based on your preference. Our random video chat app is the perfect way to chat with strangers and meet cool new people instantly</p>
          

        <div className='flex justify-between text-[#FF5887]'>

             <p className='px-[6px] sm:pr-0'> <span className=' text-[26px] sm:text-[34px] font-[600] relative left-[3px]'> 3+</span> <br/> <span className=' text-sm sm:text-[13px]  text-[#FFFFFF]'>Years of experience</span> </p>
    
          <Image src={line}  className='w-[1px]' />
    
           <p className='px-[6px] sm:pr-0'> <span className='text-[25px] sm:text-[35px] font-[600] relative left-[3px]'> 84k</span> <br/> <span className='
           text-sm sm:text-[13px  text-[#FFFFFF]'>Active monthly users</span> </p>
    
           <Image src={line}  className='w-[1px]' />
    
           <p className='px-[6px] sm:pr-0'> <span className='text-[25px] sm:text-[35px] font-[600] relative left-[3px]'> 20k</span>  <br/> <span className='text-sm sm:text-[13px]  text-[#FFFFFF]'>Register Audience</span> </p>
    
    
          </div>
        </div>
        <div className='w-[2%]'></div>

      </section>
  )
}

export default HomeThree
