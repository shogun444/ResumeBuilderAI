"use client"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { workexperience, workExperienceSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form"
import {
  
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { GripHorizontal } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import {closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core'
import {arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable'
import {restrictToVerticalAxis} from '@dnd-kit/modifiers'
import {CSS} from '@dnd-kit/utilities'
import { cn } from "@/lib/utils"
import GenerateAIWorkExperience from "./GenerateWorkExperience"
import { useTheme } from "next-themes"




export default function WorkExperienceForm({data,setResumeData} :  any){
  const form = useForm<workexperience>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
   workexperience : data.workexperience || []
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


  const {fields,append,remove,move } = useFieldArray({
    control : form.control, // control props comes from useForm (optional: if you are using FormProvider)
    name: "workexperience", // unique name for your Field Array
  });
  
  const sensors = useSensors(
    useSensor(PointerSensor),
 
  )
  function handleDrag(event : DragEndEvent){
const {active,over} = event

if(over && active.id != over.id){
const oldIndex = fields.findIndex(field => field.id === active.id)
const newIndex = fields.findIndex(field => field.id === over.id)
move(oldIndex,newIndex)
return arrayMove(fields,oldIndex,newIndex)
}
  }

  return( <>
  <div className="flex justify-center items-center flex-col">
      <h1 className="font-semibold text-2xl mt-3">Work Experience
        </h1>
        <h1 className="font-semibold text-lg mt-2 text-neutral-600">
     Add your Work Experience.</h1>
    </div>
  <div className="p-7">
<Form {...form}>
<form className="space-y-3">
  <DndContext
  sensors={sensors}
  collisionDetection={closestCenter}
  onDragEnd={handleDrag}
  modifiers={[restrictToVerticalAxis]}
  >
    <SortableContext
    items={fields}
    strategy={verticalListSortingStrategy}
    >
  {fields.map((feild,index) => (
   <WorkItem
   id={feild.id}
   key={feild.id}
   index={index}
   form={form}
   remove={remove}
   />

  ))}
  </SortableContext>
  </DndContext>
</form>
<div className="flex justify-center">
  <Button 
  type="button"
  className="mt-5" onClick={()=>append({
    postion : "",
    company : "",
    description : "" ,
    endDate : "",
    startDate : ""
  })}>Add your work Experience</Button>
</div>
</Form>
    </div>
  
  </>)
}

interface workexperienceItemProps{
  id : string
form : UseFormReturn<workexperience>
index : number,
remove : (index : number) =>void
}


function WorkItem({id,form,index,remove}:workexperienceItemProps){
const {theme} = useTheme()
  const {attributes,listeners,setNodeRef,transform,transition,isDragging} = useSortable({id})
  return(
  <div> 
  <div 
  ref={setNodeRef}
  style={{
    transform : CSS.Transform.toString(transform),
    transition
  }}
  className={cn(`${theme === 'dark' ? 'bg-transparent' :  'bg-neutral-50 '}  shadow-lg border-1 rounded-xl p-4`,
    isDragging && 'shadow-lg z-50 relative '
  )}>
    <div className="flex items-center justify-between mb-7"> <span className="font-semibold 
    md:text-sm text-xs  w-full">Work Experience {index + 1}</span>

    <div>
    <GenerateAIWorkExperience/>
    </div>

    <GripHorizontal 
    size={36}
    className="cursor-grab hover:ring-1 p-1 rounded-md"
    {...attributes}
    {...listeners}
    /></div>

  <FormField
          control={form.control}
          name={`workexperience.${index}.postion`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm" placeholder="Which Position did you work as?" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
           <div className="mt-4">
  <FormField 
          control={form.control}
          name={`workexperience.${index}.company`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input   className="placeholder:text-sm" placeholder="Which Company did you work at?" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
       </div>
          <div className="grid grid-cols-2 gap-15 mt-4">
                     
  <FormField
          control={form.control}
          name={`workexperience.${index}.startDate`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input 
                  
                type="date"
                placeholder="When did you start working?" {...field}
                value={field.value?.slice(0,10)}
                />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />         
        <FormField
                control={form.control}
                name={`workexperience.${index}.endDate`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input placeholder="When was your last date at this company?" {...field}
                      type="date"
                      value={field.value?.slice(0,10)}
                      />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
             
          </div>
          <div  className="flex justify-center text-sm mb-5 text-neutral-500 mt-4">
            Leave End Date empty if you are currently working there.
              </div>

                                 
  <FormField
          control={form.control}
          name={`workexperience.${index}.description`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
              <Textarea 
              {...field}
                className="placeholder:text-sm"
              placeholder="Description of your Role at the Company."/>
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />   
                                        


<div className=" flex justify-center">
<Button onClick={()=>remove(index)} className="mt-4 " variant={'destructive'}>Remove</Button>
</div>
    
  </div>
  
  
  </div>)
}