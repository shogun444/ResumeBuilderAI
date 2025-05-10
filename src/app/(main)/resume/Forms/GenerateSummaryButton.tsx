import { Button } from "@/components/ui/button";
import { ResumeValue } from "@/lib/validation";
import { LoaderCircle, WandSparklesIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface GenerateProp {
  resumeData: ResumeValue;
  onSummarygenerate: (summary: string) => void;
}

export default function GenerateSummaryButton({
  resumeData,
  onSummarygenerate,
}: GenerateProp) {
  const [loading, setLoading] = useState(false);

  async function handle() {
    try {
      setLoading(true);
      const res = await fetch("/api/generateSummary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resumeData),
      });

      if (!res.ok) {
        throw new Error("Failed to generate summary");
      }

      const summary = await res.text();
      onSummarygenerate(summary);
      toast.success("Summary generated!");
    } catch (error) {
      console.error(error);
      toast.error("Error generating summary.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handle}
      className="flex items-center gap-2 w-fit justify-center mx-auto  mt-4"
      
      disabled={loading}
    >
      {loading ? (
        <>
          Generating...
          <LoaderCircle className="animate-spin" size={20} />
        </>
      ) : (
        <>
          Generate using AI
          <WandSparklesIcon size={20} />
        </>
      )}
    </Button>
  );
}
