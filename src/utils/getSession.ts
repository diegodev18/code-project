import { supabase } from "@/lib/supabase";

export default async function getSession({ cookies }: { cookies: any }) {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");
    let session;
    try {
        session = await supabase.auth.setSession({
            refresh_token: refreshToken.value,
            access_token: accessToken.value,
        });
        if (session.error) {
            return null;
        }
        return session.data.user;
    } catch (error) {
        return null;
    }
}