import { Contact } from '../../components/Contact'

export const metadata = {
  title: 'Contact | Ravindu Jayathilake',
  description: 'Get in touch with Ravindu Jayathilake for bookings, collaborations, or guitar class inquiries.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Contact />
    </div>
  )
}
