import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';

// ── KaTeX extension (handles $...$ inline and $$...$$ blocks) ─────────────
marked.use(markedKatex({ throwOnError: false, output: 'html' }));

// ── Custom renderer ────────────────────────────────────────────────────────
marked.use({
  renderer: {
    // Shift heading levels down so the build name stays as h1 on the page
    heading(text, level, raw) {
      const hLevel = Math.min((level || 1) + 1, 6);
      return `<h${hLevel}>${text}</h${hLevel}>\n`;
    },
    // Convert intra-build .md links into non-link spans (content is shown as tabs)
    link(href, title, text) {
      if (href?.endsWith('.md')) {
        return `<span class="doc-ref" title="Ver en otra pestaña">${text}</span>`;
      }
      const t = title ? ` title="${title}"` : '';
      return `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`;
    },
  },
});

/**
 * Parse a Markdown string to an HTML string.
 * KaTeX formulas ($...$ / $$...$$) are rendered server-side as HTML+CSS.
 * @param {string} content
 * @returns {string}
 */
export function parseMarkdown(content) {
  return /** @type {string} */ (marked.parse(content));
}
