async function getGithubAPI(url: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3.raw",
    },
  });
  return response;
}

export async function getGithubFileContent(
  owner: string,
  name: string,
  filePath: string[],
) {
  const url = `https://api.github.com/repos/${owner}/${name}/contents/${filePath.join("/")}`;
  // https://github.com/diegodev18/code-project-docs/blob/master/your-own-git/c/001-index.md

  let content = null;
  let error = null;

  try {
    const response = await getGithubAPI(url);

    if (response.statusText === "rate limit exceeded") {
      return {
        data: "# Alcanzaste el límite de peticiones a la API de los DOCs.",
        error: null,
      };
    }

    const data = await response.text();
    content = data;
  } catch (error) {
    error = error;
    console.log({ error });
  }

  return { data: content, error };
}

export async function getGithubDirContent(
  owner: string,
  name: string,
  dirPath: string[],
) {
  const url = `https://api.github.com/repos/${owner}/${name}/contents/${dirPath.join("/")}`;
  // https://github.com/diegodev18/code-project-docs/blob/master/your-own-git/c/001-index.md

  let data = {
    filesLength: null,
    filesName: [],
  };
  let error = null;

  try {
    const response = await getGithubAPI(url);
    const dataJson = await response.json();

    if (response.status === 403) return { data, error: response.status };

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

export async function getContributors(
  owner: string,
  repo: string,
): Promise<{
  contributors: {
    login: string;
    avatar_url: string;
    html_url: string;
    contributions: number;
  }[];
  error: string | null;
}> {
  let data: {
    contributors: {
      login: string;
      avatar_url: string;
      html_url: string;
      contributions: number;
    }[];
    error: string | null;
  } = {
    contributors: [],
    error: null,
  };

  try {
    const response = await getGithubAPI(
      `https://api.github.com/repos/${owner}/${repo}/contributors`,
    );
    const dataJson = await response.json();

    data.contributors = dataJson
      .map((contributor: any) => {
        return {
          login: contributor.login,
          avatar_url: contributor.avatar_url,
          html_url: contributor.html_url,
          contributions: contributor.contributions,
        };
      })
      .sort(
        (a: { contributions: number }, b: { contributions: number }) =>
          b.contributions - a.contributions,
      );
  } catch (error) {
    data.error = error;
  }

  return { contributors: data.contributors, error: data.error };
}
