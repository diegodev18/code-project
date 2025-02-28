
export async function getGithubFileContent(owner: string, name: string, filePath: string[]) {
    const url = `https://api.github.com/repos/${owner}/${name}/contents/${filePath.join("/")}`;
    // https://github.com/diegodev18/code-project-docs/blob/master/your-own-git/c/001-index.md

    let content = null;
    let error = null;

    try {
        const response = await fetch(url);
        
        if (response.statusText === "rate limit exceeded") {
            return {
                data: "# Alcanzaste el límite de peticiones a la API de los DOCs.",
                error: null
            }
        }

        const data = await response.json();
        content = decodeURIComponent(escape(atob(data.content))); // Decodificar correctamente
    } catch (error) {
        error = error;
    }

    return { data: content, error }
}

export async function getGithubDirContent(owner: string, name: string, dirPath: string[]) {
    const url = `https://api.github.com/repos/${owner}/${name}/contents/${dirPath.join("/")}`;
    // https://github.com/diegodev18/code-project-docs/blob/master/your-own-git/c/001-index.md

    let data = {
        filesLength: null,
        filesName: []
    };
    let error = null;

    try {
        const response = await fetch(url);
        const dataJson = await response.json();
        
        if (response.status === 403) return { data, error: response.status }

        data.filesLength = dataJson.length;
        data.filesName = dataJson.map((file: any) => {
            if (file.type === "file") {
                return file.name;
            }
        });
    } catch (error) {
        error = error;
    }

    return { data, error };
}
