import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex items-center justify-center pt-[150px] pb-[100px] bg-[#0C011A] min-h-screen'>
      <div className='flex flex-col w-[90%] justify-around gap-10 '>
        <div className='flex flex-col  px-4 md:px-0 items-center lg:items-start justify-center md:justify-start w-full gap-3  md:pb-0'>
          <h1 className="text-[50px] text-white font-semibold ">
            My Skills<span className="text-red-500">.</span>
          </h1>
          <ul className='text-[14px] flex flex-col gap-2 text-white max-w-[400px] text-[16px]'>
            <li><span className='text-[16px] text-red-500 font-semibold'>Languages:</span> JavaScript, TypeScript.</li>
            <li><span className='text-[16px] text-red-500 font-semibold'>Frameworks and Libraries:</span> React, Next.js, Bootstrap, Tailwind CSS, SCSS, Material UI, Redux, Redux RTK, Zustand, Node.js.</li>
            <li><span className='text-[16px] text-red-500 font-semibold'>Development Tools:</span> Git, Figma, Jira, Webpack, Vite.</li>
            <li><span className='text-[16px] text-red-500 font-semibold'>Databases:</span> MongoDB, Firebase.</li>
            <li><span className='text-[16px] text-red-500 font-semibold'>Other Technologies:</span> Agile methodologies, responsive design, cross-browser compatibility.</li>
          </ul>
        </div>
        <div className='flex justify-center lg:justify-end lg:pr-12'>
          <ServiceSlider />
        </div>

      </div>
      <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
        <Image
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          className='w-full h-full hidden md:block'
        />
      </div>
    </div>
  )
}

export default Page