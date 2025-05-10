"use client"
import { ArrowUp, CircleCheckBig, Cog, Download, Layers, Users, WandSparkles } from "lucide-react"
import { Button } from "../ui/button"
import { useRef, useState } from "react"
import Testimonial from "./testimonial"
import {AnimatePresence, delay, easeInOut, motion} from 'motion/react'

export default function Body(){
  const [show,setShow]= useState<number | null>(null)


  function handleClick(id : number){

    setShow((prev)=>prev === id ? null : id)
  
  }

const features = [
  { comp : <WandSparkles size={31}/>,
    heading :  'AI-Powered Content',
    desc :  'Generate professional bullet points and optimize your content with our AI assistant.'
  }, {
    comp : <Layers size={31}/>,
  heading : 'Beautiful Templates',
    desc : ' Choose from dozens of ATS-friendly templates designed by HR professionals.'
   }
  ,{ comp : <Cog size={31}/>,
    heading : 'Easy Customization',
    desc :'Customize every aspect of your resume with our intuitive drag-and-drop editor.'
  },{ comp : <CircleCheckBig size={31}/>,
    heading : 'ATS Optimization',
    desc :  'Ensure your resume passes Applicant Tracking Systems with our built-in scanner.'
   
  },{ comp : <Users size={31}/>,  
    heading : 'Expert Feedback',
    desc : ' Get personalized feedback from HR professionals to improve your resume.'
  },{ comp : <Download size={31}/>,
    heading : 'One-Click Apply',
    desc : ' Apply to jobs directly from our platform with a single click.'
   
  },
]

const pricing = [{
  head :  'Free',
  price : '$0',
  role :  'Perfect for trying out the platform',
  task : '1 resume',
  templates : 'Basic templates',
  features : ['Export to PDF'],
  button : 'Get Started'
},{
  
 
  head :  'Pro',
  price :  '$12/month',
  role : 'Everything needed for your job search',
  task :'Unlimited resumes',
  templates : 'All templates',
  features : ['AI content assistant',
'ATS optimization'
,'Priority support'],
  button : 'Get Pro'
},{
  
  head :  'Enterprise',
  price :  '$49/month',
  role : 'For teams and career services',
  task :'Everything in Pro',
  templates : 'All templates',
  features : ['Team management',
'Custom branding'
,'Dedicated support','API access'],
  button : 'Contact Sales'
}
]


const accordian =[
  {question: "How does ResumeForge compare to other resume builders?",
    answers : "ResumeForge offers AI-powered content suggestions, ATS optimization, and expert feedback that most other builders don't provide. Our templates are designed by HR professionals and our platform is more intuitive and user-friendly."
  },
  {question: "Can I use ResumeForge for free?",
    answers : "Yes! We offer a free plan that allows you to create one resume and access basic templates. You can export your resume to PDF and use it for your job applications."
  }, {question: "How does the AI content assistant work?",
    answers : "Our AI content assistant analyzes your experience and skills, then suggests professional bullet points and descriptions that highlight your achievements. It helps you quantify your impact and use industry-specific keywords that catch recruiters' attention."
  }, {question: "Can I cancel my subscription at any time?",
    answers : "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your Pro features until the end of your billing period."
  }, {question: "Do you offer refunds?",
    answers : "We offer a 14-day money-back guarantee if you're not satisfied with your Pro subscription. Contact our support team to request a refund."
  }, 
]

const parentVarient ={
  hidden : {opacity  : 0 ,},
  visible : {
    opacity :1,
    transition : {staggerChildren : 0.1 }
  }
}
const childrenVarient ={
  hidden :{ opacity : 0,x :2 , filter : 'blur(10px)' },
  visible : {
     opacity :1,
     x: 0,
    filter : 'blur(0px)',

    duration:0.1
  }
}

  return(<>
  <div className="bg-neutral-950"> 
  <motion.div 
  initial={{  y : 100, opacity : 1}}
  whileInView={{
   y : 0
  }}
  transition={ {
    duration : 0.3,
 ease : 'easeIn'
  }}  
  className="text-center min-h-screen w-full bg-neutral-950">
  <h1


  className="md:pt-26 p-2 text-4xl  md:text-5xl bg-gradient-to-r bg-clip-text text-transparent  from-neutral-400  via-neutral-700 to-neutral-300 font-semibold">Powerful features to build your perfect resume
    </h1>
      <motion.h1
      initial={{
        opacity :0,
        filter : 'blur(10px)'
      }}
      animate ={{
        opacity:1,
   
        filter : 'blur(0px)'
      }}
      transition={ {
        duration : 1,
        ease : 'easeInOut'
      }}
      className="bg-gradient-to-r pt-7  font-semibold text-xs md:text-2xl from-neutral-300  to-neutral-500 bg-clip-text text-transparent">  Our platform offers everything you need to create <br />professional, ATS-friendly resumes  that help you land interviews. </motion.h1>
     
     <motion.div 
     whileInView='visible'
     variants={parentVarient}
      initial = 'hidden'
  
      
     className="md:grid md:grid-cols-3 flex flex-col p-3 items-center  ">
   
   {features.map((itm,index)=>(
    <motion.div 

    variants={childrenVarient}
    key={index} className="hover:scale-101 transition-transform delay-75 cursor-pointer px-5 relative py-12 m-6  bg-gradient-to-b from-zinc-900 to-neutral-950 rounded-2xl shadow-lg border-1">
    <div 
      className="absolute blur-md    bottom-0 inset-x-40   w-[40%] h-[1px]  bg-gradient-to-r from-cyan-600 to-blue-600"></div>
     
    <div className="absolute top-0 blur-lg w-[20%] h-[2px]  bg-blue-700"></div>
    <span className="text-neutral-300 ">{itm.comp}</span>
    <h1 className="text-2xl my-2 font-semibold text-neutral-50 text-left">{itm.heading}</h1>
    <h1 className="text-lg  text-left text-neutral-500">{itm.desc}</h1>
   </motion.div>))}
   </motion.div>
   </motion.div>
   <motion.div
   initial = {{
    opacity : 0,
    y:100
   }}
   whileInView={ {
    opacity :1,
    y : 0
   }}
   transition={ {
    duration : 0.3,
    ease : 'easeIn'
   }}
   className="min-h-screen w-full bg-neutral-950  ">

    <motion.h1
    initial ={{
      y:50,
      opacity : 0
    }}
    whileInView={ {
      opacity : 1 ,
      y : 0
    }}
    className="md:text-5xl text-4xl bg-gradient-to-r bg-clip-text text-transparent via-neutral-400 to-neutral-300  font-semibold  text-center pt-43 pb-2 md:pb-6">Simple pricing </motion.h1>
    <h1 

    className="md:text-xl text-xs text-neutral-200 text-center "> Choose the plan that works best for your career stage. No hidden fees.</h1>


    <motion.div variants={parentVarient} whileInView='visible' initial='hidden' className="md:grid flex items-center justify-center flex-col md:grid-cols-3 md:p-20 md:px-25">
    {pricing.map((itm, index) => (


  <motion.div
  variants={childrenVarient}
    key={index}
    className={`${itm.head === 'Pro' && 'md:scale-112 border-1  border-slate-400'} text-neutral-50 bg-zinc-900 border-2 rounded-xl mx-auto mt-8 md:mx-15  md:h-138 w-90 md:w-79 pt-5 pb-10 px-4 flex flex-col justify-between`}
  >
    <div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">{itm.head}</h1>
        {itm.head === 'Pro' && (
          <h1 className="bg-gradient-to-r font-bold p-2 px-5 border-2 border-neutral-100  from-neutral-500  to-cyan-200 text-transparent bg-clip-text text-md rounded-xl">
            Popular
          </h1>
        )}
      </div>

      <h1 className="font-semibold text-3xl pt-7">{itm.price}</h1>
      <h1 className="text-xl font-semibold text-neutral-200 pt-10">{itm.role}</h1>
      <h1 className="text-neutral-400 pt-5 pl-2">✓ {itm.task}</h1>
      <h1 className="text-neutral-400 pl-2">✓ {itm.templates}</h1>

      <div className="text-neutral-400 pl-2">
        {itm.features.map((feature, i) => (
          <div key={i}>✓ {feature}</div>
          
        ))}
      </div>
    </div>

    {/* Button pushed to bottom */}
    <div className="flex justify-center mt-2 ">
      <Button  variant={'outline'} className="w-50 mt-6 text-md text-neutral-50">{itm.button}</Button>
    </div>
  </motion.div>
  
))}

    </motion.div>
   </motion.div>
   <motion.div
  className="min-h-screen pt-34 w-full bg-neutral-950"
>
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="md:text-5xl text-4xl text-center font-semibold bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text"
  >
    Frequently Asked Questions
  </motion.h1>

  <motion.div 
  initial='hidden'
  whileInView='visible'
  transition={{
    duration : 0.5,
    ease : 'easeInOut'
  }}
  variants={parentVarient}
  className="max-w-4xl mx-auto px-4 pt-12">
    {accordian.map((item, index) => (
      <motion.div
      variants={childrenVarient}
        key={index}
        onClick={() => handleClick(index)}
        className="cursor-pointer my-4 p-4 border border-neutral-700 rounded-xl transition-colors hover:bg-neutral-900"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-neutral-100">{item.question}</h2>
          <ArrowUp
            size={20}
            className={`transition-transform ${
              show === index ? 'rotate-180' : 'rotate-0'
            } text-neutral-400`}
          />
        </div>
        <AnimatePresence>
          {show === index && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="pt-2 text-sm text-neutral-400"
            >
              {item.answers}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

   <motion.div
   initial={{opacity :0 , y :70}}
   whileInView={{opacity : 1 , y : 0}}
   transition={{duration : 0.3,
    ease : 'easeInOut'
   }}
   className="h-screen md:pt-5 w-full bg-neutral-950">
    <Testimonial/>
   </motion.div>
   </div>
    </>)
}