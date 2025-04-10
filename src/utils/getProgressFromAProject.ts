import { allProjects } from "@/utils/getAllProjects";
import { getGithubDirContent } from "@/utils/getGithubDocContent";
import getUserProgress from "./getUserProgress";

const progressObj = {
  progress: 0,
  percentaje: 0,
  lenguage: "none",
};

export default async function (
  id_project: string,
  uuid: string,
): Promise<{ progress: number; percentaje: number; lenguage: string }> {
  if (!allProjects) throw new Error("Projects is null");

  const progressTable = await getUserProgress(uuid);
  if (!progressTable) return progressObj;

  let progress = progressTable?.find(
    (progress: any) => progress.id_project === id_project,
  );
  const lenguage = progress?.lang;

  const project = allProjects.find((project) => project.id === id_project);

  if (!project || !progress) return progressObj;

  const { data } = await getGithubDirContent(
    "diegodev18",
    "code-project-docs",
    [project.id, lenguage],
  );
  const length = data?.filesLength ?? 0;

  return {
    progress: progress.status,
    percentaje:
      progress.status < length
        ? Math.round((progress?.status / length) * 100)
        : 100,
    lenguage: lenguage ?? "none",
  }; // retorna el porcentaje
}
