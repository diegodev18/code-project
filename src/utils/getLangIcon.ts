import CIcon from '@/components/icons/lenguages/cIcon.astro';
import RustIcon from '@/components/icons/lenguages/rustIcon.astro';
import PythonIcon from '@/components/icons/lenguages/pythonIcon.astro';
import JavaScriptIcon from '@/components/icons/lenguages/javaScriptIcon.astro';
import TypeScriptIcon from '@/components/icons/lenguages/typeScriptIcon.astro';
import JavaIcon from '@/components/icons/lenguages/javaIcon.astro';
import CPlusIcon from '@/components/icons/lenguages/cPlusPlusIcon.astro';
import CSharpIcon from '@/components/icons/lenguages/cSharpIcon.astro';
import GoIcon from '@/components/icons/lenguages/goIcon.astro';
import RubyIcon from '@/components/icons/lenguages/rubyIcon.astro';

const icons = {
    c: { component: CIcon, width: 60, height: 60 },
    python: { component: PythonIcon, width: 60, height: 60 },
    javascript: { component: JavaScriptIcon, width: 60, height: 60 },
    typescript: { component: TypeScriptIcon, width: 60, height: 60 },
    java: { component: JavaIcon, width: 60, height: 60 },
    cPlusPlus: { component: CPlusIcon, width: 60, height: 60 },
    cSharp: { component: CSharpIcon, width: 60, height: 60 },
    go: { component: GoIcon, width: 60, height: 60 },
    ruby: { component: RubyIcon, width: 60, height: 60 },
    rust: { component: RustIcon, width: 60, height: 60 },
}

export default (icon: string) => {
    return icons[icon.toLowerCase() as keyof typeof icons] || { component: null, width: 0, height: 0 };
}
