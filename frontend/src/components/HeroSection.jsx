import React from 'react'
import Navbar from './Navbar'
import IntroVideo from './IntroVideo'

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
          <p className='text-lg'>Unlock Unlimited Access for Only <span className='relative'><del className='pr-2'>$1000/Month</del><b className='absolute md:top-[-100%] md:left-0'>$250/Month</b></span></p>
        </div>
        <div className='flex justify-end items-center'>
          <img className='w-full shadow rounded' src="./subscription.jpg" alt="Subsciption" />
        </div>
      </section>

      <section className="my-12 sign-up-bg">
        <div className='mx-auto max-w-5xl py-6 px-4 grid md:grid-cols-2 gap-4 justify-between items-center'>
          <div></div>
          <form className='px-4 py-10 shadow-sm glass'>
            <h3 className='font-charmonan pb-6 text-center text-2xl font-bold'>SIGN UP</h3>
            <input type="text" name='name' placeholder='Name' className='mb-4 w-full px-4 py-2 shadow-sm' />
            <input type="email" name='email' placeholder='Email' className='mb-4 w-full px-4 py-2 shadow-sm' />
            <input type="text" name='bname' placeholder='Business Name' className='mb-4 w-full px-4 py-2 shadow-sm' />
            <button className='font-semibold px-4 py-2 bg-white rounded shadow'>SUBMIT</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default HeroSection