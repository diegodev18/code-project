import { processMarkdown } from "@/utils/processMarkdown";
import { getGithubFileContent } from "@/utils/getGithubDocContent";

export default async function (id: string, lang: string, title: string) {
    const { data, error } = await getGithubFileContent("diegodev18", "code-project-docs", [id, lang, `${title}.md`]);

    if (error) {
        console.error(error);
        return {
            render: "",
            data: {
                num: 404,
                id: "not-found",
                title: "Not found",
                description: "The requested project was not found."
            }
        };
    }
    
    const markdown = data;
    const content = await processMarkdown(markdown ?? "# Contenido no encontrado!");

    return {
        render: content.html,
        data: {
            num: parseInt(title.split("-")[0]),
            id: content.frontmatter.id,
            title: content.frontmatter.title,
            description: content.frontmatter.description
        }
    };
}

