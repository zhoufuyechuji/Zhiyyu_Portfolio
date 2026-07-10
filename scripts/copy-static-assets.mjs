import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

mkdirSync(dist, { recursive: true });

for (const folder of ["assets", "thesis-site"]) {
  const from = join(root, folder);
  const to = join(dist, folder);

  if (existsSync(from)) {
    cpSync(from, to, { recursive: true, force: true });
  }
}
