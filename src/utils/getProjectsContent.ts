import { getCollection } from "astro:content";

export default async function (name: string, lenguage: string, title: string) {

    const collections = await getCollection('projects', (entry: { id: string }) => {
        if (entry.id.slice(0, entry.id.lastIndexOf("/")) === `${name}/${lenguage}`) {
            return entry;
        }
    });

    const info = collections.find((task: { id: string }) => task.id === `${name}/${lenguage}/${title}.md`);

    if (!info || !collections) {
        return null;
    }
    return {
        info: info,
        collections: collections
    };
}