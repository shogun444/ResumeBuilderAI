"use client"

import { personalInfoSchema, PersonalType } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { useTheme } from "next-themes"

export default function PersonalInfoFOrm({data,setResumeData} :  any){
  const {theme} = useTheme()
  const form = useForm<PersonalType>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
 city : data.city || "",
 country : data.country || "",
 email : data.email || "",
 firstname : data.firstname || "",
 jobtitle : data.jobtitle || "",
 lastname : data.lastname || "",
 phone : data.phone || "",
 linkedin : data.linkedin || "",
 githublink : data.githublink || ""
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
  
  // 2. Define a submit handler.
  function onSubmit(values: PersonalType) {
   //setResumeData((prev : any) => ({...prev,...values}))

  }
  return(<>
  <div className="flex justify-center items-center flex-col">
      <h1 className="font-semibold text-2xl mt-3">Personal Info
        </h1>
        <h1 className="font-semibold text-lg mt-2 text-neutral-600">
     Tell us about yourself.</h1>
    </div>
   
  <div className={`p-4 border-1  mt-7 mx-7  rounded-xl shadow-lg ${theme === 'dark'? 'bg-transparent' :'bg-neutral-50'}`}>
  <div className="font-semibold text-sm w-full   pb-11 ">Your  Profile </div>
  
  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="md:grid md:grid-cols-2  gap-2 space-y-5">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="John" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm">
                This will be your public First name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel >Last Name</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="Doe" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm"
>
                This will be your public Last name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
       
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel   
>Email</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="johndoe@mail.com" {...field} />
              </FormControl>
              <FormDescription>
                This will be your public display Email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:grid md:grid-cols-2 gap-2 space-y-5">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel >City</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="Pune" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm"
>
                This is your public display current city.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel   className="placeholder:text-sm"
>Country</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="India" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm"
>
                Enter the name of your Country.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="md:grid md:grid-cols-2 gap-2 space-y-5">
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="https://www.linkedin.com/in/your-profile" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm"
>
                Enter your linkedin profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githublink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="https://github.com/your-username" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm"
>
                Enter your Github Profile Link.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
       <div className="md:grid md:grid-cols-2 gap-5 space-y-5">
       <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="123456789" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm"
>
                Enter your mobile number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="jobtitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm"
 placeholder="Fullstack Web developer" {...field} />
              </FormControl>
              <FormDescription   className="placeholder:text-sm"
> 
                Enter the job title that you are applying for.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>

        
      </form>
    </Form>
    </div>
  </>)
}