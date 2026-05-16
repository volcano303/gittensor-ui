const githubRepoUrlPattern = /^https?:\/\/github\.com\/([^/]+)\/([^/]+?)\/?$/i;

export const extractRepoFullName = (url: string): string | null => {
  const match = url.trim().match(githubRepoUrlPattern);
  if (!match) return null;
  return `${match[1]}/${match[2]}`;
};

export const isGithubRepoUrl = (url: string): boolean =>
  githubRepoUrlPattern.test(url.trim());
