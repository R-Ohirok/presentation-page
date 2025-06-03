import { TechnologyType } from "./TechnologyType";

export type ProjectType = {
  slug: string;
  image: string;
  name: string;
  info: string;
  technologies: TechnologyType[];
};