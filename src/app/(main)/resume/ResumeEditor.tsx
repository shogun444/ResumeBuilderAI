'use client'


import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FileUserIcon, PenLineIcon } from "lucide-react"
import { useTheme } from "next-themes"
import Footer from "./Footer"


interface preview{ 
  showPreview : boolean,
  setShowPreview : (prev : any)=>void
  isSaving : Boolean
}

export default function ResumeEditor({showPreview,setShowPreview,isSaving}:preview){

const {theme} = useTheme()

  return(<>
  
  <div className="items-center gap-2 p-4 ">



<Button

size={'icon'}
title={
  showPreview ? "Show Input Form" : "Show Resume Preview"
}
className="md:hidden  flex justify-center mx-auto items-center p-2 w-fit"
onClick={()=>setShowPreview((showPreview : boolean)=>!showPreview)}
variant={'outline'}
>{showPreview ? 'Show Form' : 'Show Resume'}</Button>
<div className="flex justify-between items-center">


</div>
<p className={cn( "opacity-0 text-center",
  isSaving && 'opacity-100 font-semibold'
)}>Saving...</p>
  </div>
<Footer/>
  </>)
}