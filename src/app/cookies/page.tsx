"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiesPage() {
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
              Cookie <span className="text-white/20 italic">Policy</span>
            </h1>
            
            <p className="text-white/40 text-sm mb-12">Last updated: January 2024</p>

            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">What Are Cookies</h2>
                <p className="leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device when 
                  you visit a website. They are widely used to make websites work more efficiently and 
                  provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">How We Use Cookies</h2>
                <p className="leading-relaxed mb-4">We use cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Performance Cookies:</strong> Help improve site performance and user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white mb-2">Session Cookies</h3>
                    <p className="text-sm">Temporary cookies that are deleted when you close your browser.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white mb-2">Persistent Cookies</h3>
                    <p className="text-sm">Remain on your device for a set period or until you delete them.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white mb-2">Third-Party Cookies</h3>
                    <p className="text-sm">Set by third-party services we use, such as analytics providers.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Managing Cookies</h2>
                <p className="leading-relaxed mb-4">
                  You can control and manage cookies in various ways. Most browsers allow you to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block all cookies from being set</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Browser Settings</h2>
                <p className="leading-relaxed">
                  Please note that if you choose to block cookies, some features of our website may 
                  not function properly. You can adjust your cookie settings in your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about our use of cookies, please contact us at{" "}
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
