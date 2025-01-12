import { supabase } from "@/lib/supabase";

export default async function () {
    let { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .order("num", { ascending: false });
    if (error) {
        throw new Error(error.message);
    }
    return projects;
}
