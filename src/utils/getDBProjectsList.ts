import { getGithubDirContent } from "@/utils/getGithubDocContent";

export default async function (id: string, lang: string) {
  const { data, error } = await getGithubDirContent(
    "diegodev18",
    "code-project-docs",
    [id, lang],
  );

  if (error) return ["403"];

  return data.filesName;
}
