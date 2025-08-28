import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PolicySectionCard } from "@/components/policy-section-card"

export default function LookingGlass() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-20 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <PolicySectionCard title="Looking Glass">
              <div className="space-y-6">
                <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Coming soon…</p>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Our Looking Glass service is currently under development. This tool will allow you to perform network
                  diagnostics and view routing information from our network perspective.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Expected features: BGP route lookup, ping, traceroute, and network statistics.
                </p>
              </div>
            </PolicySectionCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
