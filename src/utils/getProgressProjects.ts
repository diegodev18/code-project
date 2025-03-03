import { supabase } from "@/lib/supabase";

export default async function (uuid: string) {
    let { data: User } = await supabase // Trae la lista de proyectos en progreso (y completados) del usuario
        .from("users")
        .select("progress")
        .eq("id", uuid)
        .single();
        
    if (!User?.progress) return [];
    const progressProjects = User?.progress;

    const found = await Promise.all(progressProjects.map(async (onProgress: any) => {
        const { data: project } = await supabase
            .from("projects")
            .select("*")
            .eq("id", onProgress.id_project)
            .single();
        return project;
    }));

    console.log(found);

    if (!found) return [];
    return found;
}