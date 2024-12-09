import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string(),
		link: z.string(),
		sortOrder: z.number(),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		hero: z.string(),
		link: z.string().optional(),
	}),
});

export const collections = {
	portfolio,
	blog,
};
