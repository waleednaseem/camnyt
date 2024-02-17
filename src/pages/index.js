import HomeTwo from '@/components/HomeTwo'
import HomeOne from '@/components/HomeOne'
import HomeThree from '@/components/HomeThree'
import HomeFour from '@/components/HomeFour'
import React from 'react'
import HomeFive from '@/components/HomeFive'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <div>
      <Navbar/>
      <HomeOne/>
      <HomeTwo/>
      <HomeThree/>
      <HomeFour/>
      <HomeFive/>
      <Footer/>
    </div>
  )
}

export default index