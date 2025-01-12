import profiles from "@/db/profiles";
import getProjects from "@/lib/getProjects";

const Projects = await getProjects();

export default function (user_name: string) {
    const profile = profiles.find((profile) => profile.user_name === user_name);    
    const progress_projects = profile?.progress?.map((progress) => Projects?.find((project) => project.id === progress.id_project));

    return progress_projects;
}