import React from 'react'
import storiesImg1 from '@/images/storiesImg1.png'
import storiesImg2 from '@/images/storiesImg2.png'
import storiesImg3 from '@/images/storiesImg3.png'
import videoButton from '@/images/videoButton.png'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'

const Stories = () => {
    return (
        <div>
            <Navbar/>
        <div>
            {/* main */}
            <div className="bg-gradient-to-tr from-[#F9E7EF] to-[#DFF1FE] w-full h-[55vh] flex justify-center items-center font-inter">
                <div>
                    <h1 className="text-5xl font-bold text-[#262626]">Stories</h1>
                    <p className="text-base font-semibold flex justify-center items-center my-5 text-[#262626]">Home / Stories</p>
                </div>

            </div>

            {/* img1 */}
            <div className="top-0 left-0 right-0 bottom-0 bg-gradient-to-tl from-transparent to-[#F6F4F5]">
                <div className="text-center py-10 max-w-[700px] mx-auto font-inter">
                    <h4 className="text-2xl font-bold pb-7">Contacting Our Team</h4>
                    <p>
                        The Stories section was created to provide insights giving
                        Camsurfers to opportunity to learn about features and helpful tips
                        to effectively use Camsurf's random video chat service.
                    </p>
                </div>
                <section className="bg-cover bg-center bg-transparent relative  ">
                    <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-6 justify-between items-center '>
                        <div className='lg:w-[8%]'></div>
                        <div className='lg:w-[35%] w-full flex flex-col md:gap-4 gap-6 -mt-20 font-inter'>
                            <div className='max-w-[500px]'></div>
                            <h1 className='text-dark md:text-4xl text-xl font-bold flex'
                            >
                                Camsurf — The Best Way to Connect with People All Over the World
                            </h1>
                            <p className='md:text-sm text-[15px] text-[#424242]'>
                                Thousands of people are using Camsurf to connect with others around the world and so can you! We make it easier than ever before to meet new people.
                            </p>
                            <button className="bg-gradient-to-r from-[#0197F5] to-[#62C2FF] text-white rounded-full py-4  w-[200px] flex justify-center items-center text-sm font-bold">
                                Start Video Chat <p className='ml-2'><Image src={videoButton} className='h-5' /></p>
                            </button>

                        </div>

                        <div className='lg:w-[40%] w-full flex md:justify-center justify-center lg:mr-[60px] z-50'>
                            <Image
                                src={storiesImg1}
                                width={1000}
                                height={1000}
                                className='lg:h-[620px] lg:w-[600px] md:h-full md:w-[400px] h-[400px] w-[330px] object-cover'
                            />
                        </div>
                        <div className='lg:w-[5%]'></div>
                    </section>
                </section>
            </div>

            {/* img2 */}
            <section className="bg-cover bg-center relative lg:mt-[-150px]">
                <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-15 justify-between items-center '>
                    <div className='lg:w-[5%]'></div>
                    <div className='lg:w-[45%] w-full flex md:justify-center justify-center mt-[-90px] lg:mt-0 md:mt-0'>
                        <Image
                            src={storiesImg2}
                            width={1000}
                            height={1000}
                            className='lg:h-[400px] lg:w-[600px] md:h-[400px] md:w-[400px] h-[300px] w-[300px] object-cover'
                        />
                    </div>
                    <div className='lg:w-[3%]'></div>
                    <div className='lg:w-[40%] w-full flex flex-col md:gap-4 gap-6 font-inter'>
                        <div className='max-w-[500px]'></div>
                        <h1 className='text-dark md:text-4xl text-xl font-bold flex'
                        >
                            The Skinny Behind Random Video Chat Sites
                        </h1>
                        <p className='md:text-sm text-[15px] text-[#424242]'>
                            More people are using random video chat platforms to meet new people every single day.
                        </p>
                        <button className="bg-gradient-to-r from-[#161616] to-[#525252] text-white rounded-full py-4 w-[200px] flex justify-center items-center text-[14px] lg:text-sm font-bold">
                            Start Video Chat <p className='ml-2'><Image src={videoButton} className='h-5' /></p>
                        </button>

                    </div>
                    <div className='lg:w-[5%] w-full '></div>
                </section>
            </section>

            {/* bgImage */}
            <div className="bg-cover bg-center relative h-[50vh] md:h-[50vh] lg:h-[45vh] flex items-center justify-center" style={{
                backgroundImage: `url(/images/bgStories.png)`,
            }}>
                <div className='text-center'>
                    <h1 className='md:text-3xl text-2xl font-bold text-white'>Who is On Camsurf?</h1>
                    <p className='md:text-xl text-base my-4 text-white'>You never know who is out there wanting to talk. You <br />never know who may pop up on the other end of the chat.</p>
                </div>
            </div>

            {/* img3 */}
            <section className="bg-cover bg-center relative lg:mt-0 mt-[-40px]">
                <section className='bg-white lg:mt-0 mt-[-90px] max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-6 justify-between items-center '>
                    <div className='lg:w-[8%]'></div>
                    <div className='lg:w-[40%] w-full flex flex-col md:gap-4 gap-6 font-inter mt-[-50px] lg:mt-0 md:mt-0'>
                        <div className='max-w-[500px]'></div>
                        <h1 className='text-dark md:text-4xl text-xl font-bold flex'
                        >
                            Can I Filter Who I Chat With?
                        </h1>
                        <p className='md:text-sm text-[14px]'>
                            If you are curious about Camsurf, but wondering how it works and if you have control of who you talk to, the short answer is yes. You can filter who you talk with
                        </p>
                        <button className="bg-gradient-to-r from-[#161616] to-[#525252] text-white rounded-full py-4 w-[200px] flex justify-center items-center text-[14px] lg:text-sm font-bold">
                            Start Video Chat <p className='ml-2'><Image src={videoButton} className='h-5' /></p>
                        </button>

                    </div>
                    <div className='lg:w-[40%] w-full flex md:justify-center justify-center'>
                        <Image
                            src={storiesImg3}
                            width={1000}
                            height={1000}
                            className='lg:h-[400px] lg:w-[400px] md:h-[400px] md:w-[400px] h-[300px] w-[300px] object-cover'
                        />
                    </div>

                    <div className='lg:w-[10%] w-full '></div>
                </section>
            </section>
        </div>
        <Footer/>
        </div>
    )
}

export default Stories