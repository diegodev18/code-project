import profiles from "@/db/profiles";
import projects from "@/db/projects";

export default function (user_name: string) {
    const profile = profiles.find((profile) => profile.user_name === user_name);    
    const progress_projects = profile?.favorites?.map((fav) => projects.find((project) => project.id === fav.id_project));

    const addFav = {
        num: 1,
        id: 'add-fav',
        title: 'Añade tus proyectos favoritos',
        description: 'Añade tus proyectos favoritos para tenerlos siempre a mano.',
        icon: 'CircleDashedPlus',
        href: '',
        lenguages: [],
        tags: [],
    };

    if (!progress_projects) return [addFav];
    return progress_projects?.concat(addFav);
}