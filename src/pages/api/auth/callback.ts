import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
    const authCode = url.searchParams.get("code");

    if (!authCode) {
        return new Response("No code provided", { status: 400 });
    }

    const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);

    if (error) {
        return redirect("/?error=Failed to sign in");
    }

    const { access_token, refresh_token } = data.session;

    cookies.set("sb-access-token", access_token, {
        path: "/",
    });
    cookies.set("sb-refresh-token", refresh_token, {
        path: "/",
    });

    return redirect("/");
};