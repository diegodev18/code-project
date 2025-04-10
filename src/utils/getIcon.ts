import BashIcon from "@/components/icons/brands/bashIcon.astro";
import GitIcon from "@/components/icons/brands/gitIcon.astro";
import LinuxIcon from "@/components/icons/brands/linuxIcon.astro";
import CircleDashedPlus from "@/components/icons/circleDashedPlus.astro";
import NotepadIcon from "@/components/icons/brands/notepadIcon.astro";

const icons = {
  git: {
    width: 80,
    height: 80,
    component: GitIcon,
  },
  bash: {
    width: 80,
    height: 80,
    component: BashIcon,
  },
  linux: {
    width: 90,
    height: 90,
    component: LinuxIcon,
  },
  circledashedplus: {
    width: 90,
    height: 90,
    component: CircleDashedPlus,
  },
  notepad: {
    width: 90,
    height: 90,
    component: NotepadIcon,
  },
} as const;

export default function getIcon(icon: string) {
  return icons[icon.toLowerCase() as keyof typeof icons] || icons["git"];
}
