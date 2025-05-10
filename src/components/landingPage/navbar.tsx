import { SquarePen } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Navbar(){

  const content = {
features : ['Features',
'Pricing',
'Testimonials',
'FAQ ']
  }



  return(<>
  
  <div className=" w-full  h-10 flex items-center justify-between md:px-45 p-7   bg-black">
    <div className="justify-between flex items-center "><SquarePen size={30} className="pr-1 text-purple-700"/> <h1 className="md:text-lg font-semibold text-purple-800">ResumeBuilder </h1></div>
   
   <div className=" md:block hidden space-x-10">{content.features.map((itm,index)=>(<span className="text-lg text-neutral-500" key={index}>{itm}</span>))}</div>
    <div className="flex items-center">
      <Link href={'/resume'}>
      <button className="md:text-lg text-sm font-semibold mr-2 text-neutral-300">Login</button>
      </Link>
      <Link href={'/resume'}> 
      <Button size={'sm'} className="md:text-lg md:p-2 md:bg-neutral-800 md:text-neutral-200 rounded-2xl">Get Started</Button>
      </Link>
    </div>
  </div>
  
  </>)
}