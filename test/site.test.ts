import assert from "node:assert/strict";

import { getSiteFiles } from "../lib/siteRender.ts";

const files = getSiteFiles();
const paths = files.map((file) => file.path).sort();

assert(paths.includes("index.html"));
assert(paths.includes("index.json"));
assert(paths.includes("404.html"));
assert(paths.includes("cancer/index.html"));
assert(paths.includes("cancer.json"));

const cancer = files.find((file) => file.path === "cancer/index.html");
assert(cancer);
if (!cancer) {
  throw new Error("Missing cancer html");
}
assert(cancer.body.includes("Did AI solve cancer yet? NO."));

const indexJson = files.find((file) => file.path === "index.json");
assert(indexJson);
if (!indexJson) {
  throw new Error("Missing index json");
}
assert(indexJson.body.includes('"slug": "cancer"'));
