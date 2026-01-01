"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Home, User, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projectsData: Record<string, {
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  overview: string;
  role: string;
  duration: string;
  team: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  process: { title: string; description: string }[];
  results: { metric: string; value: string }[];
  isRed: boolean;
  rank: string;
  suit: string;
  liveUrl?: string;
  githubUrl?: string;
  images: { src: string; alt: string; caption: string }[];
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
    overview: "This project addresses the growing challenge of urban parking by creating a seamless connection between drivers and available parking spaces. Using cutting-edge sensor technology and real-time data analytics, we've built a system that not only helps individual drivers but also provides city planners with valuable insights into parking patterns.",
    role: "Lead Developer & System Architect",
    duration: "8 months",
    team: "4 developers, 2 hardware engineers",
    technologies: ["Arduino", "ESP32", "React Native", "Node.js", "MongoDB", "MQTT", "AWS IoT", "TensorFlow Lite"],
    features: [
      "Real-time parking spot availability tracking with 99.5% accuracy",
      "Mobile app for parking reservations and navigation",
      "Dynamic pricing based on demand and time of day",
      "Analytics dashboard for parking operators and city planners",
      "Integration with city traffic management systems",
      "Predictive availability using machine learning",
      "Multi-language support for international deployment"
    ],
    challenges: [
      "Optimizing sensor battery life for outdoor deployment - achieved 18 months battery life through smart sleep cycles",
      "Ensuring reliable connectivity in underground garages - implemented mesh networking with redundant gateways",
      "Handling high-frequency data updates at scale - built a custom MQTT broker with intelligent data aggregation"
    ],
    process: [
      { title: "Research & Discovery", description: "Conducted extensive field research in 5 major cities to understand parking pain points and existing solutions." },
      { title: "Prototype Development", description: "Created and tested 12 different sensor configurations before finalizing the optimal hardware design." },
      { title: "Software Architecture", description: "Designed a microservices architecture capable of handling 100,000+ concurrent sensor connections." },
      { title: "Pilot Program", description: "Deployed in a 500-space parking facility for 3 months of real-world testing and iteration." }
    ],
    results: [
      { metric: "Parking Search Time Reduced", value: "67%" },
      { metric: "Customer Satisfaction", value: "94%" },
      { metric: "Revenue Increase for Operators", value: "23%" },
      { metric: "CO2 Emissions Reduced", value: "15%" }
    ],
    images: [
      { src: "/images/smart-parking-1.jpg", alt: "Smart Parking Dashboard", caption: "Real-time monitoring dashboard showing parking availability" },
      { src: "/images/smart-parking-2.jpg", alt: "Mobile App Interface", caption: "Mobile app with navigation to available spots" },
      { src: "/images/smart-parking-3.jpg", alt: "Sensor Hardware", caption: "Custom-designed parking sensors with solar charging" },
      { src: "/images/smart-parking-4.jpg", alt: "Analytics View", caption: "Analytics dashboard for parking operators" }
    ]
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
    overview: "Born from the frustration of working with legacy form builders, FromFlow reimagines what a form creation experience should be. We focused on making complex form logic accessible to non-technical users while providing developers with the flexibility they need for custom implementations.",
    role: "Founder & Full Stack Developer",
    duration: "6 months (ongoing)",
    team: "Solo project with freelance designers",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Stripe", "Redis", "Vercel", "Resend"],
    features: [
      "Drag-and-drop form builder with 50+ field types",
      "Advanced conditional logic and branching workflows",
      "Real-time collaboration for teams with presence indicators",
      "Built-in analytics and conversion tracking",
      "Webhooks and API integrations with 20+ platforms",
      "Custom CSS and JavaScript injection for branding",
      "GDPR-compliant data handling and exports",
      "AI-powered form optimization suggestions"
    ],
    challenges: [
      "Building a performant drag-and-drop system - implemented virtual rendering for forms with 100+ fields",
      "Implementing complex form logic engine - created a custom DSL for form rules that's both powerful and user-friendly",
      "Ensuring accessibility compliance - achieved WCAG 2.1 AA compliance across all form templates"
    ],
    process: [
      { title: "Market Research", description: "Analyzed 15 competing products and interviewed 50+ potential users to identify gaps in the market." },
      { title: "MVP Development", description: "Built core functionality in 8 weeks, focusing on the most requested features from user interviews." },
      { title: "Beta Testing", description: "Onboarded 100 beta users who created over 2,000 forms and provided invaluable feedback." },
      { title: "Launch & Iteration", description: "Public launch with continuous feature releases based on user analytics and feedback." }
    ],
    results: [
      { metric: "Active Users", value: "2,500+" },
      { metric: "Forms Created", value: "15,000+" },
      { metric: "Form Submissions", value: "500K+" },
      { metric: "MRR Growth", value: "45%" }
    ],
    images: [
      { src: "/images/fromflow-1.jpg", alt: "Form Builder Interface", caption: "Intuitive drag-and-drop form builder" },
      { src: "/images/fromflow-2.jpg", alt: "Logic Builder", caption: "Visual conditional logic builder" },
      { src: "/images/fromflow-3.jpg", alt: "Analytics Dashboard", caption: "Comprehensive form analytics" },
      { src: "/images/fromflow-4.jpg", alt: "Integration Panel", caption: "Seamless third-party integrations" }
    ]
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
    overview: "We believe that building good habits shouldn't feel like a chore. Activity Tracker combines behavioral psychology principles with delightful design to create an experience that users actually look forward to. The app focuses on positive reinforcement rather than guilt-tripping users for missed days.",
    role: "Lead Mobile Developer & UX Designer",
    duration: "4 months",
    team: "2 developers, 1 designer",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Reanimated", "Lottie", "RevenueCat", "Mixpanel"],
    features: [
      "Custom habit creation with flexible schedules",
      "Streak tracking with beautiful achievement animations",
      "Detailed statistics and progress visualization",
      "Reminder notifications with smart scheduling",
      "Cloud sync across devices",
      "Social accountability features with friends",
      "Widget support for iOS and Android",
      "Dark mode and customizable themes"
    ],
    challenges: [
      "Designing an engaging notification system that isn't annoying - implemented ML-based optimal timing for reminders",
      "Creating smooth animations for habit completion - achieved 60fps animations using Reanimated 3",
      "Implementing offline-first architecture - built a robust sync system that handles conflicts gracefully"
    ],
    process: [
      { title: "User Research", description: "Studied habit formation psychology and analyzed usage patterns of 10 competing apps." },
      { title: "Design Sprint", description: "Ran a 5-day design sprint to establish the core UX and visual identity." },
      { title: "Development", description: "Agile development with 2-week sprints, prioritizing features based on user impact." },
      { title: "Beta & Launch", description: "2-month beta with 500 users before App Store and Play Store launch." }
    ],
    results: [
      { metric: "App Store Rating", value: "4.8★" },
      { metric: "Daily Active Users", value: "8,000+" },
      { metric: "Habits Tracked", value: "1M+" },
      { metric: "User Retention (30 day)", value: "42%" }
    ],
    images: [
      { src: "/images/activity-tracker-1.jpg", alt: "Home Screen", caption: "Beautiful home screen with daily habits" },
      { src: "/images/activity-tracker-2.jpg", alt: "Statistics View", caption: "Detailed progress statistics" },
      { src: "/images/activity-tracker-3.jpg", alt: "Achievement System", caption: "Gamified achievement system" },
      { src: "/images/activity-tracker-4.jpg", alt: "Settings", caption: "Customizable settings and themes" }
    ]
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
    overview: "As a designer who works with Malayalam text regularly, I experienced firsthand the frustration of poor text rendering and limited font options in design tools. Malayalam FML was born from this pain point, aiming to give designers the same quality tools for Malayalam that exist for Latin scripts.",
    role: "Creator & Developer",
    duration: "3 months",
    team: "Solo project",
    technologies: ["TypeScript", "Figma Plugin API", "React", "WebAssembly", "HarfBuzz", "Vite"],
    features: [
      "Extensive library of 100+ curated Malayalam fonts",
      "Intelligent font pairing suggestions using ML",
      "Proper Malayalam text shaping and rendering",
      "Typography presets for common use cases",
      "Export options optimized for web and print",
      "Real-time preview with different weights and styles",
      "Integration with Google Fonts Malayalam collection",
      "Custom font upload and testing"
    ],
    challenges: [
      "Handling complex Malayalam script rendering - integrated HarfBuzz via WebAssembly for proper shaping",
      "Building a font preview system within Figma constraints - created a custom rendering pipeline",
      "Creating an intuitive UI for non-Malayalam speakers - extensive user testing with international designers"
    ],
    process: [
      { title: "Problem Definition", description: "Documented all the pain points Malayalam designers face in Figma through community surveys." },
      { title: "Technical Research", description: "Explored WebAssembly and text shaping libraries to find the best approach for accurate rendering." },
      { title: "Plugin Development", description: "Built the plugin with a focus on performance, keeping the UI responsive even with large font libraries." },
      { title: "Community Launch", description: "Launched to the Figma community with documentation in both English and Malayalam." }
    ],
    results: [
      { metric: "Plugin Installs", value: "5,000+" },
      { metric: "Community Rating", value: "4.9★" },
      { metric: "Fonts Available", value: "100+" },
      { metric: "Active Weekly Users", value: "1,200+" }
    ],
    images: [
      { src: "/images/malayalam-fml-1.jpg", alt: "Plugin Interface", caption: "Main plugin interface with font browser" },
      { src: "/images/malayalam-fml-2.jpg", alt: "Font Pairing", caption: "AI-powered font pairing suggestions" },
      { src: "/images/malayalam-fml-3.jpg", alt: "Typography Presets", caption: "Ready-to-use typography presets" },
      { src: "/images/malayalam-fml-4.jpg", alt: "Preview Mode", caption: "Real-time font preview" }
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = projectsData[projectId];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const projectIds = Object.keys(projectsData);
  const currentIndex = projectIds.indexOf(projectId);
  const prevProject = currentIndex > 0 ? projectIds[currentIndex - 1] : projectIds[projectIds.length - 1];
  const nextProject = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : projectIds[0];

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

  const accentColor = project.isRed ? "text-red-500" : "text-white/70";
  const accentBg = project.isRed ? "bg-red-500" : "bg-white/80";
  const accentBorder = project.isRed ? "border-red-500" : "border-white/40";
  const accentGradient = project.isRed 
    ? "from-red-500/20 via-transparent to-transparent" 
    : "from-white/10 via-transparent to-transparent";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => router.push("/")}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wider hidden sm:inline">BACK</span>
              </button>
              
              <div className="hidden md:flex items-center gap-4">
                <Link 
                  href="/"
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span className="text-xs tracking-wider">HOME</span>
                </Link>
                <span className="text-white/20">/</span>
                <Link 
                  href="/#about"
                  className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="text-xs tracking-wider">ABOUT</span>
                </Link>
                <span className="text-white/20">/</span>
                <Link 
                  href="/#work"
                  className="text-white/50 hover:text-white transition-colors text-xs tracking-wider"
                >
                  PROJECTS
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link
                href={`/project/${prevProject}`}
                className="text-white/50 hover:text-white transition-colors p-2"
                title="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <span className={`text-2xl ${accentColor}`}>{project.rank}</span>
                <span className={`text-2xl ${accentColor}`}>{project.suit}</span>
              </div>
              <Link
                href={`/project/${nextProject}`}
                className="text-white/50 hover:text-white transition-colors p-2"
                title="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
              
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="md:hidden text-white/70 hover:text-white"
              >
                <span className="text-xs tracking-wider">MENU</span>
              </button>
            </div>
          </div>
          
          {isNavOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/5 p-4"
            >
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-white/70 hover:text-white py-2">Home</Link>
                <Link href="/#about" className="text-white/70 hover:text-white py-2">About</Link>
                <Link href="/#work" className="text-white/70 hover:text-white py-2">Projects</Link>
                <Link href="/#contact" className="text-white/70 hover:text-white py-2">Contact</Link>
              </div>
            </motion.div>
          )}
        </nav>

        <main className="pt-24 pb-20">
          <div className={`relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-b ${accentGradient}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,black_70%)]" />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-center px-6"
            >
              <span className={`text-sm tracking-[0.5em] ${accentColor} block mb-4`}>
                {project.category}
              </span>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">
                {project.title}
              </h1>
              
              <p className="text-white/40 text-sm tracking-[0.3em] mb-8">
                EST. {project.year} • {project.duration}
              </p>
              
              <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
                {project.description}
              </p>
            </motion.div>
            
            <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent`} />
          </div>

          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid md:grid-cols-4 gap-8 py-12 border-b border-white/10"
            >
              <div>
                <span className="text-xs tracking-[0.2em] text-white/40 block mb-2">ROLE</span>
                <p className="text-white/80">{project.role}</p>
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] text-white/40 block mb-2">DURATION</span>
                <p className="text-white/80">{project.duration}</p>
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] text-white/40 block mb-2">TEAM</span>
                <p className="text-white/80">{project.team}</p>
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: project.liveUrl } }, "*");
                    }}
                    className={`flex items-center gap-2 px-4 py-2 ${accentBg} text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: project.githubUrl } }, "*");
                    }}
                    className={`flex items-center gap-2 px-4 py-2 border ${accentBorder} ${accentColor} text-sm rounded-full hover:bg-white/5 transition-colors`}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="py-16"
            >
              <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-6`}>OVERVIEW</h2>
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl">
                {project.overview}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="py-16 border-t border-white/10"
            >
              <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-8`}>PROJECT GALLERY</h2>
              
              <div className="relative">
                <div className={`aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl border ${accentBorder}/20 overflow-hidden relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={project.images[currentImageIndex].src}
                      alt={project.images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="text-center">
                        <span className={`text-8xl ${accentColor} opacity-30`}>{project.suit}</span>
                        <p className="text-white/50 mt-4 text-sm">{project.images[currentImageIndex].alt}</p>
                        <p className="text-white/30 text-xs mt-2">Replace: /public{project.images[currentImageIndex].src}</p>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-center text-white/50 mt-4 text-sm">
                  {project.images[currentImageIndex].caption}
                </p>
                
                <div className="flex justify-center gap-2 mt-4">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? accentBg : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4 mt-8">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? accentBorder : 'border-transparent opacity-50 hover:opacity-75'
                    }`}
                  >
                    <div className={`w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center`}>
                      <span className={`text-2xl ${accentColor} opacity-30`}>{index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>

            <div className="grid md:grid-cols-2 gap-12 py-16 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-6`}>TECHNOLOGIES</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:border-white/20 transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
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

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="py-16 border-t border-white/10"
            >
              <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-8`}>THE PROCESS</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.process.map((step, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                  >
                    <span className={`text-4xl font-bold ${accentColor} opacity-30`}>0{i + 1}</span>
                    <h3 className="text-lg font-bold mt-4 mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="py-16 border-t border-white/10"
            >
              <h2 className={`text-sm tracking-[0.3em] ${accentColor} mb-8`}>RESULTS & IMPACT</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.results.map((result, i) => (
                  <div key={i} className="text-center p-6">
                    <p className={`text-4xl md:text-5xl font-black ${accentColor}`}>{result.value}</p>
                    <p className="text-white/50 text-sm mt-2">{result.metric}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="py-16 border-t border-white/10"
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
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="py-16 border-t border-white/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <p className="text-white/40 mb-2">Previous Project</p>
                  <Link
                    href={`/project/${prevProject}`}
                    className="text-2xl font-bold hover:text-white/70 transition-colors flex items-center gap-2"
                  >
                    <ChevronLeft className="w-6 h-6" />
                    {projectsData[prevProject].title}
                  </Link>
                </div>
                
                <Link
                  href="/#work"
                  className={`px-8 py-4 border ${accentBorder} ${accentColor} rounded-full hover:bg-white/5 transition-colors`}
                >
                  View All Projects
                </Link>
                
                <div className="text-right">
                  <p className="text-white/40 mb-2">Next Project</p>
                  <Link
                    href={`/project/${nextProject}`}
                    className="text-2xl font-bold hover:text-white/70 transition-colors flex items-center gap-2"
                  >
                    {projectsData[nextProject].title}
                    <ChevronRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-center py-16 border-t border-white/10"
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
