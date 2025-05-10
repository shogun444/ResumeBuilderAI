"use client"

import { cn } from "@/lib/utils"
import { ResumeValue } from "@/lib/validation"
import { useRef } from "react"
import useDimensions from "../../Hooks/UseDimension"
import {formatDate} from 'date-fns'
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, Linkedin, LinkIcon, Mail, Phone } from "lucide-react"


interface ResumePreview{
  resumeData : ResumeValue,
  className? : string,
  contentRef? : React.Ref<HTMLDivElement>
}

export default function Preview({resumeData,className,contentRef}:ResumePreview){
  
  const containerRef = useRef<HTMLDivElement>(null)

  const {width} =  useDimensions(containerRef)
  return(<>
  <div
  ref={containerRef}
  className={cn(
    "bg-white text-black h-fit w-[80%] aspect-[210/297]",className)}>
      <div
      className={cn("space-y-6",!width && 'invisible')}
      style={{
        zoom : (1/794) * width
      }}
      ref={contentRef}
      id="ResumePrint"
      >
<PersonalInfo resumeData={resumeData}/>
<SummarySection resumeData={resumeData}/>
<Education resumeData={resumeData}/>
<Projects resumeData={resumeData}/>
<WorkExperience resumeData={resumeData}/>

<Skills resumeData={resumeData}/>
</div>
  </div>
  </>)
}

interface ResumeSectionProps{
  resumeData : ResumeValue
}



function PersonalInfo({resumeData} : ResumeSectionProps){

const {firstname,lastname,jobtitle,city,country,phone,email,colorHex,linkedin,githublink} = resumeData


return(<>
<div  className="items-center gap-4 pl-8 pt-10">
  <div className="flex justify-between items-center">
    <div> 
  <div style={{
    color : colorHex
  }}  className="text-2xl font-semibold flex  ">
    <h1 className="pr-2">
      {firstname}</h1>
    <h1>{lastname}</h1>
    </div>
    <div   className="flex gap-3">
    <p style={{
    color : colorHex
  }} className=" font-semibold text-md text-neutral-800 ">{jobtitle}

    </p>
    </div>
   
    <p className=" font-semibold text-md text-neutral-500">
      {city}
      {city && country? ',' : ''}
      {country}
   
   
    </p>
    
    </div>

    <div className="pr-8 flex-col ">
   
       <Link href={`${linkedin}`} className="font-semibold text-md text-neutral-600">{linkedin ? <div className="flex items-center"><Linkedin className="pr-1  text-neutral-900" size={20}/>{linkedin}</div> : <></>}</Link>
       <div>
    <Link href={`${githublink}`} className="font-semibold text-md text-neutral-600">{githublink? <div className="flex items-center"><Github className="pr-1 text-neutral-900" size={20}/>{githublink}</div> : <></>}</Link> 
    </div>
    <div className=" flex space-x-2 font-semibold text-md text-neutral-600">
   {phone ? <div className="flex items-center">    
    <Phone className="pr-1  text-neutral-900" size={20 }/> {phone}</div> : <></>}     {phone && email? '|' : ''} {email?
  <div className="flex pl-3 items-center "><Mail size={20} className="pr-1  text-neutral-900"/>{email}</div> : <></>  
  }
    </div> 
    </div>
 
  </div>


</div>
</>)
}

function Projects({resumeData} : ResumeSectionProps){
const {projects,colorHex} = resumeData
const checkProjects = projects?.filter((itm)=> Object.values(itm).filter(Boolean).length>0) 

if(!checkProjects?.length){
  return null
}
return(<>
<div className="px-8">
<hr className="border-2" style={{
   
  }}/>
<p style={{
    color : colorHex
  }} className="text-2xl font-semibold ">Project</p>
{checkProjects.map((itm,index)=>(<div key={index} className="break-inside-avoid space-y-1 mt-2">
  <div className="text-md font-semibold ">
    <div className="flex justify-between  "> 
    <p style={{
    color : colorHex
  }} className="text-neutral-800">{itm.title}</p>
  <Link 
  style={{
    color : colorHex
  }}
  href={`${itm.link}`} className="text-neutral-800 ">{itm.link}</Link>
  
  
    </div>
    <span className="text-neutral-700 font-semibold ">Techstack - {itm.techstack}</span>
    <div className="text-zinc-500 ">{itm.description}</div>
 



  </div>
  
</div>))}
</div>
</>)
}


function SummarySection({resumeData} : ResumeSectionProps){
  const {summary,colorHex} = resumeData
  if(!summary) return null
  return(<>
  <div className="px-8"> 
  <hr style={{

  }} className="border-2 "/>
  <p style={{
    color : colorHex
  }} className="text-2xl font-semibold ">Summary</p>
  <p className=" text-neutral-500 font-semibold">
      {summary}
  </p>
  </div>
  </>)
}

function WorkExperience({resumeData}:ResumeSectionProps){
const {workexperience,colorHex} = resumeData
 const checkWorkExp = workexperience?.filter((itm)=>  Object.values(itm).filter(Boolean).length > 0)

 if(!checkWorkExp?.length)
 {
  return null
 }

return(<>
<div className="px-8">
<hr className="border-2" style={{
   
  }}/>
<p style={{
    color : colorHex
  }} className="text-2xl font-semibold ">Work Experience</p>
{checkWorkExp.map((itm,index)=>(<div key={index} className="break-inside-avoid ">
  <div className="flex items-center justify-between text-md font-semibold ">

    <p style={{
    color : colorHex
  }} className="text-neutral-800">{itm.company}</p>
    
 
  <div className="text-neutral-800  whitespace-nowrap" style={{
    color : colorHex
  }}>
  
    {itm.startDate && (<span className="">
    {formatDate(itm.startDate,"dd MMM yyyy")}-{""}
    {itm.endDate ? <span className="">{formatDate(itm.endDate,"dd MMM yyyy" ) }</span> : "Present"}
  </span>)} 
 

  </div>
  </div>
  <div className="text-neutral-700 font-semibold">{itm.postion}</div>
  <div className="text-neutral-500 font-semibold ">{itm.description}</div>
</div>))}
</div>
</>)
}




function Education({resumeData} : ResumeSectionProps){
  const {education,colorHex} = resumeData

 const checkEducation = education?.filter((itm)=>(
  Object.values(itm).filter(Boolean).length > 0
 ))

  if(!checkEducation){
    return null
  }
  return(<>
  <div className="px-8">
<hr className="border-2" style={{
    
  }}/>
<p style={{
    color : colorHex
  }} className="text-2xl font-semibold ">Education</p>
{checkEducation.map((itm,index)=>(<div key={index} className="break-inside-avoid space-y-1">
  <div className="flex items-center justify-between text-md font-semibold ">
    <div className="flex flex-col"> 
    <span  
    style={{
      color : colorHex
    }}
    className="text-neutral-700">{itm.degree}</span>
   
    <span className="text-neutral-500">{itm.collegeName}</span>
    </div>
 
  <span style={{
    color : colorHex
  }}>
  
    {itm.startDate && (<span>
    {formatDate(itm.startDate,"dd MMM yyyy")}-{""}
    {itm.endDate ? <span>{formatDate(itm.endDate,"dd MMM yyyy" ) }</span> : "Present"}
  </span>)} 
 

  </span>
  </div>

</div>))}
</div>
</>
)
}

function Skills({resumeData} : ResumeSectionProps){
 
  const {skills,colorHex} = resumeData
  if(!skills?.length ){
    return null
  }
  return(<>
  <div className="px-8"> 
<hr className="border-2" style={{
     
  }}/>
<p style={{
    color : colorHex
  }} className="text-2xl font-semibold ">Skills</p>
<div className=" ">
{skills.map((itm,index)=>(<Badge style={{
    color : colorHex
  }} className="mr-4 mt-2 text-white bg-neutral-400"   key={index}>{itm}</Badge>))}
</div>
</div>
  </>)
}