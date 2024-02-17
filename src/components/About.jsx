import React from 'react'
import Image from 'next/image';
import arrowShape from '@/images/arrow2.png'
import sideImage from '@/images/Image.png'
import multipleImage from '@/images/multiple2.png'
import manImage from '@/images/man3.png'
import signImage from '@/images/sign.png'
import leftArrow from '@/images/arrowleft.png'
import starImage from '@/images/star3.png'
import Navbar from './Navbar';
import Footer from './Footer';

// import pinkImage from '@public/images/pink.png'

const About = () => {
    return (
        <div>
            <Navbar/>
        <div className=''>
            <div className="bg-gradient-to-tr from-[#F9E7EF] to-[#DFF1FE] w-full max-w-screen-4xl h-[55vh] flex justify-center items-center">
                <div>
                    <h1 className="text-5xl font-bold text-[#262626]">About us</h1>
                    <p className="text-base font-semibold flex justify-center items-center my-5 text-[#262626]">Home / About us</p>
                </div>
            </div>

            <div>
                <section className='bg-white max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col  justify-around lg:mb-10'>
                    <div className='lg:w-[50%] w-full flex flex-col md:gap-2 gap-6 lg:mt-23 xl:mt-23 items-center sm:items-start md:mt-[-145px]'>

                        <div className=' flex justify-center md:flex md:justify-start my-4 px-3 sm:px-0 mt-[140px]  md:ml-[1px]   '>
                            <p className='font-bold text-xl lg:text-5xl mx-1 text-[#262626] sm:text-37 sm:leading-8'>About</p> <p className='font-bold mx-1 lg:text-5xl text-[#262626] text-xl  sm:text-37 sm:leading-8'>Camsurf</p> <p className='mx-1 text-[#FF5887] font-bold text-xl lg:text-5xl sm:text-37 sm:leading-8'>Video</p> <p className='mx-1 text-xl  text-[#FF5887] font-bold lg:text-5xl sm:text-37 sm:leading-8'>Chat</p>

                        </div>
                        <p className='md:text-lg text-base md:text-left text-center'>

                            Camsurf is a random video chat app that allows users to connect with people from all over the world. With this idea at the core of our service, we offer users an easy-to-use, fun, and free platform where they can engage in conversations with random people and make new friends.

                        </p>
                        <Image src={arrowShape} className='w-[20%] lg:w-[30%] mt-[-30px] md:mt-[-15px] lg:ml-[550px] flex justify-end md:ml-0 ml-[237px]' />

                    </div>
                    <div className='lg:w-[33%] w-full flex md:justify-center justify-center lg:justify-left'>
                        <Image
                            src={sideImage}
                            className='w-[281px] md:w-[307px] lg:w-[410px] lg:h-[400px]' />
                    </div>
                </section>

            </div>

            <div>
                <section className='bg-[#212121]  lg:h-[70vh] md:h-[100vh] sm:h-[90vh] max-w-screen-2xl mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col gap-6 justify-between items-center '>
                    <div className='lg:w-[43%] flex lg:justify-center md:justify-center justify-center md:w-[86%] w-[61%] lg:ml-[25px] order-2 sm:order-none lg:order-1 '>
                        <Image
                            src={multipleImage}
                            className='sm:block w-[200px] md:w-[267px] md:h-[428px] lg:w-[85%] lg:h-[670px] lg:relative lg:bottom-[11px] md:mt-[-27px]'
                        />

                    </div>
                    <div className='lg:w-[60%] lg:mt-10 md sm:pb-20 w-full flex flex-col md:gap-4 gap-6 text-white padding-[10px] md:mt-[-25px] mt-[23px]  order-1 sm:order-none lg:order-2 md:pt-4'>
                        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-start md:justify-start'>
                            <h2 className='font-bold text-2xl lg:text-5xl text-[35px] mb-2 text-[rgb(255,88,135)] lg:text-start'>
                                Why we’re
                            </h2>
                            <h2 className='font-bold text-2xl lg:text-5xl lg:mb-2 lg:mx-[7px] text-[35px] text-[#FF5887]'>
                                different
                            </h2>
                        </div>

                        <p className=' md:pr-[34px] lg:text-lg text-base text-center px-[14px]  md:text-center  lg:text-left' >Around our central idea of creating a better chat experience, we have built a platform which is simple to use and comes packed with great features. Our service is simple to use, users can begin chatting by simply agreeing to our terms and privacy. Then enabling their webcam and clicking on the large ‘Start’ button to begin video chatting instantly. Our servers are fast and reliable, ensuring that connection speeds are blazing fast, even when connecting to someone from the other side of the world. We also offer users the ability to choose the location of users they wish to connect with, providing a great way to learn a new language or find out about a different culture.</p>

                    </div>


                </section>
            </div>


            <section className='mt-[99px] max-w-[1100px] mx-auto mb-20'>

                <div className='flex flex-col justify-center items-center lg:flex lg:flex-col lg:items-center mb-[40px]'>


                    <Image
                        src={starImage} className=' hidden   lg:flex  lg:relative lg:left-[490px] lg:w-[74px]  '
                    />

                    <div className='flex sm:ml-[23px] mt-2 justify-center' >
                        <p className='font-400 text-[16px] md:text-[25.704px] lg:text-[25.704px] lg:font-bold mx-[2px] text-[#262626] sm:text-[24px] sm:leading-8'>Look</p><p className='font-400 lg:font-bold mx-[2px] text-[16px] md:text-[25.704px] lg:text-[25.704px] text-[#262626] sm:text-[24px] sm:leading-8'>What</p><p className='mx-[2px] text-[#FF5887] font-bold  lg:text-[25.704px] lg:font-bold text-[16px] md:text-[25.704px] sm:text-[24px] sm:leading-8'>Our</p> <p className='mx-[2px] text-[#FF5887] font-bold lg:text-[25.704px] text-[16px] md:text-[25.704px] sm:text-[24px] sm:leading-8'>Client</p><p className='font-400 mx-[2px]  text-[16px] md:text-[25.704px] lg:text-[25.704px] lg:font-bold text-[#262626] sm:text-[24px] sm:leading-8 whitespace-no-wrap'>Are Saying</p>

                    </div >
                    <div className='mt-2 flex justify-center'>
                        <p className=' lg:font-bold lg:text-[60px] text-4xl font-bold uppercase lg:ml-3'>Testimonials</p>
                    </div>



                </div>

                <div className="bg-cover bg-center relative h-1/2 md:h-3/4 lg:h-[42vh]" style={{
                backgroundImage: `url(/images/RectangleImage.png)`,
            }}>

                    <div >
                        <Image
                            src={leftArrow} className=' hidden md:flex md:w-[42px] md:relative md:top-[190px] md:right-[25px]'
                        />

                    </div>
                    <div className='  mx-auto lg:px-16 md:px-10 sm:px-6 px-4 py-16 flex lg:flex-row flex-col  justify-start '>
                        <div className='flex justify-center'>
                            <Image
                                src={manImage}
                                className='lg:h-[47vh] lg:w-[120vh] relative lg:bottom-[119px] w-[32vh] h-[39vh] bottom-[12px] md:bottom-[29px] md:w-[34vh] md:h-[45vh] sm:mr-10' // Adjust the right margin value as needed
                                style={{ marginRight: "25px" }}
                            />
                        </div>


                        <div className='lg:flex lg:justify-start lg:flex-col gap-[10px] relative lg:bottom-[68px]  pl-[18px] pr-[46px] lg:px-[0]  lg:ml-[51px]  flex  flex-col lg:items-start  items-center mt-[30px] ml-[40px] md:pl-[26px] md:pr-[25px]'>

                            <Image
                                src={signImage}
                                className='h-19'
                            />

                            <div className='mt-[40px] flex flex-col items-center lg:items-start '>
                                <p className='text-[#fff] font-[300] md:text-center  lg:text-left  text-center '>This App Is So Cool: I’ve met a lot of people on here who are pretty chill and just wanna be friends. There are no creeps and I appreciate that very much. You should totally join and meet new people it’s actually legit.</p>

                                <h4 className='font-[600] text-[#fff] mt-6 md:text-4xl mt:50 text-[20px]  md:text-[27px] text-center'>James Radford</h4>
                                <span className=' text-[11px] lg:text-[14px] md:[14px] text-[#fff] font-[200]'>Social Media Manager</span>


                            </div>
                        </div>


                    </div>



                </div>




            </section>



        </div>
        <Footer/>
        </div>
    )
}

export default About
