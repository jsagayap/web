import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/works" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image(),
    date: z.coerce.date(),
    category: z.string(),
    technologies: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    tags: z.array(z.string()),
  })
})

export const collections = { works };