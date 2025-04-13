"use client";

import Link from "next/link";
import { getAllProjects } from "@/lib/data/projects";
import { getAllSkills } from "@/lib/data/resume";
import BackgroundPattern from "@/components/BackgroundPattern";
import * as HoverCard from '@radix-ui/react-hover-card';
import * as Tabs from '@radix-ui/react-tabs';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

export default function Home() {
  // Get featured projects and skills
  const featuredProjects = getAllProjects().slice(0, 3);
  const skills = getAllSkills();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    console.log({ name, email, message });
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <BackgroundPattern />
      
      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24 relative">
        {/* Minimalist background */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Lucas Hahn</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200">
                Software Engineer & Web Developer
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                I build responsive, user-friendly web applications with modern technologies.
                Passionate about creating clean, efficient, and accessible digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 rounded-md font-medium transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-blue-500"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-md">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-6xl font-bold">LH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 relative border-t border-gray-100 dark:border-gray-800">
        {/* Minimalist background */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0 last:pb-0"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex-shrink-0 flex items-start justify-center">
                    <HoverCard.Root>
                      <HoverCard.Trigger asChild>
                        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center cursor-pointer">
                          <span className="text-xl font-bold text-gray-500 dark:text-gray-400">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </HoverCard.Trigger>
                      <HoverCard.Portal>
                        <HoverCard.Content 
                          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 w-64"
                          sideOffset={5}
                        >
                          <div className="flex flex-col gap-2">
                            <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center">
                              <span className="text-2xl font-bold text-gray-500 dark:text-gray-400">
                                {project.title}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {project.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <HoverCard.Arrow className="fill-white dark:fill-gray-800" />
                        </HoverCard.Content>
                      </HoverCard.Portal>
                    </HoverCard.Root>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-200 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 relative border-t border-gray-100 dark:border-gray-800">
        {/* Minimalist background */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Tabs.Root defaultValue={skills[0].category} className="w-full">
              <Tabs.List className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-6" aria-label="Skill categories">
                {skills.map((skillCategory) => (
                  <Tabs.Trigger
                    key={skillCategory.category}
                    value={skillCategory.category}
                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:border-b-2 data-[state=active]:border-blue-600 dark:data-[state=active]:border-blue-400 transition-colors"
                  >
                    {skillCategory.category}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              
              {skills.map((skillCategory) => (
                <Tabs.Content 
                  key={skillCategory.category} 
                  value={skillCategory.category}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-4 sr-only dark:text-white">{skillCategory.category}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {skillCategory.items.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 dark:text-white">
                        <span className="w-2 h-2 bg-gray-300 dark:bg-gray-500 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative border-t border-gray-100 dark:border-gray-800">
        {/* Minimalist background */}
        <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white dark:text-white">Interested in working together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            I'm currently available for freelance work and open to new opportunities.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-md font-medium transition-colors inline-block w-full md:w-auto">
                  Contact Me
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-[90vw] max-w-md max-h-[85vh] overflow-y-auto data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut">
                  <Dialog.Title className="text-xl font-bold mb-4 dark:text-white">Get in Touch</Dialog.Title>
                  <Dialog.Description className="text-gray-600 dark:text-gray-300 mb-6">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </Dialog.Description>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-end gap-3 mt-6">
                      <Dialog.Close asChild>
                        <button type="button" className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          Cancel
                        </button>
                      </Dialog.Close>
                      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Send Message
                      </button>
                    </div>
                  </form>
                  
                  <Dialog.Close asChild>
                    <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
            <a 
              href="https://github.com/lzhahn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-md font-medium transition-colors inline-block w-full md:w-auto"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/lahahn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-md font-medium transition-colors inline-block w-full md:w-auto"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
