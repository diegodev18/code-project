import GitIcon from "@/components/icons/brands/gitIcon.astro"
import LinuxIcon from "@/components/icons/brands/linuxIcon.astro"
import BashIcon from "@/components/icons/brands/bashIcon.astro"

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
        lenguages: [
            'c'
        ],
        href: '/projects/your-own-git'
    },
    {
        num: 2,
        id: 'your-own-shell',
        title: 'Creando tu propio Shell',
        description: 'Construye tu propio shell desde cero.',
        icon: {
            width: 80,
            height: 80,
            component: BashIcon
        },
        lenguages: [

        ],
        href: '/projects/your-own-shell'
    },
    {
        num: 3,
        id: 'your-own-linux-distro',
        title: 'Construye tu propia distribución de Linux',
        description: 'Construye tu propia distribución de Linux desde cero.',
        icon: {
            width: 90,
            height: 90,
            component: LinuxIcon
        },
        lenguages: [

        ],
        href: '/projects/your-own-linux-distro'
    },
]

export default projects