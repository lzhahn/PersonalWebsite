"use client";

import { getAllProjects } from "@/lib/data/projects";
import { getAllSkills } from "@/lib/data/resume";
import BackgroundPattern from "@/components/BackgroundPattern";
import * as HoverCard from '@radix-ui/react-hover-card';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';

export default function Home() {
  // Get featured projects and skills
  const featuredProjects = getAllProjects().slice(0, 3);
  const skills = getAllSkills();

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
                Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Lucas Hahn</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200">
                Software Engineer & Web Developer
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                I build responsive, user-friendly applications with modern technologies.
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

      {/* Experience Section */}
      <section id="projects" className="py-16 relative border-t border-gray-100 dark:border-gray-800">
        {/* Minimalist background */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Experience</h2>
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
            Find more about me at the social media below.
          </p>
          <div className="flex gap-6 justify-center items-center">
            <a 
              href="https://github.com/lzhahn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-full font-medium transition-colors inline-flex items-center justify-center w-12 h-12 md:w-12 md:h-12"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/lahahn/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-full font-medium transition-colors inline-flex items-center justify-center w-12 h-12 md:w-12 md:h-12"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
