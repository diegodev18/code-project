import Projects from "@/db/projects";
import Profiles from "@/db/profiles";

export default function (id_project: string, id_user: number): { progress: number, percentaje: number, lenguage: string } {
    const project = Projects.find(project => project.id === id_project);
    const progress = Profiles.find(profile => profile.acc_id === id_user)?.progress.find(progress => progress.id_project === id_project);
    const lenguage = progress?.lang;

    if (!project || !progress) {
        return {
            progress: 0,
            percentaje: 0,
            lenguage: 'none'
        }; // retorna 0 si no existe el proyecto o el progreso
    }

    // const length = getProjectsContent(project);
    const length = 10;

    return {
        progress: progress?.status,
        percentaje: Math.round((progress?.status / length) * 100),
        lenguage: lenguage ?? 'none'
    }; // retorna el porcentaje
}