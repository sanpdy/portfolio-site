"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";

interface Game {
  appid: number;
  name: string;
  playtime_2weeks?: number;
  playtime_forever?: number;
  blurb?: string;
}

export default function Steam({ steamId }: { steamId: string }) {
  const [recentGames, setRecentGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Format playtime from minutes to hours/minutes
  const formatPlaytime = (minutes?: number) => {
    if (!minutes) return "0m";
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const rem = minutes % 60;
    return rem > 0 ? `${hours}h ${rem}m` : `${hours}h`;
  };

  useEffect(() => {
    if (!steamId) return;
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const resp = await fetch(`/api/steam?steamid=${steamId}`);
        if (!resp.ok) throw new Error(`Steam API error: ${resp.status}`);
        const { games } = await resp.json();
        setRecentGames(games);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to fetch Steam data");
      } finally {
        setLoading(false);
      }
    })();
  }, [steamId]);

  if (loading) {
    return (
      <div className="text-center py-8 bg-[#111] text-gray-400 rounded-2xl border border-gray-700">
        Loading Steam games…
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-8 bg-[#111] text-red-500 rounded-2xl border border-gray-700">
        Error: {error}
      </div>
    );
  }

  return (
    <section id="steam" className="section">
      <div className="container">
        <h3 className="text-white text-lg mb-4 pb-2 border-b border-dashed border-zinc-800">
          Recent Games
        </h3>
        {recentGames.length === 0 ? (
          <p className="text-gray-400 italic text-center py-8">
            No recently played games found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recentGames.map((game) => (
              <div
                key={game.appid}
                className="bg-[#111] border border-dashed border-zinc-800 rounded-lg p-4 flex gap-4 items-start hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
                  alt={game.name}
                  width={184}
                  height={69}
                  className="rounded"
                />
                <div className="flex-1">
                  <h4 className="text-white text-base">{game.name}</h4>
                  <div className="text-gray-400 text-sm">
                    Playtime: {formatPlaytime(game.playtime_forever)}
                  </div>
                  {game.blurb && (
                    <div className="text-gray-300 mt-2 text-xs italic">
                      {game.blurb}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
