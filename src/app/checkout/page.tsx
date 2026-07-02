import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const metadata = {
  title: 'Checkout | Ravindu Jayathilake',
  description: 'Complete your enrollment to the Guitar Masterclass.',
}

export default function CheckoutPage() {
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
              
              <p className="text-xs text-gray-500">
                After your first month, your subscription will automatically renew at LKR 2,500/month. You can cancel anytime from your dashboard.
              </p>
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
                
                <button className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-200 border border-gray-700 flex justify-center items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Upload Receipt
                </button>
              </div>

              {/* OR Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px bg-gray-800 flex-grow"></div>
                <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">OR</span>
                <div className="h-px bg-gray-800 flex-grow"></div>
              </div>

              {/* Option B: PayHere */}
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    2
                  </div>
                  <h2 className="text-xl font-medium text-white">Pay Online (PayHere)</h2>
                </div>
                
                <p className="text-sm text-gray-400 mb-4">
                  Pay instantly using your Credit/Debit card, Frimi, Dialog eZ Cash, or specialized online banking.
                </p>
                
                <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-lg shadow-blue-500/20">
                  Pay with PayHere
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
