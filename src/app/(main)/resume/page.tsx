'use client'
import React, { useState, useEffect, useRef } from "react";
import GeneralInfo from "./Forms/generalInfo";
import PersonalInfoFOrm from "./Forms/personalInfoForm";
import ResumeEditor from "./ResumeEditor";
import { ResumeValue } from "@/lib/validation";
import WorkExperienceForm from "./Forms/workExperience";
import Education from "./Forms/Education";
import Skills from "./Forms/Skills";
import SummaryForm from "./Forms/SummaryForm";
import ResumePreviewSection from "./Forms/ResumePreviewSection";
import { ChevronRight, PrinterIcon } from "lucide-react";
import {useReactToPrint} from 'react-to-print'
 import useAutoSave from "../Hooks/UseAutoSave";
import Projects from "./Forms/Projects";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Resume() {

const contentRef = useRef<HTMLDivElement>(null)
 const {theme} = useTheme()


  const [resumedata, setResumeData] = useState<ResumeValue>({} as ResumeValue);
  const [windowWidth, setWindowWidth] = useState(0);

  const {isSaving,unsaved} = useAutoSave(resumedata)

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const print = useReactToPrint({
    documentTitle : resumedata?.title || 'Title',
     contentRef
  })
  const [showPreview,setShowPreview] = useState(false)
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  // This useEffect ensures that the component renders only after it has mounted on the client side
  useEffect(() => {
    setMounted(true); // Set mounted to true after the component is mounted on the client
  }, []);

  const breadcrumbs = [
    { title: 'General Info', component: <GeneralInfo data={resumedata} setResumeData={setResumeData} /> },
    { title: 'Personal Info', component: <PersonalInfoFOrm data={resumedata} setResumeData={setResumeData} /> },
    { title: 'Work Experience', component: <WorkExperienceForm data={resumedata} setResumeData={setResumeData} /> },
    { title: 'Education', component: <Education data={resumedata} setResumeData={setResumeData} /> },
    { title: 'Projects', component: <Projects data={resumedata} setResumeData={setResumeData} /> },
    { title: 'Skills', component: <Skills data={resumedata} setResumeData={setResumeData} /> },
    { title: 'Summary', component: <SummaryForm data={resumedata} setResumeData={setResumeData} /> },

  ];

  function handleClick(index: number) {
    setActive(index);

    const newTitle = breadcrumbs[index].title.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    params.set('tab', newTitle);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl); // 🔥 Update URL without page reload
  }

  if (!mounted) {
    return null; // Prevent rendering until the component is mounted on the client
  }

  return (
    <>
      <main className="w-full h-20 text-center">
        <h1 className="font-semibold md:text-3xl mt-14   text-2xl md:mt-7 text-neutral-700">Your AI Assistant for Building the Perfect Resume</h1>
        <h1 className="font-semibold text-[17px] p-3  md:pb-2   text-neutral-500">
          No templates. No guesswork. Just role-specific, recruiter-ready resumes in minutes.
        </h1>
      </main>

      <div className="min-h-screen mt-17 flex flex-col md:flex-row gap-5 md:p-5 ">
  {/* Form Section */}
  {(windowWidth >= 768 || !showPreview) && (
    <div className="w-full md:w-[45%] p-3 rounded-xl border-2">
      <div className="gap-2">
        {breadcrumbs.map((itm, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => handleClick(index)}
              className={`mr-1 cursor-pointer ${active === index ? 'text-neutral-700' : 'text-neutral-400'}`}
            >
              <span className="flex text-sm  md:text-md items-end md:gap-1 gap-2">
                {itm.title}
                <h1>{index < breadcrumbs.length  && <ChevronRight className="md:block hidden"  size={20} />}</h1>
              </span> 
            </button>
          </React.Fragment>
        ))}
        <hr className="mt-2 shadow-lg"/>
        <div className="mt-5">{breadcrumbs[active].component}</div>
        <div className="flex gap-10 m-15 justify-center">
          <Button  
          disabled={active === 0}
          className={` ${theme === 'light'?  ' rounded-md hover:cursor-pointer hover:bg-neutral-300  text-neutral-950 bg-neutral-50' : ''  } ${active === 0? 'bg-neutral-50  text-neutral-50' : 'bg-neutral-400'}`} onClick={()=>setActive(prev =>prev-1)}>Prev</Button>
          
          <Button 
          disabled={active === breadcrumbs.length-1}
          className={` ${theme === 'light'?  ' rounded-md hover:cursor-pointer hover:bg-neutral-300  text-neutral-950 bg-neutral-50' : ''  } ${active === breadcrumbs.length-1? 'bg-neutral-50 text-neutral-50' : 'bg-neutral-400'}`}  onClick={()=>setActive(prev => prev+1)}>Next</Button>
        </div>
      </div>
    </div>
  )}

  {/* Resume Preview Section */}
  {(windowWidth >= 768 || showPreview) && (
    <div className="w-full md:w-[55%] h-full border-2 p-2 rounded-xl">
      <div className="flex justify-between items-center m-3">
      <h1 className="text-center flex items-center text-2xl text-neutral-900 font-semibold ">Resume Preview</h1>
      <Button onClick={()=>print()} className="text-md cursor-pointer">Export as PDF <PrinterIcon/></Button>
      </div>
      <ResumePreviewSection
        resumeData={resumedata}
        setResumeData={setResumeData}
        contentRef={contentRef}
      />
    </div>
  )}
</div>

    
      <main>
        <ResumeEditor 
        isSaving={isSaving}
        setShowPreview={setShowPreview}
        showPreview={showPreview}
        />
      </main>
    </>
  );
}
