import { marked } from 'marked';
import katex from 'katex';
import { FILE_LABELS } from './formatters';

export function parseMarkdownWithKaTeX(rawMarkdown: string): string {
  if (!rawMarkdown) return '<div class="skeleton-loader"></div>';

  let text = rawMarkdown.replace(/(?:^|\s)(\.\/[a-zA-Z0-9\s_-]+\.md)/g, (match, path) => {
    const cleanPath = path.trim();
    const fileName = cleanPath.replace('./', '');
    const label = FILE_LABELS[fileName] || fileName;
    return ` [${label}](${encodeURI(cleanPath)})`;
  });

  const mathBlocks: { id: string; math: string; display: boolean }[] = [];

  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
    const id = `MATHDISPLAYPLACEHOLDER${mathBlocks.length}`;
    mathBlocks.push({ id, math, display: true });
    return id;
  });

  text = text.replace(/\$([^$\n]+?)\$/g, (_, math) => {
    const id = `MATHINLINEPLACEHOLDER${mathBlocks.length}`;
    mathBlocks.push({ id, math, display: false });
    return id;
  });

  let html = marked.parse(text) as string;

  mathBlocks.forEach(({ id, math, display }) => {
    try {
      const rendered = katex.renderToString(math.trim(), { displayMode: display, throwOnError: false });
      html = html.replace(id, rendered);
    } catch {
      html = html.replace(id, display ? `$$${math}$$` : `$${math}$`);
    }
  });

  return html;
}
