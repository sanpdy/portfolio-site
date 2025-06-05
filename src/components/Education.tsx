"use client";

import { useState } from "react";
import Image from "next/image";

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section header */}
        <div className="flex justify-between items-center mb-3">
            <h2 className="section-header">Education</h2>
        </div>
        <div
          className="border-b rounded-lg border-dashed border-zinc-800 border-t cursor-pointer group transition-all duration-200 hover:bg-zinc-800 hover:shadow rounded-lg py-2 px-4 mb-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* Main line: logo, institution & degree, and date on right */}
          <div className="flex justify-between items-center w-full">
            {/* Left: logo and institution/degree */}
            <div className="flex items-center">
              {/* UARK Logo */}
              <div className="pr-4">
                <Image
                  src="/logos/uark-modified.png"
                  alt="UARK Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              {/* Major line (always visible) */}
              <div className="flex flex-col">
                <span className="text-md font-normal text-foreground">
                  University of Arkansas <br />
                  Dual B.S. Computer Science &amp; Computer Engineering
                </span>
              </div>
            </div>

            {/* Right: date range */}
            <div className="flex-shrink-0">
              <span className="text-sm text-gray-400">
                2022 – May 2026
              </span>
            </div>
          </div>

          {/* Expandable details */}
          <div
            className={`
              transition-all duration-300 ease-in-out overflow-hidden
              ${isOpen ? "max-h-[1000px] mt-4" : "max-h-0"}
            `}
          >
            <div
              className={`
                transition-opacity duration-300 ease-in-out
                ${isOpen ? "opacity-100" : "opacity-0"}
                pl-14
              `}
            >
              {/* GPA & Minors */}
              <div className="mb-2">
                <span className="text-sm text-gray-200">
                  GPA: 3.78/4.0 | Minors: Data Analytics, Mathematics
                </span>
              </div>

              {/* Honors & Awards */}
              <div className="mb-1">
                <span className="text-sm font-medium text-gray-400">
                  Honors &amp; Awards:
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium">
                  Arkansas Governor’s Distinguished Scholarship (Aug 2022 – Present)
                </span>
                <span className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium">
                  UARK Chancellor’s Scholarship (Aug 2022 – Present)
                </span>
                <span className="bg-[#232323] text-gray-200 px-3 py-1 rounded-md text-xs font-medium">
                  Honors College Research Grant (Aug 2024 – May 2025)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
