import { supabase } from '@/lib/supabase';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const progressItem = formData.get('progressItem');
    const data = JSON.parse(progressItem as string);

    const user_name = data.user_name; // Usuario a buscar (diego-dev018)

    if (!user_name || !data.id_project || typeof(data.status) === null || !data.lang) {
        return new Response(`Missing parameters -> ${user_name} | ${data.id_project} | ${data.status} | ${data.lang}`, { status: 400 });
    }

    const { data: User } = await supabase
        .from('users')
        .select('progress')
        .eq('user_name', user_name)
        .single();
    const progress = User?.progress;

    if (progress && progress.find((item: any) => item.id_project === data.id_project && item.lang === data.lang && item.status === data.status)) {
        // console.log('Ya existe un progreso para este proyecto');
        return redirect(`/projects/${data.id_project}/${data.lang}/inicio`);
    }
    
    if (!User) {
        return redirect('/profile');
    }

    let newProgress;
    if (progress && progress.find((item: any) => item.id_project === data.id_project && item.lang === data.lang && item.status !== data.status)) {
        // console.log('Ya existe un progreso para este proyecto pero con otro status');
        newProgress = [...progress];
        newProgress[progress.findIndex((item: any) => item.id_project === data.id_project && item.lang === data.lang)]['status'] = data.status;
    } else {
        newProgress = progress.concat(data);
    }


    const { error: updateError } = await supabase
        .from('users')
        .update({ progress: newProgress })
        .eq('user_name', user_name);
    
    if (updateError) {
        return new Response('Error updating progress', { status: 500 });
    }

    if (data.href) {
        // console.log('Redirecting to:', data.href);
        return redirect(data.href);
    }
    return redirect(`/projects/${data.id_project}/${data.lang}/inicio`); // projects/your-own-git/c/inicio
}
