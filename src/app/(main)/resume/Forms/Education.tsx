"use client"
import { education, EducationSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { GripHorizontal } from "lucide-react";
import {closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors} from '@dnd-kit/core'
import {arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy} from '@dnd-kit/sortable'
import {restrictToVerticalAxis} from '@dnd-kit/modifiers'
import {CSS} from '@dnd-kit/utilities'
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes";

export default function Education({data,setResumeData}:any){
  
   const form = useForm<education>({
      resolver: zodResolver(EducationSchema),
      defaultValues: {
        education : data.education || []
      
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
    name : "education"
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
      <h1 className="font-semibold text-2xl mt-3">Education 
        </h1>
        <h1 className="font-semibold text-lg mt-2 text-neutral-600">
      Please enter your Educational Qualification details.</h1>
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
   <EducationItem 
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
  <Button className="mt-5" onClick={()=>append({
   degree : "",
   endDate : "",
   school : "",
   startDate : "",
   collegeName : ""
  })}>Add your Education Qualification  </Button>
</div>
</Form>
      
    </div>
  </>)
}


interface educationProps{
  id : string
  form : UseFormReturn<education>
  index : number,
  remove : (index : number) =>void
  }
  
  
  function EducationItem({id,form,index,remove}:educationProps){
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
      <div className="flex items-center justify-between mb-7"> <span className="font-semibold md:text-sm  text-xs w-full">Educational Details {index + 1}</span>
      <GripHorizontal 
    size={36}
    className="cursor-grab hover:ring-1 p-1 rounded-md"
    {...attributes}
    {...listeners}/></div>
     
    
             <div className="mt-4">



    <FormField 
            control={form.control}
            name={`education.${index}.degree`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Degree/12th/10th</FormLabel>
                <FormControl>
                  <Input   className="placeholder:text-sm" placeholder="Degree Name or Class 12th or Class 10th" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-4">
          <FormField 
            control={form.control}
            name={`education.${index}.collegeName`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Insitution</FormLabel>
                <FormControl>
                  <Input   className="placeholder:text-sm" placeholder="College Name/School Name" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
           
         </div>
            <div className="grid grid-cols-2 gap-15 mt-4">
                       
    <FormField
            control={form.control}
            name={`education.${index}.startDate`}
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
                  name={`education.${index}.endDate`}
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
            <div  className="flex justify-center mb-5 text-sm text-neutral-500 mt-4">
              Leave End Date empty if you are currently working there.
                </div>
  
                                   
 
  <div className=" flex justify-center">
  <Button  onClick={()=>remove(index)} className="mt-4 cursor-pointer " variant={'destructive'}>Remove</Button>
  </div>
      
    </div>
    
    
    </div>)
  }