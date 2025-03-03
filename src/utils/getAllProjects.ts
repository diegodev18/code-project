import { supabase } from "@/lib/supabase";

export default async function (): Promise<{ num: number; id: string; created_at: Date; title: string; description: string; icon: string; lenguages: string[]; href: string; tags: string[]; status: string }[]> {
    let { data: projects, error } = await supabase // Trae la lista de proyectos públicos
        .from("projects")
        .select("*")
        .eq("status", "public")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching projects in getProjects.ts", error);
        return [];
    }
    if (!projects) return [];

    // console.log(projects);

    return projects;
}
