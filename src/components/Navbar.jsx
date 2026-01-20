import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'A propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
    ];

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container nav-container">
                <a href="#" className="logo">
                    <Code2 size={32} className="logo-icon" />
                    <span>Affognon Komi Achille</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-links desktop">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                    <a href="#contact" className="btn btn-primary">contact-moi</a>
                </ul>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
