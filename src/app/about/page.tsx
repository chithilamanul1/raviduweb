import { About } from '../../components/About'

export const metadata = {
  title: 'About | Ravindu Jayathilake',
  description: 'Learn more about Ravindu Jayathilake, a professional guitarist and musician dedicated to the craft of playing and teaching.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <About />
    </div>
  )
}
