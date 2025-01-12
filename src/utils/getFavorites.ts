import { supabase } from "@/lib/supabase";
import profiles from "@/db/profiles";

export default async function (user_name: string) {
    let { data: user } = await supabase
        .from("users")
        .select("favorites")
        .eq("user_name", user_name)
        .single();

    const favorites = user?.favorites;

    if (!favorites) return [];

    let { data: projects } = await supabase
        .from("projects")
        .select("id, title, description, icon, href")
        .in("id", favorites);

    return projects ? projects : [];
}