"use client"
import { Button } from "@/components/ui/button";
import { project, ProjectSchema, ResumeValue } from "@/lib/validation";
import { DragEndEvent,DndContext,closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { GripHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import {CSS} from '@dnd-kit/utilities'
import { Textarea } from "@/components/ui/textarea";
import GenerateAIWorkExperience from "./GenearteProjectDescription";

export default function Projects({data,setResumeData}:any){
  const form = useForm<project>({
        resolver: zodResolver(ProjectSchema),
        defaultValues: {
          projects : data.projects || []
        
        }
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
      
     const {fields,remove,append,move}= useFieldArray({
      control : form.control,
      name : "projects"
     })
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
        
  return(<>
   <div className="flex justify-center items-center flex-col">
      <h1 className="font-semibold text-2xl mt-3">Projects 
        </h1>
        <h1 className="font-semibold text-lg mt-2 text-neutral-600">
        Showcase of My Projects.</h1>
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
   <ProjectItem 
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
   description  : "",
   link : "",
   title : "",
   techstack : ""
  })}>Add your Projects  </Button>
</div>
</Form>
      
    </div>
  </>)
}


interface projectProps{
  id : string
  form : UseFormReturn<project>
  index : number,
  remove : (index : number) =>void
  }
  
  
  function ProjectItem({id,form,index,remove}:projectProps){
    const{ theme }= useTheme()
    const {attributes,listeners,setNodeRef,transform,transition,isDragging} = useSortable({id})
    return(
    <div> 
    <div 
      ref={setNodeRef}
      style={{
        transform : CSS.Transform.toString(transform),
        transition
      }}
    className={  cn(`${theme === 'dark' ? 'bg-transparent' :  'bg-neutral-50 '}  shadow-lg border-1 rounded-xl p-4`,
      isDragging && 'shadow-lg z-50 relative '
    )}>
      <div className="flex items-center justify-between mb-7"> <span className="font-semibold md:text-sm text-xs  w-full">Project Details {index + 1}</span>
       <div>
          <GenerateAIWorkExperience/>
          </div>
      <GripHorizontal 
    size={36}
    className="cursor-grab hover:ring-1 p-1 rounded-md"
    {...attributes}
    {...listeners}/></div>
     
    
             <div className="mt-4">



    <FormField 
            control={form.control}
            name={`projects.${index}.title`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input   className="placeholder:text-sm" placeholder="Name of the Project." {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4 space-y-5 md:grid md:grid-cols-2 gap-14">
          <FormField 
            control={form.control}
            name={`projects.${index}.techstack`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>TechStack/Technologies used</FormLabel>
                <FormControl>
                  <Input   className="placeholder:text-sm" placeholder="Nextjs Tailwind Prisma" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />

<FormField 
            control={form.control}
            name={`projects.${index}.link`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link</FormLabel>
                <FormControl>
                  <Input   className="placeholder:text-sm" placeholder="resumeapp.vercel.12yok" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="mt-4"> </div> 
<FormField 
            control={form.control}
            name={`projects.${index}.description`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea   className="placeholder:text-sm" placeholder="Description of your project" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
         </div>
                       
    
            
                    
 
  <div className=" flex justify-center">
  <Button  onClick={()=>remove(index)} className="mt-4 cursor-pointer " variant={'destructive'}>Remove</Button>
  </div>
      
    </div>
    
    
    </div>)
  }