import { ProjectPage, projectMetadata } from "@/components/shared/ProjectPage";
import { getProject } from "@/data/projects";

const project = getProject("coaching");

export const metadata = projectMetadata(project);

export default function CoachingPage() {
  return <ProjectPage project={project} />;
}
