import { githubUsername } from "@/lib/content";
import type { GithubRepo } from "@/lib/types";

export async function getRepos(): Promise<GithubRepo[]> {
  const res = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API responded with ${res.status}`);
  }

  const repos: GithubRepo[] = await res.json();
  return repos.filter((repo) => !repo.fork);
}
