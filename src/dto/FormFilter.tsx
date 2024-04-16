"use client"

import { z } from "zod"

export const formFilterSchema = z.object({
  word: z.string(),
})
