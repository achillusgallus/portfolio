import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Download, Monitor, Apple, ShieldCheck, Laptop, Info, Globe } from 'lucide-react';

import siteWebStatique from '../assets/siteWebStatic.jpeg';
import app_Quiz from '../assets/app_Quiz.png';
import site_vitrine from '../assets/sitevitrine.png';
import marketplace from '../assets/marketplace.png';
import makakooo from '../assets/makakooo.png';
import vivisese from '../assets/vivisese.png';
import gescadmec from '../assets/gescadmec.jpg';
import schoolproImg from '../assets/schoolpro_dashboard.png';

import './Projects.css';

const baseUrl = import.meta.env.BASE_URL || '/';

// Configuration GitHub Releases pour le téléchargement sans limite de taille
const GITHUB_RELEASE_TAG = "v2.6.0";
const GITHUB_RELEASE_BASE = `https://github.com/achillusgallus/portfolio/releases/download/${GITHUB_RELEASE_TAG}`;

const schoolProReleases = [
    {
        id: "windows",
        name: "Windows",
        osLabel: "Windows 10 / 11 (64-bit)",
        fileName: "SchoolPro.Setup.2.6.0.exe",
        fileSize: "175 Mo",
        fileType: "Installateur Exécutable (.exe)",
        icon: Monitor,
        badge: "Recommandé PC",
        url: `${GITHUB_RELEASE_BASE}/SchoolPro.Setup.2.6.0.exe`,
        instructions: "Exécutez le fichier d'installation .exe pour installer SchoolPro sur votre ordinateur Windows."
    },
    {
        id: "mac-arm",
        name: "macOS Apple Silicon",
        osLabel: "macOS M1 / M2 / M3 / M4 (Apple Silicon)",
        fileName: "SchoolPro-2.6.0-arm64.dmg",
        fileSize: "152 Mo",
        fileType: "Image Disque (.dmg - arm64)",
        icon: Apple,
        badge: "Puces M1 / M2 / M3 / M4",
        url: `${GITHUB_RELEASE_BASE}/SchoolPro-2.6.0-arm64.dmg`,
        instructions: "Ouvrez le fichier .dmg et glissez l'icône SchoolPro dans votre dossier Applications."
    },
    {
        id: "mac-intel",
        name: "macOS Intel",
        osLabel: "macOS Processeur Intel (x86_64)",
        fileName: "SchoolPro-2.6.0.dmg",
        fileSize: "156 Mo",
        fileType: "Image Disque (.dmg - x64)",
        icon: Laptop,
        badge: "Processeurs Intel",
        url: `${GITHUB_RELEASE_BASE}/SchoolPro-2.6.0.dmg`,
        instructions: "Compatible avec les ordinateurs Mac équipés de processeurs Intel 64-bit."
    }
];

const projectsData = [
    {
        id: "schoolpro",
        title: "SchoolPro Enterprise ERP — v2.6.0 (Desktop & Réseau Local)",
        category: "erp",
        categoryLabel: "Progiciel ERP Desktop & Réseau",
        featured: true,
        tagline: "Solution logicielle tout-en-un de gestion administrative, académique et financière (Python/Django & Electron).",
        description: "ERP hybride complet conçu pour les établissements scolaires (maternelle, primaire, collège, lycée, universités). Fonctionne en totale autonomie locale sans dépendance Internet, tout en permettant le déploiement en réseau local collaboratif multi-postes (serveur centralisé chez le Directeur, clients connectés en Wi-Fi/RJ45 pour le secrétariat, la comptabilité et la salle des professeurs).",
        keyFeatures: [
            "Architecture Hybride : Poste autonome ou Réseau Local Multi-Postes sans cloud obligatoire",
            "Scolarité complète & Cartes scolaires professionnelles avec QR Code de vérification",
            "Évaluations & Notes : calcul paramétrable, moyennes pondérées et bulletins ministériels A4",
            "Comptabilité & Frais : gestion des tranches, relances et reçus d'encaissement certifiés",
            "Médiathèque / Bibliothèque intégrée avec inventaire et registre des emprunts",
            "Packaging multi-OS : installateur Windows (.exe) et images disques macOS (.dmg)"
        ],
        tech: ["Python 3.12+", "Django 6.x", "Electron 44", "Waitress WSGI", "PyInstaller", "SQLite / PostgreSQL", "QR Code & Pillow", "OpenPyXL"],
        image: schoolproImg,
        github: "https://github.com/achillusgallus/gestion_school",
        live: "https://github.com/achillusgallus/gestion_school/releases"
    },
    {
        id: "gescadmec",
        title: "Gescadmec — Progiciel Web de Gestion Scolaire",
        category: "erp",
        categoryLabel: "Application Web Scolaire",
        featured: false,
        tagline: "Plateforme web de gestion des inscriptions, du suivi scolaire et des frais.",
        description: "Application web développée sous le framework PHP Laravel pour la gestion des dossiers scolaires, le suivi des besoins de l'établissement et la centralisation des paiements sous architecture MVC et base relationnelle MySQL.",
        keyFeatures: [
            "Gestion des apprenants et suivi des effectifs par classe",
            "Contrôle d'accès et interface administrateur intuitive",
            "Modélisation relationnelle MySQL et requêtes optimisées"
        ],
        tech: ["PHP 8+", "Laravel 10", "MySQL", "Bootstrap", "Architecture MVC", "Git"],
        image: gescadmec,
        github: "https://github.com/achillusgallus/backend-soutenance",
        live: "#"
    },
    {
        id: "openmarket",
        title: "OpenMarketTogo — Marketplace E-Commerce",
        category: "ecommerce",
        categoryLabel: "Web & E-Commerce",
        featured: false,
        tagline: "Place de marché en ligne pour la vente et mise en relation de vendeurs locaux.",
        description: "Conception et personnalisation d'une plateforme marketplace e-commerce permettant la gestion de catalogues multi-produits, la gestion des paniers, l'intégration des passerelles de paiement et le suivi des commandes clients.",
        keyFeatures: [
            "Gestion de catalogue multi-marchands",
            "Tunnel d'achat optimisé et responsive mobile",
            "Sécurisation des paiements et gestion des stocks"
        ],
        tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Responsive UI"],
        image: marketplace,
        github: "#",
        live: "#"
    },
    {
        id: "quiz-pro",
        title: "INGGBAATEST-Pro — Concours Numérique National",
        category: "web",
        categoryLabel: "Application Web",
        featured: false,
        tagline: "Application interactive de quiz et d'évaluation chronométrée pour concours national.",
        description: "Application web interactive développée pour un concours numérique national. Gestion dynamique des questions, minuterie en temps réel, calcul immédiat des scores et restitution détaillée des résultats aux candidats.",
        keyFeatures: [
            "Moteur de questions chronométré avec validation instantanée",
            "Expérience utilisateur fluide sans rechargement de page",
            "Compatibilité mobile et écrans de compétition"
        ],
        tech: ["JavaScript ES6+", "HTML5 Sémantique", "CSS3 Grid/Flex", "Animations DOM"],
        image: app_Quiz,
        github: "#",
        live: "https://achillusgallus.github.io/Quiz/"
    },
    {
        id: "vivisesetobaa",
        title: "Hôtel Vivisesetobaa — Architecture BDD Hôtelière",
        category: "database",
        categoryLabel: "Bases de Données & Systèmes",
        featured: false,
        tagline: "Conception et modélisation de la base de données intégrale d'un complexe hôtelier.",
        description: "Conception du modèle conceptuel et logique de données (MCD/MLD) pour gérer l'ensemble des opérations d'un hôtel de luxe : disponibilité des chambres et salles de réception en temps réel, gestion du personnel, réservations et facturation client.",
        keyFeatures: [
            "Modélisation relationnelle rigoureuse avec clés étrangères et contraintes",
            "Requêtes SQL complexes d'analyse d'occupation et disponibilité",
            "Intégrité transactionnelle pour les réservations simultanées"
        ],
        tech: ["MySQL", "SQL Avancé", "PHP", "MCD/MLD", "Gestion Transactionnelle"],
        image: vivisese,
        github: "#",
        live: "#"
    },
    {
        id: "makakooo",
        title: "Makakooo — Boutique E-Commerce Spécialisée",
        category: "ecommerce",
        categoryLabel: "Web & E-Commerce",
        featured: false,
        tagline: "Plateforme de distribution et boutique en ligne moderne propulsée par Shopify.",
        description: "Mise en place d'une boutique e-commerce pour la commercialisation de produits, paramétrage des collections, optimisation UX de la fiche produit et intégration des règles d'expédition.",
        keyFeatures: [
            "Configuration de catalogue et variantes produits",
            "Design axé sur le taux de conversion mobile",
            "Gestion des canaux de vente et notifications clients"
        ],
        tech: ["Shopify", "Liquid", "E-Commerce", "UX Design"],
        image: makakooo,
        github: "#",
        live: "#"
    },
    {
        id: "site-vitrine",
        title: "Site Vitrine Professionnel — Client Informaticien",
        category: "web",
        categoryLabel: "Web & E-Commerce",
        featured: false,
        tagline: "Site vitrine moderne, ultra-rapide et responsive pour valoriser des services tech.",
        description: "Développement d'une vitrine professionnelle avec intégration de composants modernes, design responsive adapté aux terminaux mobiles et respect des critères de performance web.",
        keyFeatures: [
            "Intégration responsive Tailwind & Bootstrap",
            "Score de performance et temps de chargement minimal",
            "Navigation ergonomique et formulaire de contact direct"
        ],
        tech: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive"],
        image: site_vitrine,
        github: "#",
        live: "https://achillusgallus.github.io/simple/"
    }
];

const categories = [
    { id: "all", label: "Tous les Projets" },
    { id: "erp", label: "Logiciels & ERP" },
    { id: "ecommerce", label: "Web & E-Commerce" },
    { id: "web", label: "Applications Web" },
    { id: "database", label: "Bases de Données" }
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [detectedOS, setDetectedOS] = useState("windows");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const ua = window.navigator.userAgent.toLowerCase();
            if (ua.includes("win")) {
                setDetectedOS("windows");
            } else if (ua.includes("mac")) {
                setDetectedOS("mac-arm");
            } else if (ua.includes("linux")) {
                setDetectedOS("linux");
            }
        }
    }, []);

    const filteredProjects = activeFilter === "all"
        ? projectsData
        : projectsData.filter(p => p.category === activeFilter);

    const featuredProject = projectsData.find(p => p.featured);
    const standardProjects = filteredProjects.filter(p => activeFilter !== "all" || !p.featured);

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">02 // Réalisations &amp; Cas d'Usage</span>
                    <h2 className="section-title">Des solutions concrètes éprouvées en production.</h2>
                    <p className="section-description">
                        Chaque projet répond à un problème métier précis : automatisation des processus scolaires avec SchoolPro, transactions e-commerce et applications interactives.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="projects-filter-bar">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`filter-btn ${activeFilter === cat.id ? 'is-active' : ''}`}
                            onClick={() => setActiveFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Featured Project Spotlight (Schoolpro) with integrated Download Hub */}
                {(activeFilter === "all" || activeFilter === "erp") && featuredProject && (
                    <motion.div
                        className="featured-project-card"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="featured-badge-bar">
                            <span className="badge badge-emerald">
                                <span className="status-beacon"></span>
                                PROJET MAJEUR // ERP SCOLAIRE
                            </span>
                            <span className="featured-date">Version Bureau v2.6.0 · Téléchargeable</span>
                        </div>

                        <div className="featured-grid">
                            <div className="featured-content">
                                <span className="featured-category">{featuredProject.categoryLabel}</span>
                                <h3 className="featured-title">{featuredProject.title}</h3>
                                <p className="featured-tagline">{featuredProject.tagline}</p>
                                <p className="featured-desc">{featuredProject.description}</p>

                                <div className="featured-highlights">
                                    <h4 className="highlights-title">Modules clés développés :</h4>
                                    <ul className="highlights-list">
                                        {featuredProject.keyFeatures.map((feat, i) => (
                                            <li key={i}>
                                                <CheckCircle2 size={16} className="feat-icon" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-tech-pills">
                                    {featuredProject.tech.map((t, i) => (
                                        <span key={i} className="tech-pill">{t}</span>
                                    ))}
                                </div>

                                <div className="featured-actions">
                                    <a href="#schoolpro-downloads" className="btn btn-primary btn-sm">
                                        <Download size={16} />
                                        Télécharger le Logiciel (v2.6.0)
                                    </a>

                                    {featuredProject.github !== "#" && (
                                        <a
                                            href={featuredProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-secondary btn-sm"
                                        >
                                            <Github size={16} />
                                            Code Source
                                        </a>
                                    )}

                                    <a href="#contact" className="btn btn-secondary btn-sm">
                                        Demander une Démo
                                        <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="featured-media">
                                <div className="featured-image-frame">
                                    <img
                                        src={featuredProject.image}
                                        alt={featuredProject.title}
                                        className="featured-img"
                                    />
                                    <div className="image-overlay-info">
                                        <span>SchoolPro Enterprise ERP v2.6.0 · Interface Moderne Néo-SaaS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- DEDICATED SCHOOLPRO DOWNLOAD HUB --- */}
                        <div className="schoolpro-download-hub" id="schoolpro-downloads">
                            <div className="download-hub-header">
                                <div className="download-hub-title-box">
                                    <h4 className="download-hub-title">
                                        <Download size={18} className="download-hub-icon" />
                                        Télécharger SchoolPro Desktop (Build v2.6.0 Stable)
                                    </h4>
                                    <p className="download-hub-sub">
                                        Choisissez l'installateur correspondant au système d'exploitation de votre ordinateur.
                                    </p>
                                </div>

                                {detectedOS && (
                                    <div className="detected-os-badge">
                                        <span className="status-beacon"></span>
                                        <span>Système détecté : {detectedOS === 'windows' ? 'Windows' : detectedOS === 'mac-arm' ? 'macOS' : 'Linux / Autre'}</span>
                                    </div>
                                )}
                            </div>

                            {/* Release Cards Grid */}
                            <div className="releases-grid">
                                {schoolProReleases.map((release) => {
                                    const ReleaseIcon = release.icon;
                                    const isRecommended = (detectedOS === 'windows' && release.id === 'windows') ||
                                        (detectedOS === 'mac-arm' && release.id === 'mac-arm');

                                    return (
                                        <div
                                            key={release.id}
                                            className={`release-card ${isRecommended ? 'is-recommended' : ''}`}
                                        >
                                            <div className="release-card-top">
                                                <div className="release-icon-box">
                                                    <ReleaseIcon size={22} />
                                                </div>
                                                <div className="release-card-meta">
                                                    {isRecommended && (
                                                        <span className="release-tag-detected">Votre système</span>
                                                    )}
                                                    <span className="release-badge-pill">{release.badge}</span>
                                                </div>
                                            </div>

                                            <h5 className="release-os-name">{release.osLabel}</h5>
                                            <p className="release-file-info">
                                                <span className="file-name">{release.fileName}</span>
                                                <span className="file-size">· {release.fileSize}</span>
                                            </p>

                                            <p className="release-instructions">{release.instructions}</p>

                                            <div className="release-action-wrap">
                                                <a
                                                    href={release.url}
                                                    download={release.fileName}
                                                    className={`btn ${isRecommended ? 'btn-primary' : 'btn-secondary'} btn-sm release-download-btn`}
                                                >
                                                    <Download size={15} />
                                                    <span>Télécharger ({release.fileSize})</span>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Trust & Deployment Info Strip */}
                            <div className="download-hub-footer">
                                <div className="hub-info-item">
                                    <ShieldCheck size={16} className="hub-info-icon" />
                                    <span>Build autonome 64-bit · Zéro logiciel publicitaire · Données sécurisées sur votre machine</span>
                                </div>
                                <div className="hub-info-item">
                                    <Globe size={16} className="hub-info-icon" />
                                    <span>Distribution officielle via <a href="https://github.com/achillusgallus/portfolio/releases" target="_blank" rel="noreferrer" className="hub-link">GitHub Releases v2.6.0</a></span>
                                </div>
                                <div className="hub-info-item">
                                    <Info size={16} className="hub-info-icon" />
                                    <span>Besoin d'un déploiement centralisé sur serveur réseau ou cloud ? <a href="#contact" className="hub-link">Contactez-moi</a></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Secondary Projects Grid */}
                <div className="projects-grid">
                    <AnimatePresence>
                        {standardProjects.map((project, index) => (
                            <motion.article
                                className="project-card"
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                            >
                                <div className="project-card-image-box">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-card-img"
                                        loading="lazy"
                                    />
                                    <span className="project-category-tag">{project.categoryLabel}</span>
                                </div>

                                <div className="project-card-body">
                                    <div className="project-card-header">
                                        <h3 className="project-card-title">{project.title}</h3>
                                        <div className="project-card-links">
                                            {project.github && project.github !== "#" && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="Code GitHub"
                                                    className="card-link-icon"
                                                >
                                                    <Github size={18} />
                                                </a>
                                            )}
                                            {project.live && project.live !== "#" && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label="Voir la démo en ligne"
                                                    className="card-link-icon"
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="project-card-tagline">{project.tagline}</p>
                                    <p className="project-card-desc">{project.description}</p>

                                    <div className="project-tech-pills">
                                        {project.tech.map((t, idx) => (
                                            <span key={idx} className="tech-pill">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
