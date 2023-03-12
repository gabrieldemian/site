import { defineCollection, z } from 'astro:content'

const portfolioCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string(),
    sortOrder: z.number(),
  }),
})

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
})

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
}
