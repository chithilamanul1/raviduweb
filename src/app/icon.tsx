import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          border: '2px solid #14b8a6', // teal-500
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2dd4bf" // teal-400
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m11.5 8.5-3-3" />
          <path d="m14.5 10.5-3-3" />
          <path d="M12.5 5.5 15 3a2.12 2.12 0 0 1 3 3l-2.5 2.5" />
          <path d="m16 9.5-2-2" />
          <path d="m11 12.5-3-3" />
          <path d="M2.21 21.79a3 3 0 0 0 4.24 0l2.3-2.3a7 7 0 1 0-9.9-9.9l-2.3 2.3a3 3 0 0 0 0 4.24Z" />
          <path d="m6 13 4 4" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
