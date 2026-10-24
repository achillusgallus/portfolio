import { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenResume }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'À Propos', href: '#about' },
        { name: 'Projets & ERP', href: '#projects' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Parcours', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="nav-brand" aria-label="Accueil">
                    <span className="brand-badge">
                        <Terminal size={15} />
                    </span>
                    <span className="brand-name">
                        AFFOGNON<strong>.DEV</strong>
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="nav-links desktop">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Status indicator & CV preview trigger */}
                <div className="nav-actions desktop">
                    <div className="nav-status-chip" title="Disponible pour missions & opportunités">
                        <span className="status-beacon"></span>
                        <span className="status-text">Disponible</span>
                    </div>

                    <button
                        onClick={onOpenResume}
                        className="btn btn-secondary btn-sm"
                        title="Consulter et prévisualiser le CV"
                    >
                        <FileText size={15} />
                        <span>Consulter CV</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="mobile-drawer">
                    <nav className="mobile-nav-list">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="mobile-drawer-footer">
                        <div className="nav-status-chip">
                            <span className="status-beacon"></span>
                            <span>Disponible pour opportunités</span>
                        </div>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                onOpenResume();
                            }}
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                        >
                            <FileText size={16} />
                            <span>Consulter &amp; Télécharger CV</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
