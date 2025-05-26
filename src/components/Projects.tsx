"use client";
import { useState } from 'react';
import { projectList } from '../constants/data';

export default function Projects() {
  const [expanded, setExpanded] = useState<number[]>([]);

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
                <div className={`border-b border-dashed border-zinc-800 ${idx === 0 ? 'border-t' : ''}`}>
                  <div className="py-2">
                  <div className="flex items-center">
                {/* Logo (as circle) */}
                <div className="pl-4 flex items-center">
                  {project.logo ? (
                    <img
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
                      {/* ...svg... */}
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
