"use client"

import { ArrowRight, SpaceIcon, SparkleIcon, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";


export default function Hero(){


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
  className="h-screen p-1 w-full pt-28 md:pt-49 justify-center items-center mask-t-from-95% md:mask-t-from-80% md:mask-l-from-65% md:mask-r-from-80% md:bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0.1px,transparent_1.9px),linear-gradient(to_right,rgba(255,255,255,0.05)_1.6px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1.3px,transparent_1px)] md:bg-[length:60px_60px] md:bg-[position:-6px_45px,center,center]"
>

    
  <div className="w-fit relative  rounded-4xl  flex mx-auto justify-center items-center">
    <div className="blur-sm animate-pulse transition-transform inset-1 absolute bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-4xl"></div>
   
   <div className="relative bg-neutral-800 p-3 rounded-4xl z-10 flex items-center "> 
    <Sparkles
  className=" text-amber-400 fill-current pr-1 "/> 
  <h1 className="md:text-xl text-sm   font-semibold bg-gradient-to-r from-blue-700 to bg-purple-600 text-transparent bg-clip-text">The ultimate resume builder</h1>
  </div>
  </div>
  <div >
    <h1 className="text-center text-4xl md:text-8xl flex flex-col mt-13 font-semibold md:mt-9 mx-1 bg-gradient-to-r from-indigo-500 via-purple-900 to-pink-600 bg-clip-text text-transparent md:pt-1 md:pb-10">
     <span>Build stunning resumes </span>   
     <span className="md:pt-5">that get you hired </span></h1>
<h1 className="text-center flex flex-col md:pt-7 text-neutral-300 font-semibold text-xs md:text-3xl">
  <span className=" mt-20 text-[11px] leading-relaxed md:pb-1 md:text-2xl md:m-px">
    Create professional resumes in minutes with our AI-powered platform.
  </span>
  <span className="mt-3 text-[11px] leading-relaxed pr-1 text-sm md:pt-2 md:text-2xl">
    Stand out from the crowd and land your dream job.
  </span>
</h1>

  </div>

  <div className="mx-auto flex justify-center group">
    <Link href={'/resume'}>
  <Button   variant={'default'} className="md:p-7 p-5  hover:cursor-pointer   font-semibold md:text-lg text-sm  px-5 pl-9 bg-zinc-900 rounded-xl text-neutral-300 md:mt-19  mt-50"> Start Building
    <span className="ml-4 font-semibold mr-2">
      <ArrowRight  className="font-semibold" size={20} />
       </span> </Button>
       </Link>
</div>
   
    </div>

  </div>  </motion.div> 
  </>)
}