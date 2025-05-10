"use client"

import { ResumeValue } from "@/lib/validation"
import Preview from "../ResumePreview/preview"

import ColorPicker from "../ResumePreview/colorPicker"
import { cn } from "@/lib/utils"

interface ResumePreviewSection{
  resumeData : ResumeValue,
  setResumeData : (data : ResumeValue)=>void,
  className? : string,
  contentRef? : React.Ref<HTMLDivElement>
}


export default function ResumePreviewSection({resumeData,setResumeData,className,contentRef}:ResumePreviewSection){

  return(<>
  <div className={cn("w-full h-screen md:full md:flex",className)}>
  
    <div className="flex w-full h-screen justify-center rounded-xl  overflow-y-auto bg-neutral-200 p-2 pt-5">
   
    <div>
    <ColorPicker
    color={resumeData.colorHex}
    onChange={(color) => setResumeData({...resumeData,colorHex : color.hex})}
    />
    </div>
    <Preview
    contentRef={contentRef} 
    className='max-w-2xl shadow-lg'
    resumeData={resumeData} />



    </div>
  
  </div>
  </>)
}