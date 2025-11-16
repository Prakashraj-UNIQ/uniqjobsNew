// src/data/blog.ts
export const API_BASE = "https://uniqjobs.co.in/blog_api.php";

// All blogs (list)
// export async function listBlogs(page = 1, limit = 50) {
//   const res = await fetch(`${API_BASE}?page=${page}&limit=${limit}`, { next: { revalidate: 300 } });
//   return res.json();
// }
export async function listBlogs(page=1, limit=50, filter="") {
  const res = await fetch(`${API_BASE}?page=${page}&limit=${limit}${filter}`, { next:{revalidate:300} });
  return res.json();
}

// Single blog by slug
export async function getBlog(slug: string) {
  const res = await fetch(`${API_BASE}?slug=${slug}`, { next: { revalidate: 600 } });
  return res.json();
}

// Category list
export async function listCategories() {
  const res = await fetch(`${API_BASE}?list=categories`, { next: { revalidate: 3600 } });
  return res.json();
}

// Tag list
export async function listTags() {
  const res = await fetch(`${API_BASE}?list=tags`, { next: { revalidate: 3600 } });
  return res.json();
}
