import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import './Hero.css';
import profileImg from '../assets/profil_img.png';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="hero-title">
                        <span className="text-highlight">AFFOGNON <br /> KOMI ACHILLE</span>
                        <br />
                        Developpeur Web / Mobile
                    </h1>
                    <p className="hero-description">
                        Je conçois des expériences web accessibles, pixel-perfect et performantes.
                        Spécialisé en React, Laravel et en architectures cloud modernes.
                        Je transforme des problèmes complexes en solutions élégantes.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            Voir Mes Projets
                        </a>

                        <PDFDownloadLink document={<ResumePDF />} fileName="CV_AFFOGNON_Komi_Achille.pdf">
                            {({ loading }) => (
                                <button className="btn btn-outline">
                                    {loading ? 'Génération...' : 'Télécharger CV'} <Download size={20} />
                                </button>
                            )}
                        </PDFDownloadLink>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/achillusgallus/backend-soutenance/settings" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/komi-achille-affognon-57a006298" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:achilllusgallus@gmail.com" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="hero-image-bg"></div>
                    {/* Using a placeholder div for the image to ensure it looks good without an actual file */}
                    <div className="hero-image-placeholder">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="hero-img"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
