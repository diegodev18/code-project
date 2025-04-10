import { supabase } from "@/lib/supabase";
import getUserProgress from "@/utils/getUserProgress";

export default async function (uuid: string) {
  const progressProjects = await getUserProgress(uuid);
  if (!progressProjects) return [];

  const found = await Promise.all(
    progressProjects.map(async (onProgress: any) => {
      // Trae la información de cada proyecto en progreso
      const { data: project } = await supabase // Busca el proyecto en la tabla de proyectos
        .from("projects")
        .select("*")
        .eq("id", onProgress.id_project)
        .single();
      return project;
    }),
  );

  if (!found) return [];
  return found;
}
