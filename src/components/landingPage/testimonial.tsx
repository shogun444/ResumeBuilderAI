import { motion } from "motion/react";



export default function Testimonial(){
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Frontend Developer at PixelCraft",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback: "The AI Resume Builder saved me hours! It understood my experience and generated a clean, professional resume in minutes. Landed 3 interviews within a week.",
    },
    {
      name: "Rohan Mehta",
      role: "Fullstack Engineer at CodeNest",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback: "I was struggling to highlight my technical skills properly, but this tool structured everything so well. The AI suggestions were shockingly good.",
    },
    {
      name: "Sneha Iyer",
      role: "UI/UX Designer at BrightIdeas",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback: "I love how intuitive and fast the resume builder is. The design templates are beautiful, and the AI made it feel like I had a personal career coach.",
    },
    {
      name: "Arjun Singh",
      role: "Backend Developer at StackForge",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      feedback: "Honestly, this is the best resume builder I've used. It tailored my resume to backend roles perfectly and even helped me fix small grammar issues I’d missed.",
    },
    {
      name: "Divya Patel",
      role: "Product Manager at AppHive",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
      feedback: "As someone switching careers, the AI Resume Builder helped me frame my transferable skills in a way that made sense. Total game-changer.",
    }
  ];
  
  return(<>
  <h1 className="pt-20 text-3xl md:text-5xl bg-gradient-to-r bg-clip-text text-transparent via-neutral-400 to-neutral-300  font-semibold  text-center">Testimonials</h1>
  <div className="overflow-hidden w-full pt-30">
  <motion.div 
  initial={{x : '0%'}}
  animate = {{x : '-10%'}}
  transition={ {
    repeat : Infinity,
    repeatType : 'loop',
    duration : 15,
    ease : 'linear'
  }}
  className="flex w-max gap-10">
  {[...testimonials,...testimonials].map((itm,index)=>(<div key={index} className="border-1 p-4 rounded-md h-70 md:w-100 w-80 font-semibold text-neutral-50">
    <div className="flex items-center"> 
    <img className="rounded-full h-16" src={itm.avatar} alt="" />
    <div  className=" pl-5"> 
    <h1 className="text-neutral-400">{itm.name}</h1>
    <h1 className="text-sm text-neutral-600">{itm.role}</h1>
    </div>
    
    </div>
  
   
    <h1 className="mt-5">{itm.feedback}</h1>
  </div>))}
  </motion.div>
</div>
  </>)
}