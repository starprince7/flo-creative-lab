'use client'
import React, { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'UI/UX',
    budget: '40k',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
    alert(`${formData.name} Your Data Has Been Submited`)
    // Add your form submission logic here (e.g., API call)
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper
          as="form"
          onSubmit={handleSubmit}
          className="reveal-me mx-auto grid max-w-[800px] grid-cols-1 gap-[30px] md:grid-cols-2">
          <div className="md:col-span-full">
            <label
              htmlFor="name"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="service"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Service Type*
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-3 w-full appearance-none text-ellipsis border bg-backgroundBody px-5 py-4 indent-px text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required>
              <option value="UI/UX">UX Design</option>
              <option value="Web design">Product Design</option>
              <option value="Web development">Brand Identity</option>
              <option value="Web development">Design System</option>
            </select>
            <span className="absolute right-5 top-1/2 translate-y-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="inline dark:hidden">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                className="hidden dark:inline"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="relative">
            <label
              htmlFor="budget"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Project Budget*
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-3 w-full appearance-none text-ellipsis border bg-backgroundBody px-5 py-4 indent-px text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required>
              <option value="40k">$10k - $25k</option>
              <option value="55k">$25k - $50k</option>
              <option value="90k">$50k - $100k</option>
              <option value="100k+">$100k+</option>
            </select>
            <span className="absolute right-5 top-1/2 inline translate-y-1/3 dark:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="absolute right-5 top-1/2 hidden translate-y-1/3 dark:inline">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="md:col-span-full">
            <label
              htmlFor="message"
              className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-dark-100">
              Project Brief*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project goals and timeline"
              className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark"
              required></textarea>
          </div>

          <div className="col-span-full sm:mt-14 md:mx-auto">
            <button type="submit" className="rv-button rv-button-primary block w-full md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Send Message</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Send Message</span>
              </div>
            </button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ContactForm
