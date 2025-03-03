import { supabase } from "@/lib/supabase";

export default async function(uuid: string) {
    let { data: User } = await supabase // Trae la lista de proyectos en progreso (y completados) del usuario
        .from("users")
        .select("progress")
        .eq("id", uuid)
        .single();
    
    return User?.progress ?? null;
}
