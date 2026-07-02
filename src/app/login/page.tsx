"use client"

import { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address.')
      return;
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Login successful, cookie is set, redirect to dashboard
      router.push('/dashboard')
      router.refresh() // Force refresh to apply server-side cookie

    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Failed to login. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 flex items-center justify-center">
        <div className="w-full max-w-md px-6">
          
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Student Login</h1>
              <p className="text-gray-400 text-sm">Enter your registered email to access your masterclass dashboard.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm text-center">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-3 px-4 ${isLoading ? 'bg-gray-700 cursor-not-allowed' : 'bg-white hover:bg-gray-200'} text-black font-bold rounded-lg transition duration-200 flex justify-center items-center`}
              >
                {isLoading ? 'Checking...' : 'Enter Dashboard'}
              </button>
            </form>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  )
}
