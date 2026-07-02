import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Student Dashboard | Ravindu Jayathilake',
}

export default function DashboardPage() {
  // Mock data for UI scaffolding
  const isSubscribed = true;
  const classes = [
    { id: 1, title: 'Introduction to Fingerstyle', duration: '45 mins', date: '2026-07-01' },
    { id: 2, title: 'Advanced Chord Progressions', duration: '55 mins', date: '2026-07-08' },
    { id: 3, title: 'Mastering the Fretboard', duration: '60 mins', date: '2026-07-15' },
  ];

  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Student Dashboard</h1>
              <p className="text-gray-400">Welcome back! Pick up where you left off.</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-medium">Status</span>
                <span className={`text-sm font-bold ${isSubscribed ? 'text-teal-400' : 'text-red-400'}`}>
                  {isSubscribed ? 'Active Subscription' : 'Pending Payment'}
                </span>
              </div>
            </div>
          </div>

          {!isSubscribed ? (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-yellow-500 mb-2">Payment Pending</h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-6">
                We are currently reviewing your bank transfer receipt. Once approved, you will have full access to all video classes.
              </p>
              <Link href="/checkout" className="inline-block py-2 px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition duration-200">
                View Payment Details
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Video Player Area */}
              <div className="md:col-span-2">
                <div className="bg-black rounded-2xl aspect-video border border-gray-800 flex items-center justify-center mb-6 overflow-hidden relative group cursor-pointer">
                  {/* Mock Video Placeholder */}
                  <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=80" alt="Video thumbnail" className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300 border border-white/20">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4l12 6-12 6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">Advanced Chord Progressions</h2>
                <p className="text-gray-400 mb-8">
                  In this lesson, we break down complex jazz-influenced chord shapes and how to use them to add color to your standard pop progressions.
                </p>
              </div>

              {/* Class List Sidebar */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden h-fit">
                <div className="p-4 border-b border-gray-800 bg-black/20">
                  <h3 className="font-bold text-white">Class Library</h3>
                </div>
                <div className="divide-y divide-gray-800">
                  {classes.map((cls) => (
                    <button key={cls.id} className="w-full text-left p-4 hover:bg-gray-800 transition duration-150 group">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-gray-200 group-hover:text-teal-400 transition-colors">{cls.title}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 gap-3">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {cls.duration}
                        </span>
                        <span>{cls.date}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}
