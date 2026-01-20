import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>Affognon Komi Achille</h2>
                        <p>Developpeur Web / Mobile</p>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/achillusgallus/backend-soutenance/settings" aria-label="Github"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/komi-achille-affognon-57a006298" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="mailto:achilllusgallus@gmail.com" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Affognon Komi Achille. Tous droits reservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
