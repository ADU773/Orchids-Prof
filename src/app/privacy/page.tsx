"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
              Privacy <span className="text-white/20 italic">Policy</span>
            </h1>
            
            <p className="text-white/40 text-sm mb-12">Last updated: January 2024</p>

            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                <p className="leading-relaxed">
                  At ADVAITH, we take your privacy seriously. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
                <p className="leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal data you voluntarily provide (name, email, etc.)</li>
                  <li>Usage data and analytics</li>
                  <li>Device and browser information</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Improve our website and user experience</li>
                  <li>Send you updates and marketing communications (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information. However, no method of transmission over the Internet is 
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of your data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{" "}
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
