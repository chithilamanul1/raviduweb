import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.INSTAGRAM_TOKEN || 'EAA9Fddrs4fQBR7EpGPo7Ww4OHkh6BKVOUVFG6aVZBZAYc45jf7EbfAg38qGryc4ZBeZChT2Bgrki3edAapQRizdN0ZA1VBoKrpGgtylSVVYhuUqg8WOEA3ZBzm6WM9shKqzkvXxcy168YyQW5kDQuRibT1JiRnrO4Kma7P2kAX6rVG2mzhnr5HtbZB2CeeZB7ZA23KNzKa74dPEP5pUj79VJDnVLpMUpOMh2jgnUt'

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
    return NextResponse.json({ data: fallbackData })
  }

  try {
    let posts = []

    // If it's a Facebook Graph API Token (Starts with EAA)
    if (token.startsWith('EAA')) {
      const accountsRes = await fetch(`https://graph.facebook.com/v19.0/me/accounts?fields=instagram_business_account&access_token=${token}`)
      const accountsData = await accountsRes.json()

      if (accountsData.data && accountsData.data.length > 0) {
        // Find the first linked Instagram Business Account
        const igAccount = accountsData.data.find((page: any) => page.instagram_business_account)
        
        if (igAccount) {
          const igId = igAccount.instagram_business_account.id
          const mediaRes = await fetch(`https://graph.facebook.com/v19.0/${igId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token=${token}&limit=4`)
          const mediaData = await mediaRes.json()
          
          if (mediaData.data) {
            posts = mediaData.data
          }
        } else {
          console.error("Facebook Token provided, but no linked Instagram Business Account found on any pages.")
        }
      } else {
        console.error("Facebook Token provided, but no pages found. Ensure the token has 'pages_show_list' and 'instagram_basic' permissions.")
      }
    } 
    // Otherwise, assume it's an Instagram Basic Display API Token (Starts with IGQ)
    else {
      const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}&limit=4`, {
        next: { revalidate: 3600 }
      })
      const data = await res.json()
      
      if (data.data) {
        posts = data.data
      } else {
        console.error("Instagram API Error:", data.error)
      }
    }

    if (posts.length > 0) {
      return NextResponse.json({ data: posts })
    } else {
      return NextResponse.json({ data: fallbackData })
    }

  } catch (error) {
    console.error('Failed to fetch Instagram posts:', error)
    return NextResponse.json({ data: fallbackData })
  }
}
