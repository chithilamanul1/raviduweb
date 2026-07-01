import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.INSTAGRAM_TOKEN || 'EAA9Fddrs4fQBRZBAJ7ldDztnDYwViYoLwEsmwGcrdvK0tZABquEH17O3jMMU5V9ZCDs0OcPOLlvWjn2agtNFeoYNHf2u8ZCQ4nUzUrnsKZCwPm8XEnrgNRco2QOoJzyt4w6vtaQKJeB53gx2RtQ99Hq7QnVdrIB22ZAtDUS6ETiZBE5XbpUWZC9ZBg5nBdPAZCYm6ZBmEVefZB47CxZAsP3PMT4tGAI6ZCTz5C77razECPodS8dBJXz04gwWoKWO5WvYJrAOGP1Cp3n3R0T92Uc30WedLQzFXC5sygGuZB9pkwSScyvxkZAYoaowkzltEXOXsEU9mDboJ0v6XGNUYbOd'

  // Fallback data if no token is provided
  const fallbackData = [
    { 
      id: 'mock1', 
      media_url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/ravindu_jayathilake_/',
      like_count: 124,
      comments_count: 12
    },
    { 
      id: 'mock2', 
      media_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/ravindu_jayathilake_/',
      like_count: 89,
      comments_count: 5
    },
    { 
      id: 'mock3', 
      media_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/ravindu_jayathilake_/',
      like_count: 231,
      comments_count: 24
    },
    { 
      id: 'mock4', 
      media_url: 'https://images.unsplash.com/photo-1460723237483-7a5d506996d9?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/ravindu_jayathilake_/',
      like_count: 156,
      comments_count: 8
    },
  ]

  if (!token) {
    return NextResponse.json({ 
      error: 'Missing INSTAGRAM_TOKEN environment variable. Using fallback data.',
      data: fallbackData 
    })
  }

  try {
    // Official Instagram Basic Display API
    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}&limit=4`, {
      next: { revalidate: 3600 } // Cache for 1 hour to prevent rate limiting
    })
    
    const data = await res.json()
    
    if (data.error) {
      console.error('Instagram API Error:', data.error)
      return NextResponse.json({ data: fallbackData })
    }

    return NextResponse.json({ data: data.data || fallbackData })
  } catch (error) {
    console.error('Failed to fetch Instagram posts:', error)
    return NextResponse.json({ data: fallbackData })
  }
}
