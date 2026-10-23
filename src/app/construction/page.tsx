import { ProjectPage, projectMetadata } from "@/components/shared/ProjectPage";
import { getProject } from "@/data/projects";

const project = getProject("construction");

export const metadata = projectMetadata(project);

export default function ConstructionPage() {
  return <ProjectPage project={project} />;
}
