import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PolicySectionCard } from "@/components/policy-section-card"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50/60 via-white/40 to-purple-50/60 dark:from-gray-900/80 dark:via-gray-800/70 dark:to-blue-900/80 backdrop-blur-sm -z-10" />

      <Navbar />
      <Hero />

      <section className="py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Peering Policy</h2>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            <PolicySectionCard title="Summary">
              <p>This document defines the peering policies for <strong>irsyad.eu</strong> (AS205018).</p>
            </PolicySectionCard>

            <PolicySectionCard title="Background">
              <p>
                AS205018 is a non-profit personal ASN operated as part of a hobbynet project, focusing on IPv6 only connectivity and network experimentation. 
                This network is built for learning, testing, and exploring internet routing technologies, and welcomes collaboration with others who share a passion for networking and open peering.
                We are always open to peering, ideas, and collaborations with anyone interested, and we hope you are open to peering with us too. 
                Because the internet grows stronger when we build it together, let's grow and exchange knowledge in the spirit of open networking.
              </p>
            </PolicySectionCard>

            <PolicySectionCard title="Policy Statement">
              <p>
                irsyad.eu adopts an open peering policy, all networks matching the technical requirements below are welcome to peer with us. We aim to establish reliable and mutually beneficial peering sessions whenever possible. 
                All peering sessions with <strong>AS205018:AS-SET</strong> will advertise routes registered in the RIPE IRR database, ensuring transparency and consistency in routing.
              </p>
            </PolicySectionCard>

            <PolicySectionCard title="Peering Requirements (General)">
              <div className="space-y-4">
                <p>To be eligible for peering, each candidate must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use a registered public autonomous system (AS) number;</li>
                  <li>
                    Publish valid contact information via
                    <a
                      href="https://www.peeringdb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      PeeringDB
                    </a>
                    ; and
                  </li>
                  <li>Maintain valid AS and prefix records with a public Internet Routing Registry (IRR).</li>
                </ul>

                <p>
                  A peer may only send toward us traffic intended for a destination network we advertise.
                  <br />
                  The use of static or default routes toward us is not permitted.
                  <br />
                  Peers must ensure that their policies in PeeringDB (e.g. maximum prefix count) are kept accurate.
                </p>

                <p>Encouraged but not required:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <a
                        href="https://datatracker.ietf.org/doc/html/rfc7999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        RFC 7999
                    </a>
                    — BLACKHOLE community</li>
                  <li>
                    <a
                        href="https://datatracker.ietf.org/doc/html/rfc8326"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        RFC 8326
                    </a>
                    — Graceful BGP session shutdown</li>
                </ul>
              </div>
            </PolicySectionCard>

            <PolicySectionCard title="Operations">
              <p>
                AS205018 periodically evaluates its peering policy and may update it to reflect operational needs or best practices.
                Route filtering may be applied at our discretion to ensure only appropriate prefixes are advertised over established peering sessions.
                <br />
                By default, we filter bogon prefixes (RFC 1918, 5735, 6598) and any default routes to maintain routing integrity.
              </p>
            </PolicySectionCard>

            <PolicySectionCard title="Contacts">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Abuse</h3>
                  <p>
                    <a
                      href="mailto:abuse@irsyad.eu"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Report Abuse
                    </a>
                    — Reports of abusive activity originating from AS205018 (spam, DDoS, copyright violations, etc.)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Peering</h3>
                  <p>
                    <a
                      href="mailto:peering@irsyad.eu"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Peering Request
                    </a>
                    — Requests for new peering sessions or changes to existing sessions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">NOC</h3>
                  <p>
                    <a
                      href="mailto:noc@irsyad.eu"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Ask Questions
                    </a>
                    — All other routing/network related issues.
                  </p>
                </div>
              </div>
            </PolicySectionCard>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
