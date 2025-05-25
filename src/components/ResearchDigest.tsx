"use client";

import { useState } from "react";
import { researchDigest } from "../constants/data";

export default function ResearchDigest() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="research-digest" className="section">
      <div className="container">
        <h2 className="section-header mb-6">
          Cool Research Papers
        </h2>
        <div className="mt-4">
          {researchDigest.map(({ id, title, tldr, whyItMatters, pdfLink, visualsLink }, idx) => {
            const isOpen = expandedIds.includes(id);
            return (
              <div
                key={id}
                className="cursor-pointer group"
                onClick={() => toggleExpand(id)}
              >
                <div className={`border-b border-dashed border-gray-700 ${idx === 0 ? 'border-t' : ''}`}>
                  <div className="py-4">
                    <div className="flex items-center">
                      <div className="flex-1">
                        <span className="text-gray-400 text-lg">{title}</span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ml-4 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
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
                          pl-14 pt-3
                        `}
                      >
                        <div className="space-y-3">
                          <div>
                            <span className="text-amber-400 font-medium text-sm">TL;DR:</span>
                            <div className="text-white mt-1">{tldr}</div>
                          </div>
                          
                          <div>
                            <span className="text-amber-400 font-medium text-sm">Importance:</span>
                            <div className="text-white mt-1">{whyItMatters}</div>
                          </div>

                          {(pdfLink || visualsLink) && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {pdfLink && (
                                <a
                                  href={pdfLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium hover:bg-[#333] transition"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                PDF
                                </a>
                              )}
                              {visualsLink && (
                                <a
                                  href={visualsLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium hover:bg-[#333] transition"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  Visuals
                                </a>
                              )}
                            </div>
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
