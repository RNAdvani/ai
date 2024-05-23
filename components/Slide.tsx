import React, { ReactElement, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Slide = ({children,direction}:{children:ReactElement,direction:"left" | "right"}) => {

    const ref = useRef(null)
    const isInView = useInView(ref,{once:true});
    const animationControl = useAnimation();

    useEffect(()=>{
        if(isInView){
            animationControl.start("visible")
        }
    },[isInView])


  return (
    <div ref={ref}>
          <motion.div 
        variants={{
            hidden:{opacity:0,x:direction === "right" ? 75:-75,},
            visible:{opacity:1,x:0},
        }}
        initial="hidden"
        animate={animationControl}
        transition={{duration:0.5,delay:0.1}}
            >
                
                {children}
             </motion.div>
    </div>
  )
}

export default Slide