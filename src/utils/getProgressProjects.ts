import { supabase } from "@/lib/supabase";

export default async function (uuid: string) {
    let { data: User } = await supabase // Trae la lista de proyectos en progreso (y completados) del usuario
        .from("users")
        .select("progress")
        .eq("id", uuid)
        .single();
        
    if (!User?.progress) return [];
    const progressProjects = User?.progress;

    const found = await Promise.all(progressProjects.map(async (onProgress: any) => { // Trae la información de cada proyecto en progreso
        const { data: project } = await supabase // Busca el proyecto en la tabla de proyectos
            .from("projects")
            .select("*")
            .eq("id", onProgress.id_project)
            .single();
        return project;
    }));

    if (!found) return [];
    return found;
}