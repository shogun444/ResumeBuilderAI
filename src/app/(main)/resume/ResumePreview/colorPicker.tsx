"use client"
import { useState } from 'react'

import {Color, ColorChangeHandler, TwitterPicker} from 'react-color'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from '@/components/ui/button'
import { PaletteIcon } from 'lucide-react'

interface ColorProps{
  color : Color | undefined,
  onChange  : ColorChangeHandler
}

export default function ColorPicker({color,onChange}:ColorProps){
  const [showPop,setShowPop] = useState(false)
  return(<>
  <Popover open={showPop} onOpenChange={setShowPop}>
  <PopoverTrigger asChild>
<Button onClick={()=>setShowPop(true)} variant={'outline'}>
<PaletteIcon className='size-5'></PaletteIcon>
</Button>
  </PopoverTrigger>
  <PopoverContent
  className='bg-transparent border-none shadow-none'
  >
  <TwitterPicker className='absolute' color={color}  onChange={onChange} triangle='hide'/>
  </PopoverContent>
 
 
  </Popover>
  </>)
} 