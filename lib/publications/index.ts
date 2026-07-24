import { publications } from "@/data/publications/registry";

export function getPublications() {
  return publications;
}

export function getPublicationBySlug(slug: string) {
  return publications.find((publication) => publication.slug === slug);
}
