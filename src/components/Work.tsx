"use client";

import { useState } from 'react';
import { workHistory } from '../constants/data';
import Image from 'next/image';

export default function Work() {
  const [expanded, setExpanded] = useState<number[]>([]);

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="flex justify-between items-center mb-2">
          <h2 className="section-header mb-0">Work</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-normal bg-[#232323] text-white hover:bg-[#333] transition-colors duration-300"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="lucide lucide-file-text w-3 h-3 mr-1"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            Resume
          </a>

        </div>
        <div>
          {workHistory.map((job, idx) => {
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
                    <div className="pl-4">
  {job.logo ? (
    <Image
      src={job.logo}
      alt={job.company + ' logo'}
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      className="mr-2"
      style={{ color: 'transparent' }}
    />
  ) : (
    <span className="rounded-lg mr-1 w-6 h-6 flex items-center justify-center bg-[#181818] text-md">
      {job.company?.[0] || '?'}
    </span>
  )}
</div>

                      {/* Company and Position */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 flex-1">
                        <h3 className="text-md sm:text-base font-normal text-foreground truncate">{job.company}</h3>
                        <span className="text-sm sm:text-sm font-normal text-gray-400 truncate">{job.position}</span>
                      </div>
                      {/* Period */}
                      <span className="text-gray-400 text-sm whitespace-nowrap pr-4">{job.period}</span>
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
                        <div className="mb-1 text-white">{job.location}</div>
                        <div className="mb-2 text-white">{job.description}</div>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies?.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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
