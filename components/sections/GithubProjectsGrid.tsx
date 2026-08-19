import { FaStar } from "react-icons/fa";
import Card from "@/components/ui/Card";
import { excludedRepoNames, featuredRepoNames } from "@/lib/content";
import { getRepos } from "@/lib/github";

export default async function GithubProjectsGrid() {
  let repos;
  try {
    repos = (await getRepos()).filter(
      (repo) => !featuredRepoNames.includes(repo.name) && !excludedRepoNames.includes(repo.name)
    );
  } catch {
    return (
      <Card>
        <p className="text-foreground/90">
          Couldn&apos;t load more projects from GitHub right now. This can happen if
          GitHub&apos;s API is rate-limited or temporarily unavailable — refresh the page in a
          bit.
        </p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <Card>
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="font-medium text-foreground group-hover:text-accent">{repo.name}</h3>
              {repo.stargazers_count > 0 && (
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
                  <FaStar size={11} />
                  {repo.stargazers_count}
                </span>
              )}
            </div>
            <p className="mb-3 text-sm text-muted">
              {repo.description ?? "No description available."}
            </p>
            {repo.language && (
              <span className="font-mono text-xs text-muted">{repo.language}</span>
            )}
          </Card>
        </a>
      ))}
    </div>
  );
}
