import CircleDashedPlus from "@/components/icons/circleDashedPlus.astro";
import profiles from "@/db/profiles";
import projects from "@/db/projects";

export default function (user_email: string) {
    const profile = profiles.find((profile) => profile.email === user_email);    
    const progress_projects = profile?.favorites?.map((fav) => projects.find((project) => project.id === fav.id_project));

    const addFav = {
        num: 1,
        id: 'add-fav',
        title: 'Añade tus proyectos favoritos',
        description: 'Añade tus proyectos favoritos para tenerlos siempre a mano.',
        icon: {
            width: 90,
            height: 90,
            component: CircleDashedPlus
        },
        href: ''
    };

    return progress_projects?.concat(addFav);
}