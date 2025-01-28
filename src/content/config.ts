import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    category: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = { articles };