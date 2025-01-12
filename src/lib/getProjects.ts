import { supabase } from "@/lib/supabase";

export default async function () {
    let { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false });
    if (error) {
        throw new Error(error.message);
    }
    return projects;
}
