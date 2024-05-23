import React from 'react'

const Footer = () => {

  return (
    <div 
    className='relative h-[500px]'
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
>
    <div className='relative h-[calc(100vh+500px)] -top-[100vh] bg-[#212529]'>
        <div className='h-[500px] sticky top-[calc(100vh-500px)]'>
           <footer className='flex flex-wrap h-full w-full justify-around text-[#6c757d]'>
            <div className='flex h-full justify-center items-center'>
              <p>&copy; {new Date().getFullYear()} Ravian AI</p>
            </div>
           </footer>
        </div>
    </div>
</div>
  )
}

export default Footer