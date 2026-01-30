'use client'
import { slugify } from '@/utils/slugify'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'

const CareerDetailsArticle = ({ careerContent }: { careerContent: string }) => {
  const [activeTab, setActiveTab] = useState(1)
  const [selectedFile, setSelectedFile] = useState('')

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setSelectedFile(file ? `Selected file: ${file.name}` : '')
  }

  const headings = careerContent.match(/### .+/g) || []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 md:px-20">
        <div>
          {/* Tab Buttons */}
          <RevealWrapper className="mb-14 flex flex-col justify-center overflow-hidden sm:flex-row">
            <button
              onClick={() => setActiveTab(1)}
              className={`tab-button border-y border-l text-base font-medium uppercase leading-[1.1] tracking-[1.12px] dark:border-transparent dark:bg-backgroundBody/90 dark:text-secondary max-md:px-10 max-md:py-5 md:px-16 md:py-8 ${
                activeTab === 1 ? 'active' : ''
              }`}>
              Overview
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`tab-button border-y border-r text-base font-medium uppercase leading-[1.1] tracking-[1.12px] dark:border-transparent dark:bg-backgroundBody/90 dark:text-secondary max-md:px-14 max-md:py-5 md:px-20 md:py-8 ${
                activeTab === 2 ? 'active' : ''
              }`}>
              Apply
            </button>
          </RevealWrapper>

          {/* Tab Content */}
          <div>
            {activeTab === 1 && (
              <div className={`flex flex-col gap-8 lg:flex-row ${activeTab === 1 ? 'tab-content' : ''}`}>
                <aside className="min-w-[275px] flex-1">
                  <div className="sticky top-40">
                    <div className="overflow-hidden">
                      <h3 className="mb-5 text-3xl md:text-4xl lg:mb-8">Job description</h3>
                      <ul className="[&>*:not(:last-child)]:mb-1 md:[&>*:not(:last-child)]:mb-3">
                        {tableOfContents?.map((item) => (
                          <li key={item}>
                            <a
                              href={`#${slugify(item)}`}
                              className="lenis-scroll-to text-lg font-normal normal-case leading-7 transition-all duration-500 ease-in-out hover:text-secondary dark:text-dark-100 dark:hover:text-backgroundBody md:text-xl">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </aside>
                <RevealWrapper>
                  <article className="career-details-body overflow-hidden">
                    <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{careerContent}</ReactMarkdown>
                  </article>
                </RevealWrapper>
              </div>
            )}

            {activeTab === 2 && (
              <form
                className={`mx-auto max-w-[770px] space-y-[30px] ${activeTab === 2 ? 'tab-content' : ''} overflow-hidden`}>
                {/* File Upload Section */}
                <div className="w-full">
                  <div className="border border-secondary/10 p-4 dark:border-dark">
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="mb-2 text-[21px] leading-7 tracking-[0.4px] text-secondary/30 dark:text-backgroundBody/30">
                          Autofill from resume
                        </h3>
                        <p className="text-base leading-[1.4] tracking-[0.32px] text-secondary/30 dark:text-backgroundBody/30">
                          Upload your resume here to autofill key application fields.
                        </p>
                      </div>
                      <label className="relative cursor-pointer">
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx,.png,.jpg"
                          onChange={handleFileChange}
                        />
                        <span className="inline-flex rounded-full border border-secondary/30 bg-backgroundBody px-4 py-2 text-[12px] text-secondary/70 transition-colors hover:bg-gray-100 dark:border-backgroundBody/30 dark:bg-dark/10 dark:text-backgroundBody/70 dark:hover:bg-dark-300">
                          Upload File
                        </span>
                      </label>
                    </div>
                    <div>{selectedFile}</div>
                  </div>
                </div>

                {/* Full Name Input */}
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText placeholder:text-secondary/30 focus:border-primary focus:outline-none dark:border-dark dark:bg-dark placeholder:dark:text-backgroundBody/30"
                  />
                </div>

                {/* Email Input */}
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText placeholder:text-secondary/30 focus:border-primary focus:outline-none dark:border-dark dark:bg-dark placeholder:dark:text-backgroundBody/30"
                  />
                </div>

                {/* Resume Upload Section */}
                <div className="w-full">
                  <label
                    htmlFor="resume"
                    className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
                    Resume*
                  </label>
                  <div className="mt-3 border border-secondary/10 p-4 dark:border-dark">
                    <div className="flex items-center justify-between">
                      <div className="mx-auto flex flex-wrap items-center gap-5">
                        <label className="relative cursor-pointer">
                          <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.png,.jpg"
                            onChange={handleFileChange}
                          />
                          <figure className="inline-flex gap-2 rounded-full border border-secondary/30 px-2 py-1 text-base text-secondary/70 transition-colors hover:bg-gray-100 dark:border-backgroundBody/30 dark:bg-dark/10 dark:text-backgroundBody/70 dark:hover:bg-dark-300 md:px-6 md:py-3">
                            <img
                              src="/images/icons/file-upload.svg"
                              className="left-0 inline-flex dark:hidden"
                              alt="drag&drop"
                            />
                            <img
                              src="/images/icons/file-upload-dark.svg"
                              className="left-0 hidden dark:inline"
                              alt="drag&drop"
                            />
                            <span> Upload File </span>
                          </figure>
                        </label>
                        <h3 className="mb-2 text-[21px] leading-7 tracking-[0.4px] text-secondary/70 dark:text-backgroundBody/70">
                          Or drag and drop here
                        </h3>
                      </div>
                    </div>
                    <div>{selectedFile}</div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <input
                    type="submit"
                    value="Submit Application"
                    className="w-full cursor-pointer bg-primary p-8 uppercase text-secondary duration-300 hover:bg-primary/60 dark:bg-white dark:hover:bg-white/90"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerDetailsArticle
