"use client"

import { ArrowRight, SpaceIcon, SparkleIcon, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter'
import { useRouter } from "next/navigation";

export default function Hero(){
const router = useRouter()
const arrowvarients ={
  inital : {x:0},
  hover : {x:10}
}
  return(<>
  <motion.div
  initial={{filter:'blur(8px)'}}
  animate={{filter : 'blur(0px)'}}
  transition={{
    duration : 0.1
  }}
  className="min-h-screen min-w-full bg-neutral-950 relative">
<div 
 className="absolute inset-0"
 style={{
  background: `linear-gradient(220deg, rgba(245, 245, 245, 0.02), transparent 25%),
  linear-gradient(140deg, rgba(245, 245, 245, 0.03), transparent 25%)
  `,
  zIndex: 0,
 }}
>
  
<div
  className="h-screen p-1 w-full  md:pt-16 justify-center items-center mask-t-from-95% md:mask-t-from-80% md:mask-l-from-65% md:mask-r-from-80% 
  md:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0.1px,transparent_1.9px),linear-gradient(to_right,rgba(255,255,255,0.05)_1.6px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1.3px,transparent_1px)] md:bg-[length:60px_60px] md:bg-[position:-19px_48px,center,center]
  "
>

    
  <div className="w-fit relative mt-4 rounded-4xl  flex mx-auto justify-center items-center">
    <div className="blur-sm animate-pulse transition-transform inset-1 absolute bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-4xl"></div>
   
   <div className="relative bg-neutral-800 p-3 rounded-4xl z-10 flex items-center "> 
    <Sparkles
  className=" text-amber-400 fill-current pr-1 "/> 
  <h1 className="md:text-2xl   font-semibold bg-gradient-to-r from-blue-700 to bg-purple-600 text-transparent bg-clip-text">The ultimate resume builder</h1>
  </div>
  
  </div>
  <div >
    <h1 className="text-center text-4xl md:text-8xl flex flex-col mt-13 font-semibold md:mt-7 mx-1 bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-600 bg-clip-text text-transparent md:pt-1 md:pb-10">
     <span>Build stunning resumes </span>   
     <span className="md:pt-5">that get you hired </span></h1>
<h1 className="text-center flex flex-col md:pt-7 text-neutral-400 font-semibold text-xs md:text-3xl">
  <span className="md:block  hidden mt-10 text-[13px] leading-relaxed md:pb-1 md:text-xl md:m-px">
   Create professional resumes in minutes with our AI-powered platform.
  </span>
</h1>

  </div>


<motion.div 
  initial={{ filter: 'blur(10px)' }}
  animate={{ filter: 'blur(0px)' }}
  className="md:hidden text-neutral-400 font-semibold text-xs mt-10 p-4 rounded-xl shadow-md text-center"
>
  <span className="block mb-1 text-sm text-neutral-500">Did you know?</span> 

  <span className="relative inline-block">
    <span className="bg-gradient-to-r from-purple-400  to-purple-600 bg-clip-text text-transparent font-extrabold text-sm leading-relaxed">
      <Typewriter
        words={[
          'Recruiters spend only 6 seconds on a resume',
          'Design matters more than you think',
          'Stand out with AI-powered resumes',
        ]}
        loop={true}
        cursor={false} // disable default cursor
        typeSpeed={30}
        deleteSpeed={20}
        delaySpeed={1200}
      />
    </span>

    {/* Custom gradient cursor */}
    <span className="absolute top-0 -right-1 w-[1px] h-4 duration-1 animate-caret-blink bg-gradient-to-b  from-purple-900 to-violet-800" />
    
  </span>
</motion.div>

<div className=" absolute w-52 h-52 bg-gradient-to-r animate-spin from-indigo-600 to-purple-600 opacity-20 rounded-full blur-3xl bottom-25 left-1/2 transform -translate-x-1/2 md:-bottom-0 md:w-80 md:h-30 md:animate-none"></div>

  <motion.div
  
  className="mx-auto group relative mt-4 flex justify-center group">
    <span className="absolute bg-gradient-to-r from-transparent  via-purple-500 to-transparent  inset-x-0   rounded-2xl bottom-0  w-[10%] mx-auto h-px"></span>
    <span className="absolute group-hover:opacity-100 opacity-0 bg-gradient-to-r from-transparent  via-purple-500 to-transparent  inset-x-0   rounded-2xl bottom-0  w-[10%] mx-auto h-[8px] blur-lg "></span>
  <motion.button onClick={()=>router.push('/resume')}
  initial='inital'
  whileHover='hover'
  className="md:p-3   md:pl-10 md:pr-5 flex items-center justify-center md:transition-opacity md:duration-100 md:hover:bg-neutral-900 hover:bg-neutral-800 p-3  hover:cursor-pointer   font-semibold md:text-lg text-sm    bg-zinc-900 rounded-2xl text-neutral-300 "> 
  Start Building
    <motion.span
  
     variants={arrowvarients}
    className="md:ml-4 ml-2 font-semibold md:mr-2">
      <ArrowRight  className="font-semibold" size={18} />
       </motion.span> </motion.button>
      
</motion.div>
  
    </div>

  </div>  </motion.div> 
  </>)
}