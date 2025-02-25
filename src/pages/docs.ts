import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect }) => {
    return redirect("https://github.com/diegodev18/code-project-docs");
}
