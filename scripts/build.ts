import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { getSiteFiles } from "../lib/siteRender.ts";
import { renderOgImage, renderHomepageOgImage } from "../lib/ogImage.ts";
import { PROBLEMS } from "../lib/siteData.ts";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, "dist");

async function build(): Promise<void> {
  await rm(DIST, { recursive: true, force: true });
  const files = getSiteFiles();

  for (const file of files) {
    const target = join(DIST, file.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, file.body);
  }

  // Copy static assets
  await copyFile(join(ROOT, "favicon.ico"), join(DIST, "favicon.ico"));
  await copyFile(join(ROOT, "mascot.png"), join(DIST, "mascot.png"));

  // Generate OG images
  const mascotPng = await readFile(join(ROOT, "mascot.png"));

  const homepageOg = await renderHomepageOgImage(mascotPng);
  await writeFile(join(DIST, "og.png"), homepageOg);

  for (const item of PROBLEMS) {
    const ogDir = join(DIST, item.slug);
    await mkdir(ogDir, { recursive: true });
    const ogBuf = await renderOgImage(item, mascotPng);
    await writeFile(join(ogDir, "og.png"), ogBuf);
  }
}

void build();
