import { TechnologyType } from '@/types/TechnologyType';

export type ProjectType = {
  slug: string;
  image: string;
  name: string;
  info: string;
  technologies: TechnologyType[];
};
