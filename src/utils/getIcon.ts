import BashIcon from "@/components/icons/brands/bashIcon.astro";
import GitIcon from "@/components/icons/brands/gitIcon.astro";
import LinuxIcon from "@/components/icons/brands/linuxIcon.astro";
import CircleDashedPlus from "@/components/icons/circleDashedPlus.astro";

const icons = {
    Git: {
        width: 80,
        height: 80,
        component: GitIcon
    },
    Bash: {
        width: 80,
        height: 80,
        component: BashIcon
    },
    Linux: {
        width: 90,
        height: 90,
        component: LinuxIcon
    },
    CircleDashedPlus: {
        width: 90,
        height: 90,
        component: CircleDashedPlus
    }
} as const;

export default function getIcon(icon: string) {
    return icons[icon as keyof typeof icons] || icons['Git'];
}