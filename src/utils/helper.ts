export interface ProjectProps {
  id: number;
  title: string;
  summary: string;
  description: string;
  source: string;
  thumbnail: string;
  skillStack: string[];
  selected?: boolean;
  createdAt: string;
}

export type ProjectsProps = ProjectProps[];
