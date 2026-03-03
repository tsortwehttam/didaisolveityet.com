import satori from "satori";
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { type Problem } from "./siteData.ts";

const WIDTH = 1200;
const HEIGHT = 630;

const FONTS_DIR = join(dirname(dirname(fileURLToPath(import.meta.url))), "fonts");

async function loadFonts() {
  const [regular, bold] = await Promise.all([
    readFile(join(FONTS_DIR, "Inter-Regular.ttf")),
    readFile(join(FONTS_DIR, "Inter-Bold.ttf")),
  ]);
  return [
    { name: "Inter", data: regular, weight: 400 as const },
    { name: "Inter", data: bold, weight: 700 as const },
  ];
}

let fontsCache: Awaited<ReturnType<typeof loadFonts>> | null = null;

async function getFonts() {
  if (!fontsCache) fontsCache = await loadFonts();
  return fontsCache;
}

function verdictColor(verdict: Problem["verdict"]): string {
  return verdict === "yes" ? "#007a00" : "#cc0000";
}

function verdictBg(verdict: Problem["verdict"]): string {
  return verdict === "yes" ? "#00ff00" : "#ffcc00";
}

export async function renderOgImage(item: Problem, mascotPng: Buffer): Promise<Buffer> {
  const fonts = await getFonts();
  const mascotBase64 = `data:image/png;base64,${mascotPng.toString("base64")}`;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
          fontFamily: "Inter",
          padding: "40px 60px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 24,
              },
              children: [
                {
                  type: "img",
                  props: {
                    src: mascotBase64,
                    width: 80,
                    height: 80,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 20,
                      color: "#555555",
                    },
                    children: "didaisolveityet.com",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 64,
                fontWeight: 700,
                color: "#000000",
                textAlign: "center",
                marginTop: 20,
                maxWidth: "95%",
                lineHeight: 1.15,
              },
              children: item.question,
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 140,
                fontWeight: 700,
                color: verdictColor(item.verdict),
                background: verdictBg(item.verdict),
                padding: "8px 48px",
                marginTop: 24,
                lineHeight: 1.1,
                border: `4px solid ${verdictColor(item.verdict)}`,
              },
              children: item.verdict.toUpperCase(),
            },
          },
        ],
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts,
    }
  );

  return sharp(Buffer.from(svg)).png().toBuffer();
}

export async function renderHomepageOgImage(mascotPng: Buffer): Promise<Buffer> {
  const fonts = await getFonts();
  const mascotBase64 = `data:image/png;base64,${mascotPng.toString("base64")}`;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
          fontFamily: "Inter",
          padding: "40px 60px",
        },
        children: [
          {
            type: "img",
            props: {
              src: mascotBase64,
              width: 160,
              height: 160,
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 56,
                fontWeight: 700,
                color: "#000000",
                textAlign: "center",
                marginTop: 24,
                lineHeight: 1.1,
              },
              children: "Did AI Solve It Yet?",
            },
          },
          {
            type: "div",
            props: {
              style: {
                fontSize: 24,
                color: "#555555",
                textAlign: "center",
                marginTop: 16,
                maxWidth: "80%",
              },
              children: "Keeping score on AI's biggest promises.",
            },
          },
        ],
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts,
    }
  );

  return sharp(Buffer.from(svg)).png().toBuffer();
}
