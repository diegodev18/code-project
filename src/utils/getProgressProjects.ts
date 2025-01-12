import { supabase } from "@/lib/supabase";

export default async function (user_name: string) {
    let { data: User } = await supabase
        .from("users")
        .select("user_name, progress")
        .eq("user_name", user_name)
        .single();
    const progress = User?.progress;

    if (!progress) return [];

    let { data: Projects } = await supabase
        .from("projects")
        .select("icon, title, description, href, id")

    const found = Projects?.filter((project) => {
        for (let p of progress) {
            if (p.id_project === project.id) {
                return true;
            }
        }
    });

    if (!found) return [];
    return found;
}