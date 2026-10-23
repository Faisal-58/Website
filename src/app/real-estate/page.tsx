import { ProjectPage, projectMetadata } from "@/components/shared/ProjectPage";
import { getProject } from "@/data/projects";

const project = getProject("real-estate");

export const metadata = projectMetadata(project);

export default function RealEstatePage() {
  return <ProjectPage project={project} />;
}
