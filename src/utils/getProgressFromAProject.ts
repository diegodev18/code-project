import { supabase } from "@/lib/supabase";
import getProjects from "@/utils/getProjects";
import { countFiles } from "@/utils/getFilesInAFolder";

const Projects = await getProjects();

export default async function (id_project: string, user_name: string): Promise<{ progress: number, percentaje: number, lenguage: string }> {
    if (!Projects) {
        throw new Error("Projects is null");
    }
    let { data: progressTable } = await supabase
        .from('users')
        .select('progress')
        .eq('user_name', user_name)
        .single();

    const progress = progressTable?.progress.find((progress: any) => progress.id_project === id_project);
    const lenguage = progress?.lang;

    const project = Projects.find(project => project.id === id_project);

    if (!project || !progress) {
        return {
            progress: 0,
            percentaje: 0,
            lenguage: 'none'
        }; // retorna 0 si no existe el proyecto o el progreso
    }

    // const length = getProjectsContent(project);
    const length = await countFiles(`./src/content${project.href}/c`);

    return {
        progress: progress?.status,
        percentaje: Math.round((progress?.status / length) * 100),
        lenguage: lenguage ?? 'none'
    }; // retorna el porcentaje
}