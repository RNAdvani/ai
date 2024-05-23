"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props{
    children:ReactNode;
    width?:"fit-content" | "100%";
    direction:"left"|"right";
    delay:number
}

export const Reveal = ({children,width="fit-content",direction,delay}:Props)=>{
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
    },[isInView])
    return(
        <div ref={ref} className="relative overflow-hidden" style={{width}}>
            <motion.div 
                variants={{
                    hidden:{opacity:0,x:direction === "right" ? -75 :75},
                    visible:{opacity:1,x:0,y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.5,delay:0.25,}}
            >{children}
             </motion.div>
             <motion.div variants={{
                hidden:{opacity:0,right:0,left:0},
                visible:{opacity:1,right:direction === "left"?"100%":0,left:direction === "right"?"100%":0}
             }}
             initial="hidden"
             animate={slideControls}
             transition={{duration:0.5, ease:"easeIn",delay:0.1}}
             style={{
                top:4,
                bottom:4,
                left:0,
                right:0,
                backgroundColor:"#f0f0f0",
                zIndex:20,
                position:"absolute",
             }}
             >

             </motion.div>
        </div>
    )
}