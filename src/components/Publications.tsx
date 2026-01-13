"use client";

import { useState } from "react";
import { publications } from "../constants/data";

type Status = "Published" | "Under Review" | "Accepted";

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

function StatusBadge({ status }: { status?: Status }) {
  if (!status) return null;
  const isPublished = status === "Published" || status === "Accepted";

  return (
   <span
  className={`inline-flex w-fit self-start items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${
    isPublished
      ? "border-emerald-500/40 text-emerald-300"
      : "border-amber-500/40 text-amber-300"
  }`}
>

      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isPublished ? "bg-emerald-400" : "bg-amber-400"
        }`}
      />
      {status}
    </span>
  );
}

export default function PublicationsList() {
  const [expanded, setExpanded] = useState<number[]>([]);

  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-header mb-0 text-gray-200">Publications</h2>

        <div className="mt-2 space-y-2">
          {publications.map(
            (
              {
                id,
                title,
                authors,
                year,
                summary,
                pdfLink,
                arxivLink,
                status,
                conference,
              },
              idx
            ) => {
              const isOpen = expanded.includes(idx);

              return (
                <div
                  key={id}
                  className="cursor-pointer group transition-all duration-200 hover:bg-zinc-800 hover:shadow rounded-lg"
                  onClick={() =>
                    setExpanded((prev) =>
                      prev.includes(idx)
                        ? prev.filter((i) => i !== idx)
                        : [...prev, idx]
                    )
                  }
                >
                  <div
                    className={`border-b border-dashed border-zinc-800 ${
                      idx === 0 ? "border-t" : ""
                    }`}
                  >
                    <div className="py-3 px-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                        {/* Left column */}
                        <div className="flex flex-col gap-1">
                          <h3 className="text-md sm:text-base font-semibold text-gray-200">
                            {title}
                          </h3>

                          <StatusBadge status={status as Status} />

                          {conference && (
                            <span className="text-s italic text-gray-200">
                              {conference}
                            </span>
                          )}

                          <span className="text-sm text-gray-200">
                            {authors.map((a, i) => (
                              <span key={i}>
                                {a.me ? (
                                  <span className="underline font-semibold">
                                    {a.name}
                                  </span>
                                ) : (
                                  a.name
                                )}
                                {i < authors.length - 1 && ", "}
                              </span>
                            ))}
                          </span>
                        </div>

                        {/* Year */}
                        <span className="text-gray-200 text-sm shrink-0">
                          {year}
                        </span>
                      </div>

                      {/* Expandable content */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? "max-h-[1000px]" : "max-h-0"
                        }`}
                      >
                        <div
                          className={`pt-3 transition-opacity duration-300 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="mb-2 text-gray-200">{summary}</div>

                          <div className="flex gap-2">
                            {pdfLink && (
                              <a
                                href={pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#232323] px-3 py-1 rounded-md text-xs hover:bg-[#333] flex items-center"
                              >
                                <FileTextIcon /> PDF
                              </a>
                            )}
                            {arxivLink && (
                              <a
                                href={arxivLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#232323] px-3 py-1 rounded-md text-xs hover:bg-[#333] flex items-center"
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
            }
          )}
        </div>
      </div>
    </section>
  );
}
