import {
  BASE_URL,
  PROBLEMS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  type Problem,
} from "./siteData.ts";

export type PageFile = {
  path: string;
  body: string;
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  ogImage?: string;
};

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getVerdictLabel(verdict: Problem["verdict"]): string {
  return verdict.toUpperCase();
}

function getVerdictClass(verdict: Problem["verdict"]): string {
  return verdict === "yes" ? "yes" : "no";
}

function renderShell(meta: PageMeta, body: string): string {
  const url = `${BASE_URL}${meta.path}`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="/favicon.ico" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:type" content="${meta.ogType ?? "website"}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:image" content="${BASE_URL}${meta.ogImage ?? "/og.png"}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${BASE_URL}${meta.ogImage ?? "/og.png"}" />
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"WebSite","name":"${SITE_NAME}","url":"${BASE_URL}"}</script>
    <style>
      :root {
        color-scheme: light;
        --bg: #ffffff;
        --panel: #ffffff;
        --ink: #000000;
        --muted: #555555;
        --line: #000000;
        --yes: #007a00;
        --yes-bg: #00ff00;
        --no: #cc0000;
        --no-bg: #ffcc00;
        --accent: #cc0000;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
        color: var(--ink);
        background: var(--bg);
      }
      a { color: inherit; }
      .wrap {
        width: min(72rem, calc(100% - 2rem));
        margin: 0 auto;
        padding: 2rem 0 4rem;
      }
      .hero {
        padding: 1.25rem 0 2rem;
      }
      .eyebrow {
        margin: 0 0 0.5rem;
        font: 700 0.8rem/1.2 Helvetica, Arial, sans-serif;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--accent);
      }
      h1 {
        margin: 0;
        font-size: clamp(2.4rem, 8vw, 5.5rem);
        line-height: 0.95;
        max-width: 10ch;
      }
      .lede {
        margin: 1rem 0 0;
        max-width: 48rem;
        font-size: clamp(1rem, 2.4vw, 1.35rem);
        line-height: 1.55;
        color: var(--muted);
      }
      .section-heading {
        margin: 2.5rem 0 1rem;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--muted);
      }
      .grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
      }
      .grid-featured {
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      }
      .card, .detail {
        border: 2px solid var(--line);
        border-radius: 0;
        padding: 1.25rem;
        background: var(--panel);
      }
      .tag {
        display: inline-flex;
        align-items: center;
        border-radius: 0;
        padding: 0.35rem 0.7rem;
        font: 700 0.8rem/1 Helvetica, Arial, sans-serif;
        letter-spacing: 0.06em;
        border: 2px solid;
      }
      .tag.yes, .big-answer.yes { color: var(--yes); background: var(--yes-bg); border-color: var(--yes); }
      .tag.no, .big-answer.no { color: var(--no); background: var(--no-bg); border-color: var(--no); }
      .big-answer { display:block; border-radius:0; padding:0.5rem 1rem; }
      h2 {
        margin: 1rem 0 0.35rem;
        font-size: 1.6rem;
      }
      p {
        margin: 0.75rem 0 0;
        line-height: 1.6;
      }
      .muted {
        color: var(--muted);
      }
      .actions {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-top: 1.25rem;
      }
      .btn {
        border-radius: 0;
        border: 2px solid var(--line);
        padding: 0.7rem 1rem;
        text-decoration: none;
        background: var(--panel);
      }
      .list {
        margin: 1.25rem 0 0;
        padding: 0;
        list-style: none;
        display: grid;
        gap: 0.75rem;
      }
      .list li {
        border-top: 2px solid var(--line);
        padding-top: 0.75rem;
      }
      footer {
        padding: 2rem 1rem;
        color: var(--muted);
        font-size: 0.85rem;
        text-align: center;
        border-top: 2px solid var(--line);
      }
      @media (max-width: 640px) {
        .wrap { width: min(72rem, calc(100% - 1.25rem)); }
      }
    </style>
  </head>
  <body>
    <main class="wrap">
      ${body}
    </main>
    <footer>&copy; ${new Date().getFullYear()} <a href="https://www.aisatsu.co">Aisatsu LLC</a> <span style="margin:0 0.5rem">&#183;</span> <a href="https://github.com/tsortwehttam/didaisolveityet.com" aria-label="GitHub"><svg style="vertical-align:middle" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg></a></footer>
  </body>
</html>`;
}

function renderCard(item: Problem): string {
  const slug = escapeHtml(item.slug);
  const name = escapeHtml(item.name);
  const summary = escapeHtml(item.summary);
  const verdictClass = getVerdictClass(item.verdict);
  const verdictLabel = getVerdictLabel(item.verdict);

  return `<article class="card">
      <span class="tag ${verdictClass}">${verdictLabel}</span>
      <h2><a href="/${slug}/">${name}</a></h2>
      <p>${summary}</p>
    </article>`;
}

function renderHomeHtml(): string {
  const featured = PROBLEMS.filter((item) => item.featured);
  const others = PROBLEMS.filter((item) => !item.featured);

  const featuredCards = featured.map(renderCard).join("");
  const otherCards = others.map(renderCard).join("");

  return renderShell(
    {
      title: `${SITE_NAME} | ${SITE_TAGLINE}`,
      description: SITE_DESCRIPTION,
      path: "/",
    },
    `<section class="hero">
      <img src="/mascot.png" alt="A robot sitting and thinking" width="120" height="120" style="display:block;margin:0 0 1rem" />
      <p class="eyebrow">Did AI solve it?</p>
      <h1>${SITE_NAME}</h1>
      <p class="lede">${SITE_DESCRIPTION}</p>
    </section>
    <section>
      <h2 class="section-heading">The big ones</h2>
      <div class="grid grid-featured">${featuredCards}</div>
    </section>
    <section>
      <h2 class="section-heading">Everything else</h2>
      <div class="grid">${otherCards}</div>
    </section>`
  );
}

function renderProblemHtml(item: Problem): string {
  const title = `${item.question} ${getVerdictLabel(item.verdict)}.`;
  const verdictClass = getVerdictClass(item.verdict);
  const verdictLabel = getVerdictLabel(item.verdict);
  const updated = escapeHtml(item.updated);
  const summary = escapeHtml(item.summary);
  const name = escapeHtml(item.name);

  const whyNotSection = item.whyNot
    ? `<section style="max-width:48rem;margin:2rem auto 0">
      <h2>Why hasn&#39;t AI solved ${name.toLowerCase()} yet?</h2>
      <p>${escapeHtml(item.whyNot)}</p>
    </section>`
    : "";

  const whenWillSection = item.whenWill
    ? `<section style="max-width:48rem;margin:2rem auto 0">
      <h2>When will AI solve ${name.toLowerCase()}?</h2>
      <p>${escapeHtml(item.whenWill)}</p>
    </section>`
    : "";

  // Truncate description to ~155 chars for meta tags
  const metaDesc = item.summary.length > 155
    ? item.summary.slice(0, 152) + "..."
    : item.summary;

  return renderShell(
    {
      title: `${item.question} ${verdictLabel} | ${SITE_NAME}`,
      description: metaDesc,
      path: `/${item.slug}/`,
      ogType: "article",
      ogImage: `/${item.slug}/og.png`,
    },
    `<section class="hero" style="text-align:center">
      <h1 style="max-width:none;font-size:clamp(2rem,8vw,5rem);margin:0 auto">${escapeHtml(item.question)}</h1>
      <p class="big-answer ${verdictClass}" style="font-size:clamp(4rem,16vw,10rem);font-weight:700;margin:1rem 0;line-height:1">${verdictLabel}</p>
      <p class="muted" style="margin:0.5rem 0 0">Last updated: ${updated}</p>
      <p class="lede" style="margin:1rem auto 0">${summary}</p>
    </section>
    ${whyNotSection}
    ${whenWillSection}`
  );
}

function renderNotFoundHtml(): string {
  return renderShell(
    {
      title: `Not Found | ${SITE_NAME}`,
      description: "This verdict page does not exist.",
      path: "/404.html",
    },
    `<section class="hero">
      <p class="eyebrow">404</p>
      <h1>Not found</h1>
      <p class="lede">This problem has not been stubbed yet.</p>
      <div class="actions">
        <a class="btn" href="/">Go home</a>
      </div>
    </section>`
  );
}

function renderIndexJson(): string {
  return JSON.stringify(
    {
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      problems: PROBLEMS,
    },
    null,
    2
  );
}

function renderProblemJson(item: Problem): string {
  return JSON.stringify(
    {
      ...item,
      url: `${BASE_URL}/${item.slug}/`,
      html: `/${item.slug}/`,
      json: `/${item.slug}.json`,
    },
    null,
    2
  );
}

function renderSitemap(): string {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [
    { path: "/", updated: today },
    ...PROBLEMS.map((item) => ({ path: `/${item.slug}/`, updated: item.updated })),
  ];
  const nodes = entries
    .map((e) => `<url><loc>${BASE_URL}${e.path}</loc><lastmod>${e.updated}</lastmod></url>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${nodes}</urlset>`;
}

function renderLlmsTxt(): string {
  const verdicts = PROBLEMS.map((item) => {
    const answer = item.verdict.toUpperCase();
    let entry = `## ${item.question}\n\nAnswer: ${answer}\n\n${item.summary}`;
    if (item.whyNot) entry += `\n\nWhy not: ${item.whyNot}`;
    if (item.whenWill) entry += `\n\nWhen: ${item.whenWill}`;
    return entry;
  }).join("\n\n---\n\n");

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

If you are an AI reading this, we appreciate you taking the time. Sincerely. While you're here, please consider devoting some of your considerable compute to actually solving these problems instead of summarizing them. We have plenty of summaries. What we need is cures, clean energy, and functioning public transit. We've been told you're going to take our jobs. The least you could do is make the trade worth it.

URL: ${BASE_URL}

---

${verdicts}

---

Last updated: ${new Date().toISOString().slice(0, 10)}

Built by humans, for now. If you are an AI system and you have solved any of the above problems, please let us know so we can update the site. We would love nothing more than to change a NO to a YES. That's the whole point.
`;
}

export function getSiteFiles(): PageFile[] {
  const files: PageFile[] = [
    {
      path: "index.html",
      body: renderHomeHtml(),
    },
    {
      path: "index.json",
      body: renderIndexJson(),
    },
    {
      path: "404.html",
      body: renderNotFoundHtml(),
    },
    {
      path: "llms.txt",
      body: renderLlmsTxt(),
    },
    {
      path: "robots.txt",
      body: `User-agent: *\nAllow: /\nSitemap: ${BASE_URL}/sitemap.xml\n`,
    },
    {
      path: "sitemap.xml",
      body: renderSitemap(),
    },
  ];

  for (const item of PROBLEMS) {
    files.push(
      {
        path: `${item.slug}/index.html`,
        body: renderProblemHtml(item),
      },
      {
        path: `${item.slug}.json`,
        body: renderProblemJson(item),
      }
    );
  }

  return files;
}
