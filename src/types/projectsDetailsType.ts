import { ProjectType } from "@/types/ProjectType";
import { DescriptionType } from "./descriptionType";

export type projectsDetailsType = Omit<ProjectType, 'image'> & {
  images: string[];
  description: DescriptionType[];
  gitHub: string;
  demoLink: string;
};