import { supabase } from "@/lib/supabase";

export default async function (): Promise<{ num: number; id: string; created_at: Date; title: string; description: string; icon: string; lenguages: string[]; href: string; tags: string[]; status: string }[]> {
    let { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .eq("status", "public")
        .order("created_at", { ascending: false });
    if (error) {
        throw new Error(error.message);
    }
    if (!projects) {
        return [];
    }
    return projects;
}
