import Projects from "@/db/projects";
import Profiles from "@/db/profiles";

export default function (id_project: string, id_user: number): number {
    const project = Projects.find(project => project.id === id_project);
    const progress = Profiles.find(profile => profile.acc_id === id_user)?.progress.find(progress => progress.id_project === id_project)?.status;

    if (!project || !progress) return 0;

    // const length = getProjectsContent(project);
    const length = 10;

    return Math.round((progress / length) * 100); // retorna el porcentaje
}