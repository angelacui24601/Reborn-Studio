import { promises as fs } from "fs";
import path from "path";

const projectsPath = path.join(process.cwd(), "data", "projects.json");

export async function getProjects() {
  const raw = await fs.readFile(projectsPath, "utf8");
  return JSON.parse(raw);
}

export async function getProjectById(id) {
  const projects = await getProjects();
  return projects.find((project) => project.id === Number(id)) || null;
}