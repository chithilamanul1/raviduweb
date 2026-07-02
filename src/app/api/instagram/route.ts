import { NextResponse } from 'next/server'

export async function GET() {
  const posts = [
    { 
      id: 'post1', 
      media_url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/p/DY2DHgxu5Z2/',
      like_count: 124,
      comments_count: 12
    },
    { 
      id: 'post2', 
      media_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/p/DZF7flhzjRd/',
      like_count: 89,
      comments_count: 5
    },
    { 
      id: 'post3', 
      media_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/p/DZxC_wqu8zw/',
      like_count: 231,
      comments_count: 24
    },
    { 
      id: 'post4', 
      // Replacing the broken Unsplash image with a valid one of a guitar
      media_url: 'https://images.unsplash.com/photo-1485278537138-4e8911a13c02?q=80&w=600&auto=format&fit=crop', 
      permalink: 'https://www.instagram.com/p/DX4hzFOuY6M/',
      like_count: 156,
      comments_count: 8
    },
  ]

  return NextResponse.json({ data: posts })
}
