"use client"

import { useEffect, useState } from "react"

import { ResumeValue } from "@/lib/validation"
import useDebounce from "./UseDebounce"

export default function useAutoSave(Data :  ResumeValue ) {
  const debouncedResumeData = useDebounce({ value: Data, delay: 800 })
  const [lastSavedData, setLastSavedData] = useState(() => structuredClone(Data))
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    async function save() {
      setIsSaving(true)
      await new Promise((resolve) => setTimeout(resolve, 800)) // simulate API call
      setLastSavedData(structuredClone(debouncedResumeData))
      setIsSaving(false)
    }

    const unsavedChanges =
      JSON.stringify(debouncedResumeData) !== JSON.stringify(lastSavedData)

    if (unsavedChanges && !isSaving) {
      save()
    }
  }, [debouncedResumeData, isSaving, lastSavedData])

  const unsaved = JSON.stringify(debouncedResumeData) !== JSON.stringify(lastSavedData)

  return {
    isSaving,
    unsaved,
  }
}
