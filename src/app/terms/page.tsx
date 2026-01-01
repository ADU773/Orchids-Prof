"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-wider">BACK</span>
          </Link>
          
          <Link href="/" className="text-lg font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-[#00f3ff] to-[#bc13fe] bg-clip-text text-transparent">
              ADVAITH
            </span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Terms of <span className="text-white/20 italic">Service</span>
            </h1>
            
            <p className="text-white/40 text-sm mb-12">Last updated: January 2024</p>

            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using ADVAITH&apos;s website and services, you agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Use of Services</h2>
                <p className="leading-relaxed mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the services in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to any portion of the services</li>
                  <li>Interfere with the proper working of the services</li>
                  <li>Use the services to transmit harmful code or malware</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality of our website, including but not limited to 
                  text, graphics, logos, and software, are the exclusive property of ADVAITH and are 
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Project Work</h2>
                <p className="leading-relaxed">
                  For commissioned work, specific terms will be outlined in individual project agreements. 
                  These may include details about deliverables, timelines, payment terms, and intellectual 
                  property rights transfer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  ADVAITH shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from your use of or inability to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Modifications</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any 
                  material changes by posting the new Terms on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
                <p className="leading-relaxed">
                  For questions about these Terms, please contact us at{" "}
                  <a href="mailto:hello@advaith.dev" className="text-[#00f3ff] hover:underline">
                    hello@advaith.dev
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
