import { supabase } from "@/lib/supabase";
import profiles from "@/db/profiles";

export default async function (user_name: string) {
    const favorites = profiles.find((profile) => profile.user_name === user_name)?.favorites;

    if (!favorites) return [];

    let { data: projects } = await supabase
        .from("projects")
        .select("id, title, description, icon, href")
        .in("id", favorites);

    return projects ? projects : [];
}