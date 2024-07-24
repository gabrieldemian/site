import { defineCollection, z } from "astro:content";

const portfolioCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		link: z.string(),
		sortOrder: z.number(),
	}),
});

export const collections = {
	portfolio: portfolioCollection,
};
