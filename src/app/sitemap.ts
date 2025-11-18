// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/course";
import { COURSE_LOCATIONS, locSlug } from "@/data/courseNav";
import { listBlogs, listCategories, listTags } from "@/data/blog";

const SITE = "https://www.uniqjobs.co.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs();

  const homePage: MetadataRoute.Sitemap = [
  { 
    url: `${SITE}/`, 
    lastModified: new Date(), 
    changeFrequency: "daily",
    priority: 1.0 
  }
];

  const contactPage: MetadataRoute.Sitemap = [
    { url: `${SITE}/contact-us`, lastModified: new Date() },
  ];
  const studentsReviewPage: MetadataRoute.Sitemap = [
    { url: `${SITE}/placements/students-review`, lastModified: new Date() },
  ];

  const courseBase: MetadataRoute.Sitemap = [
    { url: `${SITE}/courses`, lastModified: new Date() },
  ];

  const coursePages = slugs.map((course) => ({
    url: `${SITE}/courses/${course}`, 
    lastModified: new Date(),
  }));

  const cityPages = slugs.flatMap((course) =>
    (COURSE_LOCATIONS[course] ?? []).map((city) => ({
      url: `${SITE}/courses/${course}/${locSlug(city)}`,
      lastModified: new Date(),
    }))
  );

  const now = new Date();
  const postsRes = await listBlogs(1, 50); 
  if (!Array.isArray(postsRes.posts)) return [];       
  const posts = postsRes.posts ?? [];
  const cats = await listCategories();
  const tags = await listTags();

  interface BlogPost {
    slug: string;
    updatedAt?: string;
    publishedAt?: string;
  }

  interface Category {
    slug?: string;
    name: string;
  }

  interface Tag {
    slug?: string;
    name: string;
  }

  const blogBase: MetadataRoute.Sitemap = [
    { url: `${SITE}/blogs`, lastModified: now },
  ];

  const postUrls = posts.map((p: BlogPost) => ({
    url: `${SITE}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(p.publishedAt || now),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const catUrls = (cats ?? []).map((c: Category) => ({
    url: `${SITE}/blogs/category/?category=${encodeURIComponent(c.slug ?? c.name)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const tagUrls = (tags ?? []).map((t: Tag) => ({
    url: `${SITE}/blogs/tag/?tag=${encodeURIComponent(t.slug ?? t.name)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));


  return [
    ...homePage,
    ...contactPage,
    ...studentsReviewPage,
    ...courseBase,
    ...coursePages,
    ...cityPages,
    ...blogBase,
    ...postUrls,
    ...catUrls,
    ...tagUrls,
  ];
}
