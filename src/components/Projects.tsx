"use client";
import { useState } from 'react';
import { projectList } from '../constants/data';
import Image from 'next/image';

export default function Projects() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const GithubIcon = ({ className = "w-5 h-5" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.608-4.042-1.608-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.107-.774.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.805 5.625-5.475 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.19.694.8.576C20.565 22.092 24 17.597 24 12.297 24 5.67 18.627 0.297 12 0.297z" />
    </svg>
  );

  
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex justify-between items-center mb-2">
          <h2 className="section-header mb-0">Projects</h2>
        </div>
        <div>
          {projectList.map((project, idx) => {
            const isOpen = expanded.includes(idx);
            return (
              <div
                key={idx}
                className="cursor-pointer group transition-all duration-200 hover:bg-zinc-800 hover:shadow rounded-lg"
                onClick={() => {
                  setExpanded(prev =>
                    prev.includes(idx)
                      ? prev.filter(i => i !== idx)
                      : [...prev, idx]
                  );
                }}
              >
                <div className={`border-b rounded-lg border-dashed border-zinc-800 ${idx === 0 ? 'border-t' : ''}`}>
                  <div className="py-2">
                  <div className="flex items-center">
                {/* Logo (as circle) */}
                <div className="pl-4 flex items-center">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={project.name + ' logo'}
                      width={24}
                      height={24}
                      loading="lazy"
                      decoding="async"
                      className="rounded-full mr-2"
                      style={{ color: 'transparent' }}
                    />
                  ) : (
                    <span className="rounded-full mr-2 w-6 h-6 flex items-center justify-center bg-[#181818] text-md">
                      {project.name?.[0] || '?'}
                    </span>
                  )}
                </div>

                {/* Name and Short Description */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 flex-1 min-w-0">
                  <h3 className="text-md sm:text-base font-normal text-foreground truncate">{project.name}</h3>
                  {project.shortDescription && (
                    <span className="text-sm sm:text-sm font-normal text-gray-400 truncate">{project.shortDescription}</span>
                  )}
                </div>
                {/* Year and Link */}
                <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                      onClick={e => e.stopPropagation()}
                      title="View Project Link"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                  <span className="text-gray-400 text-sm whitespace-nowrap pr-4">{project.year}</span>
                </div>
              </div>

                    {/* Animated dropdown */}
                    <div
                      className={`
                        transition-all duration-300 ease-in-out overflow-hidden
                        ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}
                      `}
                    >
                      <div
                        className={`
                          transition-opacity duration-300 ease-in-out
                          ${isOpen ? 'opacity-100' : 'opacity-0'}
                          pl-14
                        `}
                      >
                        <div className="mb-2 text-white">{project.description}</div>
                        {project.technologies && (
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
