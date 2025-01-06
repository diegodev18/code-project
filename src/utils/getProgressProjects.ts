import profiles from "@/db/profiles";
import projects from "@/db/projects";

export default function (user_id: number) {
    const profile = profiles.find((profile) => profile.acc_id === Number(user_id));    
    const progress_projects = profile?.progress?.map((progress) => projects.find((project) => project.id === progress.id_project));

    return progress_projects;
}