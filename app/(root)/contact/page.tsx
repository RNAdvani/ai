import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col h-full w-full justify-center items-center mt-[10rem]'>
          <h2 className='text-lg font-medium text-[#6c757d]'>
            Email
          </h2>
          <Link href={"mailto:care@ravian.ai"} className='text-[#ced4da]' >
            care@ravian.ai
          </Link>
      </div>
  </div>
  )
}

export default Contact