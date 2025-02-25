import { supabase } from "@/lib/supabase";
import { getGithubDirContent } from "./getGithubDocContent";

export default async function (id: string, lang: string) {
    const { data, error } = await getGithubDirContent("diegodev18", "code-project-docs", [id, lang])

    if (error) {
        console.error(error);
        return [];
    }

    return data.filesName;
}

