import profiles from "@/db/profiles";
import projects from "@/db/projects";

export default function (user_email: string) {
    const profile = profiles.find((profile) => profile.email === user_email);    
    const progress_projects = profile?.progress?.map((progress) => projects.find((project) => project.id === progress.id_project));

    return progress_projects;
}