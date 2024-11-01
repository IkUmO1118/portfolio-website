export interface ProjectProps {
  id: number;
  title: string;
  summary: string;
  description: string;
  githubURL: string;
  thumbnail: string;
  skillStack: string[];
  selected: boolean;
  createdAt: string;
}

export type ProjectsProps = ProjectProps[];

export interface ResumeProps {
  id: number;
  type: string;
  duration: string;
  title: string;
  description: string;
}

export type ResumesProps = ResumeProps[];
