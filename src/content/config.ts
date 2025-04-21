import { defineCollection, z } from "astro:content";

const about = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { about, blog };
