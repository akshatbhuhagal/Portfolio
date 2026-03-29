export interface ProjectTechnology {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: ProjectTechnology[];
  github?: string;
  isWorking: boolean;
}
