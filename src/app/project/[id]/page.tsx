"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projectsData: Record<string, {
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  isRed: boolean;
  rank: string;
  suit: string;
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}> = {
  "smart-parking": {
    title: "SMART PARKING",
    category: "IOT PLATFORM",
    year: "2023",
    rank: "Q",
    suit: "♠",
    isRed: false,
    description: "An intelligent IoT-based parking management system",
    longDescription: "Smart Parking is a comprehensive IoT solution designed to revolutionize urban parking management. The system uses a network of sensors and real-time data processing to guide drivers to available parking spots, reducing congestion and emissions from vehicles circling for parking.",
    technologies: ["Arduino", "ESP32", "React Native", "Node.js", "MongoDB", "MQTT"],
    features: [
      "Real-time parking spot availability tracking",
      "Mobile app for parking reservations",
      "Dynamic pricing based on demand",
      "Analytics dashboard for parking operators",
      "Integration with city traffic systems"
    ],
    challenges: [
      "Optimizing sensor battery life for outdoor deployment",
      "Ensuring reliable connectivity in underground garages",
      "Handling high-frequency data updates at scale"
    ],
    images: ["/placeholder-project.jpg"]
  },
  "fromflow": {
    title: "FROMFLOW",
    category: "WEB SAAS",
    year: "2024",
    rank: "A",
    suit: "♠",
    isRed: false,
    description: "A modern form builder SaaS application",
    longDescription: "FromFlow is a next-generation form builder that combines intuitive drag-and-drop functionality with powerful logic and integrations. Built for teams who need more than basic forms, it offers advanced features like conditional logic, multi-step forms, and seamless third-party integrations.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe"],
    features: [
      "Drag-and-drop form builder with 50+ field types",
      "Advanced conditional logic and branching",
      "Real-time collaboration for teams",
      "Built-in analytics and conversion tracking",
      "Webhooks and API integrations"
    ],
    challenges: [
      "Building a performant drag-and-drop system",
      "Implementing complex form logic engine",
      "Ensuring accessibility compliance"
    ],
    images: ["/placeholder-project.jpg"]
  },
  "activity-tracker": {
    title: "ACTIVITY TRACKER",
    category: "MOBILE UTILITY",
    year: "2024",
    rank: "Q",
    suit: "♥",
    isRed: true,
    description: "Mobile app for tracking daily activities and habits",
    longDescription: "Activity Tracker is a beautifully designed mobile application that helps users build and maintain healthy habits. With its intuitive interface and gamification elements, it makes habit tracking enjoyable and sustainable, leading to lasting behavioral change.",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Reanimated"],
    features: [
      "Custom habit creation with flexible schedules",
      "Streak tracking and achievement system",
      "Detailed statistics and progress visualization",
      "Reminder notifications with smart scheduling",
      "Cloud sync across devices"
    ],
    challenges: [
      "Designing an engaging notification system that isn't annoying",
      "Creating smooth animations for habit completion",
      "Implementing offline-first architecture"
    ],
    images: ["/placeholder-project.jpg"]
  },
  "malayalam-fml": {
    title: "MALAYALAM FML",
    category: "FIGMA PLUGIN",
    year: "2024",
    rank: "A",
    suit: "♥",
    isRed: true,
    description: "Figma plugin for Malayalam typography and fonts",
    longDescription: "Malayalam FML is a specialized Figma plugin that brings professional Malayalam typography tools to designers. It solves common challenges with Malayalam text rendering in design tools, offering font pairing suggestions, proper text shaping, and a curated library of Malayalam fonts.",
    technologies: ["TypeScript", "Figma Plugin API", "React", "WebAssembly"],
    features: [
      "Extensive library of curated Malayalam fonts",
      "Intelligent font pairing suggestions",
      "Proper Malayalam text shaping and rendering",
      "Typography presets for common use cases",
      "Export options optimized for web and print"
    ],
    challenges: [
      "Handling complex Malayalam script rendering",
      "Building a font preview system within Figma constraints",
      "Creating an intuitive UI for non-Malayalam speakers"
    ],
    images: ["/placeholder-project.jpg"]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/" className="text-red-500 hover:text-red-400">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const accentColor = project.isRed ? "text-red-500" : "text-gray-400";
  const accentBg = project.isRed ? "bg-red-500" : "bg-gray-500";
  const accentBorder = project.isRed ? "border-red-500" : "border-gray-500";

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm tracking-wider">BACK</span>
            </button>
            
            <div className="flex items-center gap-4">
              <span className={`text-2xl ${accentColor}`}>{project.rank}</span>
              <span className={`text-2xl ${accentColor}`}>{project.suit}</span>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className={`text-sm tracking-[0.3em] ${accentColor}`}>
                {project.category}
              </span>
              
              <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {project.title}
              </h1>
              
              <p className="text-white/40 text-sm tracking-wider mb-8">
                EST. {project.year}
              </p>

              <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-12">
                {project.longDescription}
              </p>

              <div className="flex gap-4 mb-16">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 ${accentBg} text-black font-medium rounded-full hover:opacity-90 transition-opacity`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 border ${accentBorder} ${accentColor} rounded-full hover:bg-white/5 transition-colors`}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`w-full aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border ${accentBorder}/20 mb-16 flex items-center justify-center`}
            >
              <div className="text-center">
                <span className={`text-8xl ${accentColor}`}>{project.suit}</span>
                <p className="text-white/30 mt-4 text-sm">Project Preview</p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-6`}>TECHNOLOGIES</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-6`}>KEY FEATURES</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className={`${accentColor} mt-1`}>◆</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-16"
            >
              <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-6`}>CHALLENGES & SOLUTIONS</h2>
              <div className="grid gap-4">
                {project.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl"
                  >
                    <span className={`text-sm ${accentColor} mb-2 block`}>Challenge {i + 1}</span>
                    <p className="text-white/70">{challenge}</p>
                  </div>
                ))}
              </div>
            </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center pt-12 border-t border-white/10"
              >
                <p className="text-white/40 mb-6">Interested in working together?</p>
                <button
                  onClick={() => router.push("/#contact")}
                  className={`inline-flex items-center gap-2 px-8 py-4 ${accentBg} text-black font-medium rounded-full hover:opacity-90 transition-opacity`}
                >
                  Get in Touch
                </button>
              </motion.div>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
