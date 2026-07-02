"use client"

import { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState('')

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    
    if (!name || !email) {
      setError('Please enter your Name and Email before uploading the receipt.')
      return;
    }

    const file = e.target.files[0]
    setIsUploading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('name', name)
      formData.append('email', email)

      const response = await fetch('/api/checkout', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      // Upload successful, redirect to dashboard
      router.push('/dashboard?status=pending')

    } catch (err) {
      console.error(err)
      setError('Failed to upload receipt. Please try again.')
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-dark text-gray-100 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-10 text-center">
            Complete Your Enrollment
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Order Summary */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 h-fit">
              <h2 className="text-xl font-medium text-white mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>First Month Subscription</span>
                  <span>LKR 2,500</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>One-time Admission Fee</span>
                  <span>LKR 500</span>
                </div>
              </div>
              
              <div className="border-t border-gray-800 pt-4 flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-white">Total Due Today</span>
                <span className="text-2xl font-bold text-white">LKR 3,000</span>
              </div>
              
              <p className="text-xs text-gray-500 mb-6">
                After your first month, your subscription will automatically renew at LKR 2,500/month. You can cancel anytime from your dashboard.
              </p>

              {/* Student Details Form */}
              <div className="space-y-4 border-t border-gray-800 pt-6">
                <h3 className="font-medium text-white">Student Details</h3>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-6">
              
              {/* Option A: Bank Transfer */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-500">
                    1
                  </div>
                  <h2 className="text-xl font-medium text-white">Manual Bank Transfer</h2>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg text-sm text-gray-300 mb-4 font-mono">
                  <p>Bank: Commercial Bank</p>
                  <p>Branch: Kandy City</p>
                  <p>Account Name: Ravindu Jayathilake</p>
                  <p>Account No: 1234567890</p>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">
                  Transfer the total amount (LKR 3,000) to the account above and upload your receipt to instantly unlock your access.
                </p>

                {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
                
                {/* Hidden File Input */}
                <input 
                  type="file" 
                  id="receipt-upload" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={isUploading}
                />
                
                <label 
                  htmlFor="receipt-upload"
                  className={`w-full py-3 px-4 ${isUploading ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700 cursor-pointer'} text-white font-medium rounded-lg transition duration-200 border border-gray-700 flex justify-center items-center gap-2`}
                >
                  {isUploading ? (
                    <span>Uploading...</span>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Select Receipt Image
                    </>
                  )}
                </label>
              </div>

              {/* OR Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px bg-gray-800 flex-grow"></div>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">OR</span>
                <div className="h-px bg-gray-800 flex-grow"></div>
              </div>

              {/* Option B: PayHere */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 opacity-50 cursor-not-allowed">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    2
                  </div>
                  <h2 className="text-xl font-medium text-white">Pay Online (PayHere)</h2>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">
                  Pay instantly using your Credit/Debit card, Frimi, Dialog eZ Cash, or specialized online banking.
                </p>
                
                <button disabled className="w-full py-3 px-4 bg-blue-600/50 text-white font-medium rounded-lg transition duration-200 cursor-not-allowed">
                  Coming Soon
                </button>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
