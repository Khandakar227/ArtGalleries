import React from 'react'

export default function IntroVideo() {
  return (
    <div className='flex justify-center w-full lg:py-4 py-20'>
        <iframe className='max-w-2xl w-full aspect-video rounded-md shadow' title='intro-video' src="https://www.youtube.com/embed/xt2VoSQsE9Y?si=gHHoa1137kUMQ0nb" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
