"use server";
import { z } from "zod";

// zod schemas for the incoming JSON
const IncomingShortZ = z.object({
  name: z.string(),
  company: z.string(),
  position: z.string(),
  package: z.string(),
  photo: z.string(),
  shortId: z.string(),
});
const IncomingRootZ = z.object({ placedCandidates: z.array(IncomingShortZ) });

// local type you render with
export type ShortItem = {
  id: string;
  title?: string;
  name?: string;
  role?: string;
  location?: string;
  salary?: string;
  thumb: string;
};

// helper for typed JSON dynamic import
type JsonModule<T> = { default: T };

export async function getPlacedCandidates(): Promise<ShortItem[]> {
  const { default: raw } = (await import(
    "@/content/studentReview/placed-canditate.json"
  )) as JsonModule<unknown>;

  // validate + narrow unknown → typed data
  const parsed = IncomingRootZ.parse(raw);

  const base = "/images/shorts/"; // change if your images live elsewhere
  return parsed.placedCandidates.map((p) => ({
    id: p.shortId,
    name: p.name,
    role: p.position,
    salary: p.package,
    title: `${p.name} | ${p.position} | uniq jobs`,
    thumb: p.photo.startsWith("/") ? p.photo : `${base}${p.photo}`,
  }));
}
