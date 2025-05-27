"use client";
import { useState } from "react";
import { FAVORITE_GAMES } from "../constants/data";
/* eslint-disable @next/next/no-img-element */

export default function Games() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="games" className="section">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-header mb-0">Favorite Games</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {FAVORITE_GAMES.map((game) => (
            <div
              key={game.appid}
              className="relative group flex-shrink-0 transition-transform duration-200 hover:scale-[1.02]"
              onMouseEnter={() => setHovered(game.appid)}
              onMouseLeave={() => setHovered(null)}
              style={{ width: 200, height: 94 }}
            >
              {/* Game Header Image */}
              <img
                src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
                alt={game.name}
                className="w-full h-full rounded-lg border border-zinc-800/60 shadow-md object-cover transition-all duration-200 group-hover:shadow-xl group-hover:border-zinc-700"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/200x94/374151/9CA3AF?text=${encodeURIComponent(game.name)}`;
                }}
              />
              
              {/* Hover Overlay */}
              <div 
                className={`absolute inset-0 rounded-lg flex items-end transition-opacity duration-300 pointer-events-none
                ${hovered === game.appid ? "opacity-100" : "opacity-0"}`}
                style={{
                  background: hovered === game.appid
                    ? "linear-gradient(to top, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)"
                    : "none"
                }}
              >
                {/* Comment Text */}
                <div 
                  className={`p-4 w-full text-white text-sm leading-relaxed transform transition-all duration-300
                  ${hovered === game.appid ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}
                `}>
                  <div className="font-medium text-zinc-100 mb-1 text-xs uppercase tracking-wide">
                    {game.name}
                  </div>
                  <div className="text-zinc-200">
                    {game.blurb}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Hint */}
        <div className="flex justify-center mt-4">
          <div className="text-zinc-500 text-xs flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M8 3l4 8 5-3v11H6V8l2-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Scroll horizontally to see more
          </div>
        </div>
      </div>
    </section>
  );
}