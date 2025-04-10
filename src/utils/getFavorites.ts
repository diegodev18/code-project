import { supabase } from "@/lib/supabase";

export default async function (uuid: string) {
  let { data: user } = await supabase
    .from("users")
    .select("favorites")
    .eq("id", uuid)
    .single();

  const favorites = user?.favorites;

  if (!favorites) return [];

  let { data: projects } = await supabase
    .from("projects")
    .select("id, title, description, icon, href")
    .in("id", favorites);

  return projects ? projects : [];
}
