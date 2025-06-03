import { TechnologyType } from './TechnologyDetailsType';

export type ProjectType = {
  slug: string;
  image: string;
  name: string;
  info: string;
  technologies: TechnologyType[];
};
