"use client"
import DataDrivenAnimation from '@/components/Cube'
import { Reveal } from '@/components/Reveal'
import Slide from '@/components/Slide'
import { TextGenerateEffect } from '@/components/text-generate-effect'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/button'
import { FaArrowRight as ArrowRightIcon } from 'react-icons/fa'
import Graph, { GraphData } from '@/components/Chart'
import { CardContent } from '@/components/ui/card'
import { CardWithForm } from '@/components/Card'



const page = () => {

  const data: GraphData = {
    labels: ['1', '2', '3', '4', '5'], // Replace with your actual labels
    data: [20, 30, 45, 25, 38], // Replace with your actual data
  }


  return (


  <div className="flex flex-col w-full h-full md:mt-20 mt-8">
    <section className="flex flex-col h-full max-h-screen]"> 
      <BackgroundBeams className='-z-[5]' />
      <div className="display-format">
          <div className="w-full justify-around flex md:p-16 flex-col min-h-[40vh] gap-10 items-center md:justify-end md:h-full">
            <div className='w-full text-3xl text-center font-semibold md:min-h-[40vh] md:text-start flex flex-col gap-6 md:gap-0'>
              <h1 className=" md:block  scroll-m-20 text-5xl text-center md:text-start w-full font-extrabold tracking-tight lg:text-7xl">
                  Ravian.Ai
              </h1>
              <TextGenerateEffect className='text-xl'  words={`Turn Data in Descisions with our AI Data Scientist`} />
            </div>
            <div className="flex justify-center w-full">
                  <Button className='flex gap-2 duration-300 w-full md:hidden text-black  hover:border-[#f0f0f0] bg-[#f0f0f0] rounded-full hover:text-[#f0f0f0] hover:bg-black' >
                      <span className=''>Get Started</span><ArrowRightIcon />
                  </Button>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center h-full">
                <DataDrivenAnimation />
          </div>
      </div>
    </section>

    <section className="flex flex-col w-full min-h-[70vh]">
      <div className="flex flex-col md:flex-row h-full justify-end">
          <div className="flex flex-col justify-center items-center h-full md:flex-row w-full px-2 md:p-8 md:justify-start gap-8 md:w-[90%]">
              <div >
                  <Slide direction='left'>
                     <CardWithForm title='Data Analysis' description='Analysis using our latest gen ai'  >
                     <div className='flex w-full justify-center items-center'>
                     <Graph {...data} />
                     </div>
                     </CardWithForm>
                  </Slide>
              </div>
              <div  className='flex flex-col h-full justify-center w-full items-center  px-4'>
              <Reveal direction='left' key={"heading1"} delay={0.25} >
                <h2 className="scroll-m-20 w-full  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  AI Data Analysis
                </h2>
              </Reveal>
              <Reveal direction='left' key={"para1"} delay={0.35}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king, seeing how much happier his subjects were, realized the error of
                his ways and repealed the joke tax.
              </p>
              </Reveal>
              </div>
          </div>
      </div>
    </section>

    <section className="flex max-md:mt-10 flex-col w-full min-h-[70vh]">
      <div className="flex flex-col-reverse md:flex-row h-full justify-start">
          <div className="flex flex-col-reverse  justify-center items-center h-full md:flex-row w-full px-2 md:p-8 md:justify-start gap-8 md:w-[90%]">
              <div  className='flex flex-col h-full justify-center w-full items-center  px-4'>
              <Reveal direction='right' key={"heading1"} delay={0.25} >
                <h2 className="scroll-m-20 w-full  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  AI Data Analysis
                </h2>
              </Reveal>
              <Reveal direction='right' key={"para1"} delay={0.35}>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king, seeing how much happier his subjects were, realized the error of
                his ways and repealed the joke tax.
              </p>
              </Reveal>
              </div>
              <div >
                  <Slide direction='right'>
                     <CardWithForm title='Data Analysis' description='Analysis using our latest gen ai'  >
                     <div className='flex w-full justify-center h-full items-center px-2 py-6'>

                     </div>
                     </CardWithForm>
                  </Slide>
              </div>
          </div>
      </div>
    </section>
  </div>
    
  )
}

export default page