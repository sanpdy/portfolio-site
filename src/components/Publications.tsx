"use client";

import { useState } from "react";
import { publications } from "../constants/data";

// Icon for PDF
function FileTextIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 mr-1 inline-block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

// Icon for arXiv (library-style)
function LibraryIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 mr-1 inline-block"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M8 6v12" />
      <path d="M12 6v12" />
      <path d="M16 6v12" />
    </svg>
  );
}

export default function PublicationsList() {
  const [expanded, setExpanded] = useState<number[]>([]);

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-header mb-0">Publications</h2>

        <div className="mt-2">
          {publications.map(({ id, title, authors, year, summary, pdfLink, arxivLink }, idx) => {
            const isOpen = expanded.includes(idx);

            return (
              <div
                key={id}
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
                      {/* Title and Authors */}
                      <div className="flex flex-col flex-1 pl-4">
                        <h3 className="text-md sm:text-base font-normal text-foreground truncate">{title}</h3>
                        <span className="text-sm font-normal text-gray-400 truncate">{authors}</span>
                      </div>
                      {/* Year */}
                      <span className="text-gray-400 text-sm whitespace-nowrap pr-4">{year}</span>
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
                          pl-4
                        `}
                      >
                        <div className="mb-2 text-white">{summary}</div>
                        <div className="flex flex-wrap gap-2">
                          {pdfLink && (
                            <a
                              href={pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium hover:bg-[#333] transition-colors duration-300 flex items-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FileTextIcon /> PDF
                            </a>
                          )}
                          {arxivLink && (
                            <a
                              href={arxivLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium hover:bg-[#333] transition-colors duration-300 flex items-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <LibraryIcon /> arXiv
                            </a>
                          )}
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
