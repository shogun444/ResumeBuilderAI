"use client"
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
import { useEffect } from "react"
import { skillSchema, skillSchemaType } from "@/lib/validation"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "next-themes"
export default function Skills({ data, setResumeData }: any) {
  const {theme} = useTheme()
  const form = useForm<skillSchemaType>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      skills: data.skills || "",
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

  return (
    <>
      
      <Form {...form}>
  <div className="flex justify-center items-center flex-col">
    <h1 className="font-semibold text-2xl mt-3">Skills</h1>
    <h1 className="font-semibold text-lg mt-2 text-neutral-600">
      Please enter your Skills.
    </h1>
    </div>
    <div className={`border-1  mt-7 mx-7  rounded-xl shadow-lg ${theme === 'dark'? 'bg-transparent' : 'bg-neutral-50' }`}>

    <div className="font-semibold text-sm w-full  pl-4 pb-7 pt-4">Your Expertise </div>
      <FormField
        control={form.control}
        name="skills"
        render={({ field }) => (
          <FormItem className="p-3">
            <FormLabel className="pl-1">What are you good at?</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                onChange={(e) => {
                  const skills = e.target.value.split(",");
                  field.onChange(skills);
                }}
                placeholder="eg. React.js, Next.js, Node.js, Tailwind"
              />
            </FormControl>
            <FormDescription className="text-[15px] mt-2 mb-1 mx-auto">
              **Separate Each Skill with a comma
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

</Form>

    </>
  )
}
