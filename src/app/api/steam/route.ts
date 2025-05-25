// app/api/steam/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  console.log('App Router API called with searchParams:', Object.fromEntries(searchParams));
  
  const interfaceName = searchParams.get('interfaceName');
  const method = searchParams.get('method');
  const version = searchParams.get('version') || 'v0002';

  if (!interfaceName || !method) {
    return NextResponse.json(
      { error: 'interfaceName and method are required' },
      { status: 400 }
    );
  }

  const key = process.env.STEAM_API_KEY;
  
  if (!key) {
    console.error('STEAM_API_KEY not found in environment variables');
    return NextResponse.json(
      { error: 'Steam API key not configured' },
      { status: 500 }
    );
  }

  // Handle different interface patterns
  let apiVersion = version;
  if (interfaceName === 'IPlayerService') {
    apiVersion = 'v0001';
  }

  // Build parameters object
  const params: Record<string, string> = { key, format: 'json' };
  searchParams.forEach((value, key) => {
    if (!['interfaceName', 'method', 'version'].includes(key)) {
      params[key] = value;
    }
  });

  const qs = new URLSearchParams(params);
  const url = `https://api.steampowered.com/${interfaceName}/${method}/${apiVersion}/?${qs}`;

  console.log('Steam API URL:', url.replace(key, 'HIDDEN_KEY'));

  try {
    const steamRes = await fetch(url);
    
    if (!steamRes.ok) {
      console.error(`Steam API HTTP error: ${steamRes.status} ${steamRes.statusText}`);
      return NextResponse.json(
        { error: `Steam API error: ${steamRes.status} ${steamRes.statusText}` },
        { status: steamRes.status }
      );
    }

    const contentType = steamRes.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await steamRes.text();
      console.error('Steam API returned non-JSON response:', textResponse.substring(0, 200));
      return NextResponse.json(
        { error: 'Steam API returned invalid response format' },
        { status: 500 }
      );
    }

    const data = await steamRes.json();
    
    if (data.error) {
      console.error('Steam API error in response:', data.error);
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('Steam API request failed:', err);
    
    if (err instanceof TypeError && err.message.includes('fetch')) {
      return NextResponse.json(
        { error: 'Network error connecting to Steam API' },
        { status: 500 }
      );
    }
    
    if (err instanceof SyntaxError && err.message.includes('JSON')) {
      return NextResponse.json(
        { error: 'Steam API returned invalid JSON response' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Steam API request failed' },
      { status: 500 }
    );
  }
}