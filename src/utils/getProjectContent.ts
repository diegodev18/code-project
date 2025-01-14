import { supabase } from "@/lib/supabase";

export default async function (id: string, lang: string, title: string) {
    const { data, error } = await supabase
        .storage
        .from('projects')
        .download(`${id}/${lang}/${title}.md`);

    if (error) {
        console.error(error);
        return [];
    }
        
    const content = data?.text();

    return content;
}

