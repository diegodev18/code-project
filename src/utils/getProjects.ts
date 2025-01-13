import { supabase } from "@/lib/supabase";

export default async function () {
    let { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .eq("status", "public")
        .order("num", { ascending: false });
    if (error) {
        throw new Error(error.message);
    }
    return projects;
}
