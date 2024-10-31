export interface ProjectProps {
  project: {id: number;
  title: string;
  summary: string;
  description: string;
  source: string;
  thumbnail: string;
  skillStack: string[];
  selected: boolean;
  date: string;}
}

export type ProjectsProps = ProjectProps[];
