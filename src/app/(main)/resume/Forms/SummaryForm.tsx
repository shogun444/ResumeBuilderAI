"use client"

import { Summary, SummarySchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";
import GenerateSummaryButton from "./GenerateSummaryButton";
import { useTheme } from "next-themes";


export default function SummaryForm({data,setResumeData}:any){
  const {theme} = useTheme()
   const form = useForm<Summary>({
      resolver: zodResolver(SummarySchema),
      defaultValues: {
     summary : data.summary
    },
    })
   useEffect(() => {
      const subscription = form.watch((value) => {
        setResumeData((prev : any) => ({
          ...prev,
          ...value,
        }));
      });
    
      return () => subscription.unsubscribe();
    }, [form]);
  
  return(<>
    
  
    <Form {...form}>
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-semibold text-2xl mt-3">Summary 
        </h1>
        <h1 className="font-semibold text-lg mt-2 text-neutral-600">
       Write a short Introduction or let AI Generate it from your entered data.
      </h1>
    </div>
   
    <div className={`border-1 p-1 mt-7 mx-7  rounded-xl shadow-lg ${theme === 'dark'? 'bg-transparent' : 'bg-neutral-50' }`}>

        <div className="font-semibold text-sm w-full  pl-3 pb-8  pt-3">About Me </div>

        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem className="w-full  p-2">
             
             <FormLabel  className="pl-1">Brief Introduction</FormLabel>
              
              
              <FormControl>
                <Textarea
                  {...field}
                    className="placeholder:text-sm"
                  placeholder="Write a Short Introduction about yourself"
                />
              </FormControl>
             
              <FormMessage />
              <GenerateSummaryButton
              resumeData={data}
              onSummarygenerate={(summary)=>form.setValue("summary",summary)}
              />
               <FormDescription className="text-[14px] text-neutral-600 mx-auto">
    You can also use Generate it from AI
  </FormDescription>
            </FormItem>
          )}
        />
        </div>
        
    </Form>

    </>)
}