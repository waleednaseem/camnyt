import React from 'react';
import home2 from '@/images/hometwo.png';
import home4 from '@/images/home4.png';
import videoButton from '@/images/videoButton.png';
import Image from 'next/image';

function HomeTwo() {
  return (
    <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-6 justify-between items-center bg-cover bg-center font-inter h-[100vh] sm:h-[795px]  md:h-[795px] lg:h-[79vh] relative lg:pt-[298px] sm:flex-col pt-40 ' style={{
        backgroundImage: `url(/images/rectangle.png)`,
    }}
>
      {/* Content Section */}
      <div className='items-center sm:items-start lg:w-1/2 w-full flex flex-col md:gap-4 gap-6 -mt-20 font-inter order-1 sm:order-none lg:order-2'>
        <h1 className='text-dark md:text-3xl  text-[24px] lg:text-4xl font-bold flex'>
          Click and Cam
          <p className='ps-1 text-[24px] text-pink md:text-3xl lg:ml-2 lg:text-4xl font-bold '>
            Chat
          </p>
        </h1>
        <p className='md:text-17 lg:text-base  text-base text-center lg:leading-[28px] sm:text-left'>
          At Camsurf we want to make meeting new people as simple as possible. Our random video chat platform uses the fastest servers to allow lightning fast connections and ultra-high-quality streams. It takes less than a second to connect with someone and you can enable sound, chat with a mic or use our in-built text chat to type while still viewing the other person’s webcam.
        </p>
        <button className="bg-black text-white rounded-full py-2 w-[180px] flex justify-center items-center">
          Start Video Chat <p className='ml-2'><Image src={videoButton} className='h-5'/></p>
        </button>
      </div>

      {/* Image Section */}
      <div className='mr-[34px]  sm:mr-0 lg:w-1/2 w-full flex md:justify-center justify-center order-2 sm:order-none lg:order-1'>
        <Image
          src={home4}
          width={1000}
          height={1000}
          className='sm:mb-32 lg:mb-0 sm:w-[500px] sm-h-[500px] md:w-[600px] md:h-[600px] md:mr-[37px] lg:mr-0 lg:h-[640px] lg:w-[650px]'
        />
      </div>
    </section>
  );
}

export default HomeTwo;
