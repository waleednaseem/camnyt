import React from 'react'
import PressImg from '@/images/PressImg.png'
import videoButton from '@/images/videoButton.png'
import PressImg2 from '@/images/PressImg2.png'
import pressImg3 from '@/images/pressImg3.png'
import pressImg4 from '@/images/pressImg4.png'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './Footer'

const Press = () => {
    return (
        <div>
            <Navbar/>
        <div className='bg-white'>
            <div className="bg-gradient-to-tr from-[#F9E7EF] to-[#DFF1FE] w-full h-[55vh] flex justify-center items-center">
                <div>
                    <h1 className="text-5xl font-bold text-[#262626]">Press</h1>
                    <p className="text-base font-semibold flex justify-center items-center my-5 text-[#262626]">Home / Press</p>
                </div>
            </div>
            <div className="top-0 left-0 right-0 bottom-0 bg-gradient-to-tl from-transparent to-[#F6F4F5]">
                <div className="text-center py-10 max-w-[700px] mx-auto font-inter">
                    <h4 className="text-2xl font-bold pb-7">Contacting Our Team</h4>
                    <p>
                        The Stories section was created to provide insights giving
                        Camsurfers to opportunity to learn about features and helpful tips
                        to effectively use Camsurf's random video chat service.
                    </p>
                </div>
                <section className="bg-cover bg-center  relative ">
                    <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-6 justify-between items-center '>
                        <div className='lg:w-[8%]'></div>
                        <div className='lg:w-[45%] w-full flex flex-col md:gap-4 gap-6 -mt-20 font-inter'>
                            <div className='max-w-[500px]'></div>
                            <h1 className='text-dark md:text-3xl text-2xl font-bold flex'
                            >
                                CamSurf Overview
                            </h1>
                            <p className='md:text-lg text-base'>
                                CamSurf created a video chat platform where random people can meet each other using their webcam. We bring thousands of people together daily and help form bonds between complete strangers through laughter, similar interests and love. Our simple to use interface allows our users to quickly get the hang of our site to begin meeting new people around the world instantly.
                            </p>
                            <button className="bg-gradient-to-r from-[#0197F5] to-[#62C2FF] text-white rounded-full py-2 w-[180px] flex justify-center items-center">
                                Start Video Chat <p className='ml-2'><Image src={videoButton} className='h-5' /></p>
                            </button>

                        </div>

                        <div className='lg:w-[40%] w-full flex md:justify-center justify-center'>
                            <Image
                                src={PressImg}
                                width={1000}
                                height={1000}
                                className='lg:h-[380px] lg:w-[450px] md:h-[420px] md:w-[500px] h-[330px] w-[390px]  object-cover z-50 '
                            />
                        </div>
                        <div className='lg:w-[5%] w-full '></div>
                    </section>
                </section>
            </div>
            <div className='relative lg:mt-0 md:mt-[-40px] '>
                <section className="bg-cover bg-center relative">
                    <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-6 justify-between items-center '>
                        {/* <div className='lg:w-[10%] w-full'></div> */}

                        <div className='lg:w-[50%] w-full flex md:justify-center justify-center lg:mt-0 mt-[-60px]'>
                            <Image
                                src={PressImg2}
                                width={1000}
                                height={1000}
                                className='w-[440px] h-[320px] md:w-[450px] md:h-[370px] lg:w-[500px] lg:h-[380px] object-cover z-50'
                            />
                        </div>
                        <div className='lg:w-[50%] w-full flex flex-col md:gap-4 gap-6 -mt-20 font-inter'>
                            <h1 className='text-dark md:text-3xl text-2xl font-bold flex'
                            >
                                How We Differ from Other Random Video Chat Apps
                            </h1>
                            <p className='md:text-lg text-base'>
                                Since the original Chatroulette site launched back in 2009, hundreds of sites with random chat features started opening. Most of them are the same with absolutely nothing that makes them unique. CamSurf is one of the few video chat sites that has unique benefits.
                                <li>Camsurf developed a system that uses artificial intelligence combined with community reporting to help us identify users that violate our terms of use. This allows you to meet more people who actually want to have conversations.</li>
                                <li>We are one of the only random video chat sites online to have a fully functional mobile phone app in Google Play that is available to use on all Android devices.</li>

                            </p>
                        </div>
                        {/* <div className='lg:w-[5%] w-full'></div> */}

                    </section>
                </section>
            </div>

            <div className='lg:mt-[-90px] mt-[-70px]'>
                <section className="bg-cover bg-center relative">
                    <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16  flex lg:flex-row flex-col gap-8 justify-between items-center '>
                        <div className='lg:w-[8%]'></div>
                        <div className='lg:w-[42%] w-full flex flex-col md:gap-4 gap-6 font-inter lg:mt-0 mt-[-70px]'>
                            <div className='max-w-[500px]'></div>
                            <h1 className='text-dark md:text-3xl text-2xl font-bold flex'
                            >
                                Diversified Audience
                            </h1>
                            <p className='md:text-lg text-base'>
                                We attract millions of people every single month and those people come from all walks of life. Our audience is very diversified with users from over 200 different countries.
                                When using CamSurf you will meet people of many different ethnicities and locations. Whether you want to learn a new language or even discover a different culture, we make it a possibility. CamSurf is the ideal place to converse online and have quality conversations with real people.
                            </p>
                        </div>

                        <div className='lg:w-[40%] w-full flex md:justify-center justify-center'>
                            <Image
                                src={pressImg3}
                                alt="Description of the image"
                                className='w-[300px] h-[380px] md:w-[350px] md:h-[450px] lg:w-[350px] lg:h-[450px] object-cover'
                            />

                        </div>
                        <div className='lg:w-[5%] w-full '></div>
                    </section>
                </section>
            </div>

            <div className='relative lg:mt-0 mt-[-70px]'>
                <section className="bg-cover bg-center relative">
                    <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-6 justify-between items-center '>
                        <div className='lg:w-[10%] w-full'></div>

                        <div className='lg:w-[40%] w-full flex md:justify-centyer justify-center lg:mt-0 mt-[-70px]'>
                            <Image
                                src={pressImg4}
                                width={1000}
                                height={1000}
                                className='lg:h-[350px] lg:w-[480px] md:h-[400px] md:w-[400px] h-[300px] w-[300px] object-cover'
                            />
                        </div>
                        <div className='lg:w-[50%] w-full flex flex-col md:gap-4 gap-6 font-inter'>
                            <h1 className='text-dark md:text-4xl text-2xl font-bold flex'
                            >
                                Rapid Growth
                            </h1>
                            <p className='md:text-lg text-base'>
                                CamSurf has been experiencing rapid growth for the past few years and is constantly gaining a larger fan base. With thousands of followers on Facebook and thousands of users always on webcam, there’s never a dull moment when using this video chat site. Our users love Camsurf and thousands of new people are joining in on the fun every day.
                            </p>
                        </div>
                        {/* <div className='lg:w-[5%] w-full'></div> */}

                    </section>
                </section>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Press