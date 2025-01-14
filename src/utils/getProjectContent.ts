import { supabase } from "@/lib/supabase";
import { processMarkdown } from "./processMarkdown";

export default async function (id: string, lang: string, title: string) {
    const { data, error } = await supabase
        .storage
        .from('projects')
        .download(`${id}/${lang}/${title}.md`);

    if (error) {
        console.error(error);
        return [];
    }
    
    const markdown = await data?.text();
    const content = await processMarkdown(markdown);

    return {
        render: content.html,
        data: {
            num: content.frontmatter.num,
            id: content.frontmatter.id,
            title: content.frontmatter.id,
            description: content.frontmatter.description
        }
    };
}

