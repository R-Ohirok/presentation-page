import { projectsDetails } from '@/data/projectsDetails';

export function getProjectBySlug(slug: string) {
  return projectsDetails.find(p => p.slug === slug);
}