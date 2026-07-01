import { Music } from '../../components/Music'

export const metadata = {
  title: 'Music & Performances | Ravindu Jayathilake',
  description: 'Listen to the latest covers, original performances, and studio sessions by Ravindu Jayathilake.',
}

export default function MusicPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Music />
    </div>
  )
}
