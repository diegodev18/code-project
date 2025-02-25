
async function getGithubFileContent(owner: string, name: string, filePath: string[]) {
    const url = `https://api.github.com/repos/${owner}/${name}/contents/${filePath.join("/")}`;
    // https://github.com/diegodev18/code-project-docs/blob/master/your-own-git/c/001-index.md

    let content = null;
    let error = null;

    try {
        const response = await fetch(url);
        const data = await response.json();
        content = decodeURIComponent(escape(atob(data.content))); // Decodificar correctamente
    } catch (error) {
        error = error;
    }

    return { data: content, error }
}

export default getGithubFileContent;
