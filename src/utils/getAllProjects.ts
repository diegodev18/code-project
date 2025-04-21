import { supabase } from "@/lib/supabase";

export const { data: allProjects, error } = import.meta.env.DEV
  ? await supabase // Trae la lista de proyectos públicos
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
  : (await supabase // Trae la lista de proyectos públicos
      .from("projects")
      .select("*")
      .eq("status", "public")
      .order("created_at", { ascending: false })) || [];
