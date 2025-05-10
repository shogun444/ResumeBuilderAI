'use client'

import { generalSchema, GeneralSchemaType } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import PersonalInfoFOrm from "./personalInfoForm"

export default function GeneralInfo({ data, setResumeData }: any) {
 const {theme} = useTheme()

  

  const form = useForm<GeneralSchemaType>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      title: data.title || "",
      description: data.description || "",
    },
  })

  useEffect(() => {
    const subscription = form.watch((value) => {
      setResumeData((prev: any) => ({
        ...prev,
        ...value,
      }))
    })

    return () => subscription.unsubscribe()
  }, [form])

  function onSubmit(values: GeneralSchemaType) {
    //setResumeData((prev : any)=>({...prev,...values}))
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-semibold text-2xl mt-3">General Info (Not for Your Resume)</h1>
        <h1 className="font-semibold text-lg mt-2 text-neutral-600">
          This section helps us understand what kind of resume you want to build.
        </h1>
      </div>
      <div
        className={`p-4 border-1 mt-7 mx-7 rounded-xl shadow-lg ${
          theme === 'dark' ? 'bg-transparent' : 'bg-neutral-50'
        }`}
      >
        <div className="font-semibold text-sm w-full pb-11">Resume Foundation</div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input   className="placeholder:text-sm"
 placeholder="My cool Resume" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input   className="placeholder:text-sm"
 placeholder="A Resume for my next Job." {...field} />
                  </FormControl>
                  <FormDescription   className="placeholder:text-sm"
>
                    Describe the kind of job you are applying for.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center">
        
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
 