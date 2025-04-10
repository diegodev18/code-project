import type { APIRoute } from "astro";
import links from "@/db/links";

export const GET: APIRoute = async ({ params, redirect }) => {
  const param = params.link;

  if (!param) {
    return redirect("/404");
  }

  const link = links[param as keyof typeof links];

  if (!link) {
    return redirect("/404");
  }

  return redirect(link.href);
};
