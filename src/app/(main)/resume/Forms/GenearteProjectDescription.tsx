'use client'

import { Button } from "@/components/ui/button";
import { WandSparklesIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useTheme } from "next-themes";

export default function GenerateAIWorkExperience() {

  const [showDialog, setShowDialog] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDialog(true);
  };

  return (
    <>
      <Button variant="outline" onClick={handleButtonClick}>
        Generate with AI
        <WandSparklesIcon className="ml-2 h-4 w-4" />
      </Button>

      <InputDialog open={showDialog} onOpenChange={setShowDialog} />
    </>
  );
}

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function InputDialog({ open, onOpenChange }: DialogProps) {
  const {theme} = useTheme()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null); // Store the full response as an object
  const form = useForm({
    defaultValues: { prompt: "" },
  });

  useEffect(() => {
    if (data) {
      console.log("Generated Data:", data);
    }
  }, [data]);

  async function onSubmit(input: { prompt: string }) {
    try {
      setLoading(true);
      const res = await axios.post("/api/generateprodesc", { prompt: input.prompt });
      console.log("API Response:", res.data); // Log the entire API response
      setData(res.data); // Extract the text from the API response

      toast.success("Experience generated!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
 
    <Dialog  open={open} onOpenChange={onOpenChange}>
      <DialogContent className="mask-b-from-95%">
        <DialogHeader>
          <DialogTitle className="mx-auto">Generate Project Description</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className={`text-center flex justify-center m-3 ${theme ==='light' ? ' text-neutral-700' : 'text-neutral-400'}`} >Describe the type of project that you made.</label>
            <Textarea {...form.register("prompt")} placeholder="Give details about your project..." />
          </div>
          <div className="flex justify-center">
          <Button  className="mt-5" size={'lg'} type="submit">
            {loading ? 'Generating' : 'Generate'}
          </Button>
             </div>
         
        </form>

        {data ? (
          <DialogHeader className="">
            <DialogTitle className="mx-auto text-center"> Generated Project Description</DialogTitle>
            <div className={`${theme === 'light'? 'text-neutral-800' : 'text-neutral-400' } `}>{data.split('*').map((itm,index)=>(
              <div key={index}>
              {itm}
              </div>
            ))}</div> {/* Display the extracted work experience */}
          </DialogHeader>
        ) :  <div className="flex justify-center">Please provide details</div>}
      </DialogContent>
    </Dialog>
    
  );
}
               