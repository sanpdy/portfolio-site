"use client";

import { useState, useRef } from 'react';
import { workHistory } from '../constants/data';

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
            className="flex items-center gap-2 bg-[#232323] text-white px-2 py-1 rounded-lg text-sm font-medium hover:bg-[#333] transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8m-7 8h6a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Resume
          </a>
        </div>
        <div>
          {workHistory.map((job, idx) => {
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
                    <div className="flex items-center">
                      <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#181818] mr-4 text-2xl">
                        {job.logo ? (
                          <img src={job.logo} alt={job.company} className="w-7 h-7 object-contain" />
                        ) : (
                          <span>{job.company?.[0] || '?'}</span>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1">
                        <span className="text-white text-lg mr-2">{job.company}</span>
                        <span className="text-base text-gray-400 text-base">{job.position}</span>
                      </div>
                      <span className="text-gray-400 text-base ml-4 whitespace-nowrap">{job.period}</span>
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