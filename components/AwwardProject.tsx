// @ts-nocheck
'use client'
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "GWP",
    subtitle: "Growing Wealth Platform",
    description: "GWP is a growing wealth platform designed to enhance financial asset management, accelerate debt repayment, and improve investment strategies. It provides users with smart financial tools, insights, and integrations for better financial control.",
    year: "2024",
    category: "FinTech",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "TailwindCSS", "Canvas", "Plaid", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    video: "/gwp.mp4",
    color: "#10b981",
    metrics: ["Financial Management", "Smart Insights", "Debt Optimization"],
    links: [
      { type: "Live Demo", href: "https://www.dev.joingwp.com", icon: <ExternalLink className="w-4 h-4" /> }
    ]
  },
  {
    id: 2,
    title: "Burn.fm",
    subtitle: "Nostalgic Music Streaming",
    description: "Burn.fm is a web-based music player merging CD-burning nostalgia with modern streaming. Integrated with Spotify and Stripe, it offers playlist sharing, custom CD designs, and seamless, secure experiences.",
    year: "2024",
    category: "Music",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "TailwindCSS", "Canvas", "Spotify API"],
    image: "/burnfm.png",
    video: "",
    color: "#ec4899",
    metrics: ["Spotify Integration", "Custom CD Designs", "Playlist Sharing"],
    links: [
      { type: "Visit Site", href: "https://burn.fm/", icon: <ExternalLink className="w-4 h-4" /> }
    ]
  },
  {
    id: 3,
    title: "Tempo Union",
    subtitle: "Government Admin Platform",
    description: "Tempo Union Leh is a government project featuring an advanced admin panel for efficient database management. It streamlines data operations, providing powerful tools for secure and seamless administration.",
    year: "2024",
    category: "Government",
    technologies: ["Next.js", "Firebase", "Razorpay", "TailwindCSS", "Cloud"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    video: "/tempo-admin.webm",
    color: "#f59e0b",
    metrics: ["Secure Admin Panel", "Database Management", "Government Project"],
    links: [
      { type: "Website", href: "https://www.tempounionleh.com/", icon: <ExternalLink className="w-4 h-4" /> }
    ]
  },
  {
    id: 4,
    title: "Authcraft",
    subtitle: "Full-Stack Boilerplate",
    description: "A full-stack web app on GitHub, offering travel management for users & admins. Users book packages, manage bookings & personal info. Admins oversee users, bookings & packages.",
    year: "2024",
    category: "Developer Tools",
    technologies: ["Next.js", "ShadCN UI", "Next-Auth", "TypeScript", "Prisma", "Zod"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    video: "/project-2.webm",
    color: "#6366f1",
    metrics: ["Full Auth System", "Admin Dashboard", "Type-Safe"],
    links: [
      { type: "Live Demo", href: "https://boilerplate-next-prisma.vercel.app/", icon: <ExternalLink className="w-4 h-4" /> },
      { type: "GitHub", href: "https://github.com/jaymehta002/Authcraft", icon: <Github className="w-4 h-4" /> }
    ]
  },
  {
    id: 5,
    title: "Casa-mobilia",
    subtitle: "Modern Furniture Store",
    description: "A modern furniture store website built with Next.js, TailwindCSS, and ShadCN UI. It offers responsive design, dynamic product displays, and easy cart management with performance and SEO optimization.",
    year: "2024",
    category: "E-Commerce",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Clerk", "ShadCN UI"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
    video: "/project-3.webm",
    color: "#8b5cf6",
    metrics: ["E-Commerce", "Product Management", "SEO Optimized"],
    links: [
      { type: "Visit Store", href: "https://casamobilia.in/", icon: <ExternalLink className="w-4 h-4" /> }
    ]
  },
  {
    id: 6,
    title: "Cricquest",
    subtitle: "Interactive Cricket Game",
    description: "Web-based game using Vite with auto-complete player names and 300+ player stats. Implemented smooth animations with Framer Motion and delivered pixel-perfect UI based on Figma designs.",
    year: "2023",
    category: "Gaming",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
    video: "/cricquest.webm",
    color: "#06b6d4",
    metrics: ["300+ Players", "Real Stats", "Smooth Animations"],
    links: [
      { type: "Play Game", href: "https://cricquest.in/", icon: <ExternalLink className="w-4 h-4" /> }
    ]
  }
];

const ProjectCard3D = ({ project, onClick }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // Determine if we should use video or image
  const hasVideo = project.video && project.video !== "";
  const mediaSource = hasVideo ? project.video : project.image;

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer"
      style={{
        rotateX: isHovered ? rotateX : "0deg",
        rotateY: isHovered ? rotateY : "0deg",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl"
        style={{
          boxShadow: `0 25px 50px -12px ${project.color}20, 0 0 0 1px ${project.color}10`,
        }}
      >
        {/* Media Container */}
        <div className="relative h-64 overflow-hidden bg-zinc-950">
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            {hasVideo ? (
              <video 
                src={mediaSource} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img 
                src={mediaSource} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"
              style={{
                background: `linear-gradient(to top, #18181b, ${project.color}15, transparent)`
              }}
            />
          </motion.div>
          
          {/* Floating Category Badge */}
          <motion.div
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-xl border"
            style={{
              backgroundColor: `${project.color}20`,
              borderColor: `${project.color}40`,
              color: project.color
            }}
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.category}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <span className="text-sm text-zinc-500">{project.year}</span>
            </div>
            <p className="text-sm text-zinc-400">{project.subtitle}</p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-zinc-400 border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-zinc-400 border border-white/10">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center p-2 rounded-lg bg-white/5">
                <div className="text-xs text-zinc-400 truncate">{metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${project.color}15, transparent 40%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const hasVideo = project.video && project.video !== "";
  const mediaSource = hasVideo ? project.video : project.image;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: `0 25px 50px -12px ${project.color}40`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Section */}
        <div className="relative h-[50vh] overflow-hidden bg-zinc-950">
          {hasVideo ? (
            <video 
              src={mediaSource} 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={mediaSource} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-sm text-zinc-500">{project.year}</span>
                </div>
                <h2 className="text-4xl font-bold text-white">{project.title}</h2>
                <p className="text-xl text-zinc-400">{project.subtitle}</p>
              </div>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <div className="text-sm font-semibold text-zinc-300">
                  {metric}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-4 py-2 rounded-xl bg-white/5 text-sm text-zinc-300 border border-white/10 hover:border-white/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.links.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all"
                style={{
                  backgroundColor: idx === 0 ? project.color : 'transparent',
                  color: idx === 0 ? 'white' : project.color,
                  border: idx === 0 ? 'none' : `1px solid ${project.color}40`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                {link.type}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function AwardWinningProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section className="relative min-h-screen bg-black py-24 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
              Featured Work
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            Projects That
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Matter</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Crafting digital experiences that push boundaries and solve real problems
          </motion.p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={prevProject}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProjectCard3D
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Project Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 text-zinc-500"
        >
          <span className="text-4xl font-bold text-white">{PROJECTS.length}</span>
          <span className="text-lg ml-2">Projects Delivered</span>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

