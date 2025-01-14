import matter from 'gray-matter';
import { marked } from 'marked';

/**
 * Procesa un archivo Markdown.
 * Extrae la cabecera (frontmatter) y convierte el contenido a HTML.
 */
export async function processMarkdown(markdown: string): Promise<{ html: string; frontmatter: Record<string, any> }> {
  // Parsear el Markdown con gray-matter
  const { content, data } = matter(markdown);

  // Convertir el contenido Markdown a HTML
  const html = await Promise.resolve(marked(content));

  return {
    html,
    frontmatter: data,
  };
}
