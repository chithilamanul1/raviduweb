import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from 'next-sanity'

export const metadata = {
  title: 'Student Dashboard | Ravindu Jayathilake',
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'czcl29jz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export default async function DashboardPage() {
  const cookieStore = cookies()
  const studentEmail = cookieStore.get('student_email')?.value

  if (!studentEmail) {
    redirect('/login')
  }

  // Fetch student status
  const student = await client.fetch(`*[_type == "student" && email == $email][0]`, { email: studentEmail })
  
  if (!student) {
    redirect('/login')
  }

  const isSubscribed = student.paymentStatus === 'active';
  
  // Fetch video classes ordered by the 'order' field
  const classes = isSubscribed 
    ? await client.fetch(`*[_type == "videoClass"] | order(order asc)`)
    : [];

  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Student Dashboard</h1>
              <p className="text-gray-400">Welcome back, {student.name.split(' ')[0]}!</p>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 flex flex-col">
                <span className="text-xs text-gray-500 uppercase font-medium">Status</span>
                <span className={`text-sm font-bold ${isSubscribed ? 'text-teal-400' : 'text-yellow-500'}`}>
                  {isSubscribed ? 'Active Subscription' : 'Pending Payment'}
                </span>
              </div>
            </div>
          </div>

          {!isSubscribed ? (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-yellow-500 mb-2">Payment Pending Review</h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-6">
                Your receipt has been submitted and is currently being reviewed. Once approved, you will have instant access to all video classes right here.
              </p>
              <Link href="/classes" className="inline-block py-2 px-6 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition duration-200">
                Explore Classes
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Video Player Area */}
              <div className="md:col-span-2">
                {classes.length > 0 ? (
                  <>
                    <div className="bg-black rounded-2xl aspect-video border border-gray-800 flex items-center justify-center mb-6 overflow-hidden relative">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src={classes[0].videoUrl.replace('watch?v=', 'embed/').split('&')[0]} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full absolute inset-0"
                      ></iframe>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-2">{classes[0].title}</h2>
                    <p className="text-gray-400 mb-8 whitespace-pre-line">
                      {classes[0].description}
                    </p>
                  </>
                ) : (
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center text-gray-400">
                    No classes have been uploaded yet. Check back soon!
                  </div>
                )}
              </div>

              {/* Class List Sidebar */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden h-fit">
                <div className="p-4 border-b border-gray-800 bg-black/20">
                  <h3 className="font-bold text-white">Class Library</h3>
                </div>
                <div className="divide-y divide-gray-800">
                  {classes.map((cls: any, idx: number) => (
                    <button key={cls._id} className="w-full text-left p-4 hover:bg-gray-800 transition duration-150 group">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-gray-200 group-hover:text-teal-400 transition-colors">
                          {idx + 1}. {cls.title}
                        </span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 gap-3">
                        {cls.duration && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {cls.duration}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                  {classes.length === 0 && (
                    <div className="p-6 text-sm text-gray-500 text-center">Empty</div>
                  )}
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
