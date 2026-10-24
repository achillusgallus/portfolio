import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Copy, Check, Github, Linkedin, Mail, FileText, Layers, Database, ShieldCheck } from 'lucide-react';
import profileImg from '../assets/profil_img.jpeg';
import './Hero.css';

const Hero = ({ onOpenResume }) => {
    const [copied, setCopied] = useState(false);
    const email = "achilllusgallus@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <section className="hero-section" id="home">
            <div className="container hero-container">
                <div className="hero-layout">
                    {/* Left Column: Core Narrative */}
                    <motion.div
                        className="hero-main"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="hero-meta-bar">
                            <span className="meta-tag">
                                <span className="status-beacon"></span>
                                Ouvert aux missions &amp; recrutement
                            </span>
                            <span className="meta-divider">/</span>
                            <span className="meta-location">Lomé, Togo · Remote</span>
                        </div>

                        <h1 className="hero-headline">
                            Développeur Full-Stack &amp; <br />
                            <span className="headline-emphasis">Logiciels de Gestion (ERP).</span>
                        </h1>

                        <p className="hero-lead">
                            Je conçois des logiciels de gestion complets (ERP Desktop &amp; Réseau local <strong>SchoolPro v2.6.0</strong> sous Python/Django &amp; Electron, et plateformes web sous Laravel/React). Alliant architecture logicielle robuste et ergonomie soignée, je développe des outils métiers taillés pour la performance.
                        </p>

                        {/* Direct action triggers */}
                        <div className="hero-cta-group">
                            <a href="#projects" className="btn btn-primary">
                                Découvrir les Projets
                                <ArrowDown size={16} />
                            </a>

                            <button
                                onClick={handleCopyEmail}
                                className="btn btn-secondary btn-copy"
                                title="Copier l'adresse email"
                            >
                                {copied ? (
                                    <>
                                        <Check size={16} color="#10b981" />
                                        <span>Email copié !</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={16} />
                                        <span>Copier email</span>
                                    </>
                                )}
                            </button>

                            <button
                                onClick={onOpenResume}
                                className="btn btn-secondary"
                                aria-label="Consulter et prévisualiser le CV avant téléchargement"
                            >
                                <FileText size={16} />
                                <span>Consulter CV</span>
                            </button>
                        </div>

                        {/* Engineering pillars / key facts */}
                        <div className="hero-pillars">
                            <div className="pillar-item">
                                <div className="pillar-header">
                                    <Layers size={16} className="pillar-icon" />
                                    <span className="pillar-label">ERP Desktop &amp; Réseau</span>
                                </div>
                                <p className="pillar-text">SchoolPro (Python/Django &amp; Electron), Gescadmec (Laravel)</p>
                            </div>

                            <div className="pillar-item">
                                <div className="pillar-header">
                                    <Database size={16} className="pillar-icon" />
                                    <span className="pillar-label">Rigueur Données</span>
                                </div>
                                <p className="pillar-text">SQLite local, MySQL, intégrité transactionnelle &amp; QR Code</p>
                            </div>

                            <div className="pillar-item">
                                <div className="pillar-header">
                                    <ShieldCheck size={16} className="pillar-icon" />
                                    <span className="pillar-label">Stack Polyvalente</span>
                                </div>
                                <p className="pillar-text">Python, Django, Electron, React, Laravel</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Architectural Framed Portrait */}
                    <motion.div
                        className="hero-aside"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <div className="portrait-card">
                            <div className="portrait-header">
                                <span className="portrait-code">ID // ARCH_ENG_01</span>
                                <span className="portrait-dot"></span>
                            </div>

                            <div className="portrait-image-wrapper">
                                <img
                                    src={profileImg}
                                    alt="AFFOGNON Komi Achille"
                                    className="portrait-img"
                                    loading="eager"
                                />
                                <div className="portrait-corner top-left"></div>
                                <div className="portrait-corner top-right"></div>
                                <div className="portrait-corner bottom-left"></div>
                                <div className="portrait-corner bottom-right"></div>
                            </div>

                            <div className="portrait-footer">
                                <div>
                                    <h3 className="portrait-name">AFFOGNON Komi Achille</h3>
                                    <p className="portrait-role">Full-Stack &amp; Software Developer</p>
                                </div>

                                <div className="portrait-socials">
                                    <a
                                        href="https://github.com/achillusgallus/backend-soutenance/settings"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                        className="social-icon-btn"
                                    >
                                        <Github size={17} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/komi-achille-affognon-57a006298"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                        className="social-icon-btn"
                                    >
                                        <Linkedin size={17} />
                                    </a>
                                    <a
                                        href="mailto:achilllusgallus@gmail.com"
                                        aria-label="Email"
                                        className="social-icon-btn"
                                    >
                                        <Mail size={17} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
