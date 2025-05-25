"use client";

import { useState } from 'react';
import { projectList } from '../constants/data';

export default function Projects() {
  const [expanded, setExpanded] = useState<number[]>([]);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="flex justify-between items-center mb-2">
          <h2 className="section-header mb-2">Projects</h2>
        </div>
        <div>
          {projectList.map((project, idx) => {
            const isOpen = expanded.includes(idx);
            return (
              <div
                key={idx}
                className="cursor-pointer group"
                onClick={() => {
                  setExpanded(prev =>
                    prev.includes(idx)
                      ? prev.filter(i => i !== idx)
                      : [...prev, idx]
                  );
                }}
              >
                <div className={`border-b border-dashed border-gray-700 ${idx === 0 ? 'border-t' : ''}`}>
                  <div className="py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* Logo container */}
                        <div className="w-9 h-9 rounded-full overflow-hidden bg-[#181818] flex items-center justify-center flex-shrink-0">
                          {project.logo ? (
                            <img
                              src={project.logo}
                              alt={`${project.name} logo`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-white uppercase">
                              {project.name?.[0] || '?'}
                            </span>
                          )}
                        </div>

                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white text-lg truncate">{project.name}</span>
                            {project.shortDescription && (
                              <span className="text-gray-400 text-base truncate">{project.shortDescription}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 ml-4 flex-shrink-0">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                            onClick={e => e.stopPropagation()}
                            title="View GitHub Repository"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.477 2 12a9.996 9.996 0 006.839 9.481c.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.086 2.91.83.092-.647.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.942 0-1.09.39-1.98 1.029-2.678-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.56 9.56 0 012.5.336c1.91-1.294 2.75-1.025 2.75-1.025.546 1.377.202 2.394.1 2.647.64.698 1.028 1.588 1.028 2.678 0 3.842-2.337 4.685-4.565 4.932.359.309.678.92.678 1.855 0 1.337-.012 2.417-.012 2.745 0 .268.18.58.688.481A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        )}
                        <span className="text-gray-400 text-sm whitespace-nowrap">{project.year}</span>
                      </div>
                    </div>

                    {/* Animated dropdown */}
                    <div
                      className={`
                        transition-all duration-300 ease-in-out overflow-hidden
                        ${isOpen ? 'max-h-48' : 'max-h-0'}
                      `}
                    >
                      <div
                        className={`
                          transition-opacity duration-300 ease-in-out
                          ${isOpen ? 'opacity-100' : 'opacity-0'}
                          pl-14 mt-2
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
