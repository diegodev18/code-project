import { supabase } from "@/lib/supabase";
import getProjects from "@/utils/getProjects";
import { getGithubDirContent } from "@/utils/getGithubDocContent";

const Projects = await getProjects();

export default async function (id_project: string, uuid: string): Promise<{ progress: number, percentaje: number, lenguage: string }> {
    if (!Projects) {
        throw new Error("Projects is null");
    }
    let { data: progressTable } = await supabase
        .from('users')
        .select('progress')
        .eq('id', uuid)
        .single();

    let progress = progressTable?.progress.find((progress: any) => progress.id_project === id_project);
    const lenguage = progress?.lang;

    const project = Projects.find(project => project.id === id_project);

    if (!project || !progress) {
        return {
            progress: 0,
            percentaje: 0,
            lenguage: 'none'
        }; // retorna 0 si no existe el proyecto o el progreso
    }

    const { data, error } = await getGithubDirContent("diegodev18", "code-project-docs", [project.id, lenguage]);
    const length = data?.filesLength ?? 0;

    return {
        progress: progress.status,
        percentaje: progress.status < length ? Math.round((progress?.status / length) * 100) : 100,
        lenguage: lenguage ?? 'none'
    }; // retorna el porcentaje
}