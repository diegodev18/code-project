import { supabase } from "@/lib/supabase";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const progressItem = formData.get("progressItem");
  const data = JSON.parse(progressItem as string);

  const uuid = data.uuid; // Usuario a buscar (diego-dev018)

  if (
    !uuid ||
    !data.id_project ||
    !data.file ||
    typeof data.status === null ||
    !data.lang
  ) {
    return new Response(
      `Missing parameters -> ${uuid} | ${data.id_project} | ${data.file} | ${data.status} | ${data.lang}`,
      { status: 400 },
    );
  }

  const { data: User } = await supabase
    .from("users")
    .select("progress")
    .eq("id", uuid)
    .single();
  const progress = User?.progress;

  if (
    progress &&
    progress.find(
      (item: any) =>
        item.id_project === data.id_project &&
        item.lang === data.lang &&
        item.status === data.status,
    )
  ) {
    // console.log('Ya existe un progreso para este proyecto');
    return redirect(`/projects/${data.id_project}/${data.lang}/001-index`);
  }

  if (!User) {
    return redirect("/profile");
  }

  delete data.uuid;
  let newProgress;
  const index = progress.findIndex(
    (item: any) =>
      item.id_project === data.id_project &&
      item.lang === data.lang &&
      item.status !== data.status,
  );
  if (progress && index !== -1) {
    // Si ya existe un progreso para este proyecto pero con otro status
    newProgress = [...progress];
    newProgress[index]["status"] = data.status; // Actualiza el status
    newProgress[index]["file"] = data.file; // Actualiza el archivo
  } else {
    newProgress = progress.concat(data);
  }

  const { error: updateError } = await supabase
    .from("users")
    .update({ progress: newProgress })
    .eq("id", uuid);

  if (updateError) {
    return new Response("Error updating progress", { status: 500 });
  }

  if (data.id_project && data.lang && data.file) {
    return redirect(`/projects/${data.id_project}/${data.lang}/${data.file}`);
  }
  return redirect(`/projects/${data.id_project}/${data.lang}/001-index`); // projects/your-own-git/c/inicio
};
