
import { z} from 'zod'




const optionalString =  z.string().trim().optional()

export const generalSchema = z.object({
  title : optionalString,
  description:optionalString,
})

export type GeneralSchemaType =
z.infer<typeof generalSchema>

export const personalInfoSchema = z.object({
  firstname : optionalString,
  lastname : optionalString,
  email : z.string().email(),
  jobtitle : optionalString,
  city : optionalString,
  country : optionalString,
  phone : optionalString,
  githublink : optionalString.refine((val)=> !val || val?.includes('github.com'),{
    message : "please enter a valid github link."
  }),
  linkedin : optionalString.refine((val)=>!val || val.includes('linkedin.com'),{
    message : "please enter a valid linkedin link."
  })
})

export type PersonalType = z.infer <typeof personalInfoSchema>


export const workExperienceSchema = z.object({
  workexperience : z.array(
    z.object({
      postion : optionalString,
      company : optionalString,
      startDate : optionalString,
      endDate :  optionalString,
      description : optionalString
    })
  ).optional(),
})


export type workexperience = z.infer<typeof workExperienceSchema>


export const EducationSchema = z.object({
  education : z.array(
    z.object({
      degree : optionalString,
      collegeName : optionalString,
      school : optionalString,
      startDate :optionalString,
      endDate : optionalString
    })
  ).optional()
})



export type education = z.infer<typeof EducationSchema>

export const ProjectSchema = z.object({
  projects : z.array(
    z.object({
      title : optionalString,
      techstack : optionalString,
      description : optionalString,
      link : optionalString
    })
  ).optional()
})

export type project = z.infer<typeof ProjectSchema>


export const skillSchema = z.object({
  skills : z.array(
    z.string().trim()
  ).optional()
})

export type skillSchemaType = z.infer<typeof skillSchema>


export const SummarySchema = z.object({
  summary : optionalString
})
export type Summary = z.infer<typeof SummarySchema>

export const resumeSchema = z.object({
  ...generalSchema.shape,
  ...personalInfoSchema.shape,
  ...workExperienceSchema.shape,
  ...EducationSchema.shape,
  ...ProjectSchema.shape,
  ...skillSchema.shape,
  ...SummarySchema.shape,

  colorHex : optionalString
})

export type ResumeValue = z.infer<typeof resumeSchema> & {
  id : string
}


export const GenerateWorkExperience = z.object({
  prompt : z.string().min(5,"Must be atleast 5 characters").trim(),
  
})

export type GenerateExperience = z.infer<typeof GenerateWorkExperience> 



export const generateSummarySchema = z.object({
  jobtitle : optionalString,
  ...workExperienceSchema.shape,
  ...skillSchema.shape,
  
})

export type generateSummaryType = z.infer<typeof generateSummarySchema>