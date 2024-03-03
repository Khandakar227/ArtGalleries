import React, { } from 'react'
import Navbar from './Navbar'
import IntroVideo from './IntroVideo'
import SignUpForm from './SignUpForm';

function HeroSection() {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      
      <section className='p-4 min-h-[89vh] mx-auto max-w-[1380px] grid gap-4 lg:grid-cols-2 justify-between items-center'>
        <div className='grid justify-center lg:text-left text-center pt-10'>
          <h1 className='text-4xl font-bold font-charmonan lg:max-w-xl'>Sculpting the Soul: An Exploration of Form and Emotion</h1>
          <p className='pt-4 text-lg font-semibold'>Immerse yourself in the vibrant tapestry of cultural heritage as our galleries unveil treasures from different epochs and civilizations.</p>
          <p className='pt-2'>Whether you're a seasoned art aficionado or a curious newcomer, our galleries offer something to ignite the imagination of every visitor.</p>
        </div>
        <IntroVideo/>
      </section>

      <section className='mx-auto max-w-5xl py-12 px-4 grid md:grid-cols-2 gap-4 justify-between items-center'>
        <div>
          <h3 className='text-4xl font-bold font-charmonan pb-12'>Exclusive Offer</h3>
          <p className='text-lg'>Unlock Unlimited Access for Only <span className='lg:relative'><del className='pr-2'>$1000/Month</del><b className='lg:absolute md:top-[-100%] md:left-0'>$250/Month</b></span></p>
        </div>
        <div className='flex justify-end items-center'>
          <img className='w-full shadow rounded' src="./subscription.jpg" alt="Subsciption" />
        </div>
      </section>

      <section className="my-12 sign-up-bg">
        <div className='mx-auto max-w-5xl py-6 px-4 grid md:grid-cols-2 gap-4 justify-between items-center'>
          <div></div>
          <SignUpForm/>
        </div>
      </section>
    </div>
  )
}

export default HeroSection