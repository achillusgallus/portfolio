import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare, Terminal } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const [lomeTime, setLomeTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Lomé is GMT/UTC (GMT+0)
            const timeString = now.toLocaleTimeString('fr-FR', {
                timeZone: 'UTC',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            setLomeTime(`${timeString} GMT`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top-row">
                    <div className="footer-brand-col">
                        <div className="footer-brand-title">
                            <Terminal size={17} className="footer-brand-icon" />
                            <span>AFFOGNON<strong>.DEV</strong></span>
                        </div>
                        <p className="footer-brand-bio">
                            Développeur Full-Stack &amp; Progiciels de Gestion (Schoolpro). Conçu avec rigueur et souci du détail technique.
                        </p>
                    </div>

                    <div className="footer-nav-col">
                        <span className="footer-nav-title">Navigation</span>
                        <ul className="footer-nav-links">
                            <li><a href="#about">À Propos</a></li>
                            <li><a href="#projects">Projets &amp; ERP</a></li>
                            <li><a href="#skills">Compétences</a></li>
                            <li><a href="#experience">Parcours</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-meta-col">
                        <span className="footer-nav-title">Localisation &amp; Heure</span>
                        <div className="lome-clock">
                            <span className="status-beacon"></span>
                            <span>Lomé, Togo : {lomeTime || 'UTC'}</span>
                        </div>
                        <div className="footer-social-links">
                            <a
                                href="https://github.com/achillusgallus/backend-soutenance/settings"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="footer-social-btn"
                            >
                                <Github size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/komi-achille-affognon-57a006298"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="footer-social-btn"
                            >
                                <Linkedin size={16} />
                            </a>
                            <a
                                href="mailto:achilllusgallus@gmail.com"
                                aria-label="Email"
                                className="footer-social-btn"
                            >
                                <Mail size={16} />
                            </a>
                            <a
                                href="https://wa.me/22893680787"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="footer-social-btn"
                            >
                                <MessageSquare size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-row">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} AFFOGNON Komi Achille. Tous droits réservés.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="back-to-top-btn"
                        aria-label="Retour en haut"
                    >
                        <span>Haut de page</span>
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
