import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Masterclass | Ravindu Jayathilake',
  description: 'Join the exclusive online guitar masterclass. Learn professional techniques, theory, and performance skills.',
}

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The Online Guitar Masterclass
            </h1>
            <p className="text-lg text-gray-400">
              Get exclusive access to my complete library of video lessons. Whether you're a beginner looking to build a solid foundation or an advanced player refining your technique, these classes cover everything you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What's Included?</h2>
              <ul className="space-y-4">
                {[
                  'Access to 50+ structured video lessons',
                  'Live interactive weekly Zoom classes',
                  'High-quality multi-angle video breakdowns',
                  'In-depth music theory and practical application',
                  'Direct feedback and student community access',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-teal-500 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">Monthly Subscription</h3>
              <div className="flex justify-center items-end gap-1 mb-2">
                <span className="text-4xl font-bold text-white">LKR 2,500</span>
                <span className="text-gray-500 mb-1">/ month</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">+ LKR 500 one-time admission fee</p>
              
              <Link href="/checkout" className="block w-full py-4 px-6 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition duration-200">
                Enroll Now (LKR 3,000)
              </Link>
              
              <p className="text-xs text-gray-600 mt-4">
                Secure payments via PayHere or direct Bank Transfer. Cancel anytime.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
