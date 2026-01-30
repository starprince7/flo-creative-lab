import GithubSlugger from 'github-slugger'

export function slugify(text: string): string {
  const slugs = new GithubSlugger()
  return slugs.slug(text)
}
