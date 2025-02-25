import type { APIRoute } from "astro";

const links: { [key: string]: string } = {
    "docs": "https://github.com/diegodev18/code-project-docs",
    "pay": "https://github.com/sponsors/diegodev18",
    "form": "https://tally.so/r/mBAl87"
}

export const GET: APIRoute = async ({ params, redirect }) => {
    const param = params.link;

    if (!param) {
        return redirect("/404");
    }

    const link = links[param as keyof typeof links];

    if (!link) {
        return redirect("/404");
    }

    return redirect(link);
}
