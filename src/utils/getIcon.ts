import GitIcon from "@/components/icons/brands/gitIcon.astro";

const icons = {
    GitIcon: {
        width: 80,
        height: 80,
        component: GitIcon
    }
} as const;

export default function (icon: keyof typeof icons) {
    return icons[icon]
}