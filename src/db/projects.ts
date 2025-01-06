import GitIcon from "@/components/icons/brands/gitIcon.astro"

const projects = [
    {
        num: 1,
        id: 'your-own-git',
        title: 'Construye tu propio Git',
        description: 'Construye tu propio sistema de control de versiones desde cero.',
        icon: {
            width: 80,
            height: 80,
            component: GitIcon
        },
        href: '/projects/your-own-git/c/introduction'
    }
]

export default projects