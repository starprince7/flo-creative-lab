import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'
import TableOfContent from '../shared/TableOfContent'

const ProjectContent = async ({ project }: any) => {
  const headings = project.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-7 md:px-20">
        <div className="flex flex-col gap-x-8 gap-y-12 lg:flex-row">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-40">
              <TableOfContent tableOfContents={tableOfContents} />
            </div>
          </aside>
          <article className="project-details-body overflow-hidden [&>*]:scroll-mt-20">
            <RevealWrapper as="figure" className="max-w-[870px] md:h-[480px]">
              <img src={project.data.thumbnail} alt="Services Big Img" className="h-full w-full object-cover" />
            </RevealWrapper>
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{project.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ProjectContent
