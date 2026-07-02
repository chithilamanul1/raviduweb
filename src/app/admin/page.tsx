import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const metadata = {
  title: 'Admin Panel | Ravindu Jayathilake',
}

export default function AdminPage() {
  // Mock data for UI scaffolding
  const students = [
    { id: 1, name: 'Kasun Perera', email: 'kasun@example.com', status: 'pending_payment', date: '2026-07-01' },
    { id: 2, name: 'Nimali Silva', email: 'nimali@example.com', status: 'active', date: '2026-06-28' },
  ];

  const videos = [
    { id: 1, title: 'Introduction to Fingerstyle', url: 'https://youtube.com/unlisted-link-1' },
    { id: 2, title: 'Advanced Chord Progressions', url: 'https://youtube.com/unlisted-link-2' },
  ];

  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          
          <h1 className="text-3xl font-bold tracking-tight text-white mb-10">
            Instructor Admin Panel
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Payment Approvals Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Student Management</h2>
                <span className="bg-teal-500/20 text-teal-400 text-xs px-3 py-1 rounded-full font-medium">1 Pending</span>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-800">
                  {students.map((student) => (
                    <div key={student.id} className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <p className="font-medium text-gray-200">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                        <div className="mt-2">
                          <span className={`text-xs px-2 py-1 rounded font-medium ${
                            student.status === 'active' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                          }`}>
                            {student.status === 'active' ? 'Active' : 'Pending Receipt'}
                          </span>
                        </div>
                      </div>
                      
                      {student.status === 'pending_payment' && (
                        <div className="flex gap-2 w-full sm:w-auto">
                          <button className="flex-1 sm:flex-none px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-xs font-medium rounded transition">
                            View Receipt
                          </button>
                          <button className="flex-1 sm:flex-none px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-white text-xs font-medium rounded transition">
                            Approve
                          </button>
                        </div>
                      )}
                      
                      {student.status === 'active' && (
                        <button className="px-3 py-1.5 text-gray-500 hover:text-red-400 text-xs font-medium rounded transition">
                          Revoke Access
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Management Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Video Library</h2>
                <button className="bg-white hover:bg-gray-200 text-black text-sm px-4 py-1.5 rounded-lg font-bold transition">
                  + Add Video
                </button>
              </div>
              
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
                <div className="divide-y divide-gray-800">
                  {videos.map((video) => (
                    <div key={video.id} className="p-5 flex justify-between items-center group">
                      <div>
                        <p className="font-medium text-gray-200">{video.title}</p>
                        <a href={video.url} target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:underline truncate max-w-[200px] sm:max-w-xs block">
                          {video.url}
                        </a>
                      </div>
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-gray-500 hover:text-white transition">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-red-400 transition">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
