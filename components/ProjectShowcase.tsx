"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { DATA } from "@/data";

interface Project {
    title: string;
    description: string;
    technologies: readonly string[];
    image: string;
    video: string;
    dates: string;
    href: string;
    links: readonly { type: string; href: string }[];
}

function ProjectMedia({
    video,
    image,
    title,
}: {
    video: string;
    image: string;
    title: string;
}) {
    if (video && (video.endsWith(".mp4") || video.endsWith(".webm"))) {
        return (
            <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                className="project-media"
            />
        );
    }

    if (image) {
        return <img src={image} alt={title} className="project-media" />;
    }

    return (
        <div className="project-media-placeholder">
            <span>No preview available</span>
        </div>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [isHovered, setIsHovered] = useState(false);
    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="project-card-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`project-card ${isEven ? "" : "project-card--reversed"}`}>
                {/* Media Side */}
                <div className="project-card__media">
                    <div className="project-card__media-inner">
                        <ProjectMedia
                            video={project.video}
                            image={project.image}
                            title={project.title}
                        />

                        {/* Overlay gradient */}
                        <div className="project-card__media-overlay" />

                        {/* Floating number */}
                        <div className="project-card__number">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="project-card__content">
                    <div className="project-card__content-inner">
                        {/* Meta */}
                        <div className="project-card__meta">
                            <span className="project-card__dates">{project.dates}</span>
                        </div>

                        {/* Title */}
                        <h3 className="project-card__title">
                            <a
                                href={project.href}
                                target="_blank"
                                rel="noreferrer"
                                className="project-card__title-link"
                            >
                                {project.title}
                                <motion.span
                                    className="project-card__title-arrow"
                                    animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7" />
                                </motion.span>
                            </a>
                        </h3>

                        {/* Description */}
                        <p className="project-card__description">{project.description}</p>

                        {/* Tech */}
                        <div className="project-card__tech">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="project-card__tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="project-card__links">
                            {project.links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-card__link"
                                >
                                    {link.type === "Source" ? (
                                        <Github className="w-4 h-4" />
                                    ) : (
                                        <ExternalLink className="w-4 h-4" />
                                    )}
                                    {link.type}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectShowcase() {
    const projects = DATA.projects.filter((p) => p.active);
    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true });

    return (
        <section id="projects" className="project-showcase">
            {/* Section Header */}
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="project-showcase__header"
            >
                <p className="project-showcase__label">Selected Work</p>
                <h2 className="project-showcase__title">
                    Projects I&apos;ve Built
                </h2>
                <p className="project-showcase__subtitle">
                    A curated selection of products I&apos;ve designed and engineered
                    end-to-end — focusing on clarity, scalability, and real-world impact.
                </p>
            </motion.div>

            {/* Project Grid */}
            <div className="project-showcase__grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project as unknown as Project}
                        index={index}
                    />
                ))}
            </div>

            {/* Footer count */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="project-showcase__footer"
            >
                <span className="project-showcase__count">{projects.length}</span>
                <span className="project-showcase__count-label">
                    Projects Delivered
                </span>
            </motion.div>
        </section>
    );
}
