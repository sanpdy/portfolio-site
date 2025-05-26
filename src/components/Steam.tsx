"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";

interface Game {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
}

interface Player {
  steamid: string;
  personaname: string;
  avatarfull: string;
  personastate: number;
  profileurl: string;
}

export default function Steam({ steamId }: { steamId: string }) {
  const [player, setPlayer] = useState<Player | null>(null);
  const [recentGames, setRecentGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /*const formatPlaytime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const rem = minutes % 60;
    return rem > 0 ? `${hours}h ${rem}m` : `${hours}h`;
  };

  const getStatusText = (state: number) => {
    const statuses = [
      "Offline",
      "Online",
      "Busy",
      "Away",
      "Snooze",
      "Looking to Trade",
      "Looking to Play",
    ];
    return statuses[state] || "Unknown";
  };*/

  useEffect(() => {
    if (!steamId) return;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        // fetch player
        const pr = await fetch(
          `/api/steam?interfaceName=ISteamUser&method=GetPlayerSummaries&steamids=${steamId}`
        );
        if (!pr.ok) throw new Error(`Player API error: ${pr.status}`);
        const pd = await pr.json();
        const pi = pd.response?.players?.[0];
        if (!pi) throw new Error("Player not found");
        setPlayer(pi);

        // fetch recent games
        const gr = await fetch(
          `/api/steam?interfaceName=IPlayerService&method=GetRecentlyPlayedGames&version=v0001&steamid=${steamId}&count=4`
        );
        if (!gr.ok) {
          setRecentGames([]);
        } else {
          const gd = await gr.json();
          setRecentGames(gd.response?.games || []);
        }
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
        Loading Steam profile…
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
  if (!player) {
    return (
      <div className="text-center py-8 bg-[#111] text-gray-400 rounded-2xl border border-gray-700">
        Player not found
      </div>
    );
  }

  return (
    <section id="steam" className="section">
      <div className="container">
        {/* Recent Games */}
        <div>
          <h3 className="text-white text-lg mb-4 pb-2 border-b border-dashed border-zinc-800">
            Recent Games
          </h3>

          {recentGames.length === 0 ? (
            <p className="text-gray-400 italic text-center py-8">No recently played games found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentGames.map((game) => (
                <div
                  key={game.appid}
                  className="bg-[#111] border border-dashed border-zinc-800 rounded-lg p-4 hover:shadow-lg transition-shadow flex items-center gap-4"
                >
                  <img
                    src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`}
                    alt={`${game.name} icon`}
                    className="w-10 h-10 rounded-sm"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="flex-1">
                    <h4 className="text-white text-base">{game.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
