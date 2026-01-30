import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'

const ProjectDetails02BodyContent = ({ project }: any) => {
  return (
    <section className="overflow-hidden pb-14 pt-32 sm:pt-40 md:pb-16 md:pt-[180px] lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper className="grid grid-cols-1 items-center gap-8 pb-6 md:pb-10 lg:grid-cols-12 lg:justify-items-center lg:pb-20 xl:-ml-36">
          <aside className="flex items-center gap-[30px] max-lg:flex-row md:col-span-1 lg:flex-col">
            <Link href="https://www.facebook.com/staticmania " target="_blank">
              <div>
                <span className="inline dark:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.80078 14.3055C2.80078 19.8738 6.84492 24.504 12.1341 25.443V17.3538H9.33412V14.243H12.1341V11.7538C12.1341 8.95377 13.9382 7.39883 16.49 7.39883C17.2982 7.39883 18.17 7.52297 18.9782 7.64711V10.5096H17.5474C16.1782 10.5096 15.8674 11.1938 15.8674 12.0655V14.243H18.8542L18.3566 17.3538H15.8674V25.443C21.1566 24.504 25.2008 19.8748 25.2008 14.3055C25.2008 8.11097 20.1608 3.04297 14.0008 3.04297C7.84078 3.04297 2.80078 8.11097 2.80078 14.3055Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span className="hidden dark:inline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.80078 14.0634C2.80078 19.6316 6.84492 24.2618 12.1341 25.2008V17.1116H9.33412V14.0008H12.1341V11.5116C12.1341 8.71158 13.9382 7.15664 16.49 7.15664C17.2982 7.15664 18.17 7.28078 18.9782 7.40492V10.2674H17.5474C16.1782 10.2674 15.8674 10.9516 15.8674 11.8233V14.0008H18.8542L18.3566 17.1116H15.8674V25.2008C21.1566 24.2618 25.2008 19.6326 25.2008 14.0634C25.2008 7.86878 20.1608 2.80078 14.0008 2.80078C7.84078 2.80078 2.80078 7.86878 2.80078 14.0634Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="https://x.com/home" target="_blank">
              <div>
                <span className="inline dark:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                    <path
                      d="M15.9639 2.21094H18.8584L12.5348 9.43844L19.974 19.2734H14.1491L9.5869 13.3086L4.36666 19.2734H1.47041L8.23416 11.5428L1.09766 2.21094H7.07041L11.1943 7.66306L15.9639 2.21094ZM14.948 17.5409H16.5519L6.19891 3.85244H4.47778L14.948 17.5409Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span className="hidden dark:inline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M14.9639 0.96875H17.8584L11.5348 8.19625L18.974 18.0312H13.1491L8.5869 12.0664L3.36666 18.0312H0.470406L7.23416 10.3006L0.0976562 0.96875H6.07041L10.1943 6.42088L14.9639 0.96875ZM13.948 16.2987H15.5519L5.19891 2.61025H3.47778L13.948 16.2987Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/company/staticmania" target="_blank">
              <div>
                <span className="inline dark:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                    <path
                      d="M22.1666 3.74219C22.7856 3.74219 23.379 3.98801 23.8165 4.42561C24.2542 4.8632 24.5 5.45668 24.5 6.07553V22.4088C24.5 23.0277 24.2542 23.6212 23.8165 24.0587C23.379 24.4963 22.7856 24.7422 22.1666 24.7422H5.83334C5.2145 24.7422 4.62101 24.4963 4.18342 24.0587C3.74583 23.6212 3.5 23.0277 3.5 22.4088V6.07553C3.5 5.45668 3.74583 4.8632 4.18342 4.42561C4.62101 3.98801 5.2145 3.74219 5.83334 3.74219H22.1666ZM21.5834 21.8256V15.6422C21.5834 14.6335 21.1826 13.6661 20.4694 12.9528C19.7561 12.2396 18.7887 11.8388 17.78 11.8388C16.7884 11.8388 15.6334 12.4455 15.0734 13.3555V12.0605H11.8183V21.8256H15.0734V16.0738C15.0734 15.1756 15.7966 14.4406 16.695 14.4406C17.1282 14.4406 17.5437 14.6126 17.85 14.9189C18.1563 15.2253 18.3284 15.6406 18.3284 16.0738V21.8256H21.5834ZM8.02666 10.2288C8.5465 10.2288 9.04502 10.0223 9.41259 9.65478C9.78016 9.28721 9.98666 8.78868 9.98666 8.26885C9.98666 7.18385 9.11166 6.29719 8.02666 6.29719C7.50375 6.29719 7.00224 6.50492 6.63249 6.87467C6.26273 7.24443 6.055 7.74593 6.055 8.26885C6.055 9.35385 6.94166 10.2288 8.02666 10.2288ZM9.64834 21.8256V12.0605H6.41666V21.8256H9.64834Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span className="hidden dark:inline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M22.1666 3.5C22.7856 3.5 23.379 3.74583 23.8165 4.18342C24.2542 4.62101 24.5 5.2145 24.5 5.83334V22.1666C24.5 22.7856 24.2542 23.379 23.8165 23.8165C23.379 24.2542 22.7856 24.5 22.1666 24.5H5.83334C5.2145 24.5 4.62101 24.2542 4.18342 23.8165C3.74583 23.379 3.5 22.7856 3.5 22.1666V5.83334C3.5 5.2145 3.74583 4.62101 4.18342 4.18342C4.62101 3.74583 5.2145 3.5 5.83334 3.5H22.1666ZM21.5834 21.5834V15.4C21.5834 14.3913 21.1826 13.4239 20.4694 12.7106C19.7561 11.9974 18.7887 11.5967 17.78 11.5967C16.7884 11.5967 15.6334 12.2033 15.0734 13.1133V11.8183H11.8183V21.5834H15.0734V15.8316C15.0734 14.9334 15.7966 14.1984 16.695 14.1984C17.1282 14.1984 17.5437 14.3704 17.85 14.6768C18.1563 14.9831 18.3284 15.3985 18.3284 15.8316V21.5834H21.5834ZM8.02666 9.98666C8.5465 9.98666 9.04502 9.78016 9.41259 9.41259C9.78016 9.04502 9.98666 8.5465 9.98666 8.02666C9.98666 6.94166 9.11166 6.055 8.02666 6.055C7.50375 6.055 7.00224 6.26273 6.63249 6.63249C6.26273 7.00224 6.055 7.50375 6.055 8.02666C6.055 9.11166 6.94166 9.98666 8.02666 9.98666ZM9.64834 21.5834V11.8183H6.41666V21.5834H9.64834Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </aside>
          <figure className="max-lg:w-full md:h-[613px] lg:col-span-6 xl:min-w-[540px]">
            <Image
              src={project?.data?.image}
              width={540}
              height={613}
              alt="project-details-2-banner"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="lg:col-span-5">
            <p className="font-poppins text-sm font-normal uppercase leading-6 tracking-[8px] text-secondary dark:text-backgroundBody max-lg:text-left">
              {project?.data?.category}
            </p>
            <h3 className="mb-3.5 mt-1.5 text-left text-4xl tracking-[-1.68px] sm:mt-4 sm:text-[54px] sm:leading-[1.2] md:mb-4 xl:mt-5">
              {project?.data?.title}
            </h3>
            <p className="text-left max-lg:text-justify">{project?.data?.description}</p>
          </div>
        </RevealWrapper>

        <div className="project-details2-body">
          <RevealWrapper>
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{project.content}</ReactMarkdown>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails02BodyContent
