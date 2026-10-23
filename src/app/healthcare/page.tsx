import { ProjectPage, projectMetadata } from "@/components/shared/ProjectPage";
import { getProject } from "@/data/projects";

const project = getProject("healthcare");

export const metadata = projectMetadata(project);

export default function HealthcarePage() {
  return <ProjectPage project={project} />;
}
