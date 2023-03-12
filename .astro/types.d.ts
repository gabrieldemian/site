declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"blog": {
"n.mdx": {
  id: "n.mdx",
  slug: "n",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
"teste.mdx": {
  id: "teste.mdx",
  slug: "teste",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
},
"portfolio": {
"codyfight.md": {
  id: "codyfight.md",
  slug: "codyfight",
  body: string,
  collection: "portfolio",
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] },
"dashboard.md": {
  id: "dashboard.md",
  slug: "dashboard",
  body: string,
  collection: "portfolio",
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] },
"dots.md": {
  id: "dots.md",
  slug: "dots",
  body: string,
  collection: "portfolio",
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] },
"p2p-chat.md": {
  id: "p2p-chat.md",
  slug: "p2p-chat",
  body: string,
  collection: "portfolio",
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] },
"the-vault.md": {
  id: "the-vault.md",
  slug: "the-vault",
  body: string,
  collection: "portfolio",
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
