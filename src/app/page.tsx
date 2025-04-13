import Link from "next/link";
import { getAllProjects } from "@/lib/data/projects";
import { getAllSkills } from "@/lib/data/resume";

export default function Home() {
  // Get featured projects and skills
  const featuredProjects = getAllProjects().slice(0, 3);
  const skills = getAllSkills();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Lucas Hahn</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                Software Engineer & Web Developer
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                I build responsive, user-friendly web applications with modern technologies.
                Passionate about creating clean, efficient, and accessible digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  href="/projects" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 rounded-md font-medium transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-blue-500"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <span className="text-6xl font-bold">LH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Some of my recent work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/projects`} 
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center"
                  >
                    View details <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory) => (
              <div 
                key={skillCategory.category} 
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-4">{skillCategory.category}</h3>
                <ul className="space-y-2">
                  {skillCategory.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities.
          </p>
          <Link 
            href="/contact" 
            className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-md font-medium transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
