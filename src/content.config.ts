import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/works" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    start: z.date(),
    end: z.date(),
    category: z.string(),
    technologies: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()),
  })
})

export const collections = { works };