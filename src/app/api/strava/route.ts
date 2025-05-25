// src/app/api/strava/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  console.log('Strava API called with searchParams:', Object.fromEntries(searchParams));

  const endpoint = searchParams.get('endpoint') || 'athlete/activities';
  const accessToken = process.env.STRAVA_ACCESS_TOKEN;

  if (!accessToken) {
    console.error('STRAVA_ACCESS_TOKEN not found');
    return NextResponse.json(
      { error: 'Strava access token not configured' },
      { status: 500 }
    );
  }

  // Build query params, excluding our internal "endpoint" key
  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (key !== 'endpoint') {
      params[key] = value;
    }
  });

  const qs = new URLSearchParams(params);
  const url = `https://www.strava.com/api/v3/${endpoint}?${qs}`;
  console.log('Strava URL:', url.replace(accessToken, 'HIDDEN_TOKEN'));

  try {
    const stravaRes = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!stravaRes.ok) {
      console.error(`Strava HTTP error ${stravaRes.status}`);
      return NextResponse.json(
        { error: `Strava API error: ${stravaRes.statusText}` },
        { status: stravaRes.status }
      );
    }

    const contentType = stravaRes.headers.get('content-type') ?? '';
    if (!contentType.includes('application/json')) {
      const text = await stravaRes.text();
      console.error('Non-JSON from Strava:', text.slice(0, 200));
      return NextResponse.json(
        { error: 'Invalid response format from Strava' },
        { status: 500 }
      );
    }

    const data = await stravaRes.json();
    return NextResponse.json(data);
  } catch (err: unknown) {
    console.error('Strava fetch failed:', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: message || 'Strava API request failed' },
      { status: 500 }
    );
  }
}
