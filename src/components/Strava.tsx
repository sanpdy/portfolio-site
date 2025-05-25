// src/components/Strava.tsx
'use client';

import { useState, useEffect } from 'react';

interface Activity {
  id: number;
  name: string;
  distance: number;
  start_date_local: string;
}

export default function Strava({ perPage = 10 }: { perPage?: number }) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `/api/strava?endpoint=athlete/activities&per_page=${perPage}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        console.log('Strava data:', data);

        // Strava returns an array for this endpoint
        if (Array.isArray(data)) {
          setActivities(data);
        } else {
          setActivities(data.activities || []); 
        }
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [perPage]);

  if (loading) {
    return (
      <div className="text-center py-8 text-gray-400">
        Loading Strava activities…
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error: {error}
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400">
        No recent activities found.
      </div>
    );
  }

  return (
    <section id="strava" className="space-y-4">
      <h3 className="text-lg font-semibold">Recent Strava Activities</h3>
      <ul className="space-y-2">
        {activities.map(act => (
          <li
            key={act.id}
            className="p-4 bg-gray-900 rounded-md flex justify-between"
          >
            <span>{act.name}</span>
            <span>{Math.round(act.distance)} m</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
