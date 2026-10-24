import { motion } from 'framer-motion';
import { Database, Cpu, LayoutGrid, CheckCircle2, Award } from 'lucide-react';
import aboutImg from '../assets/Apropos_img.jpeg';
import './About.css';

const About = () => {
    const principles = [
        {
            icon: Database,
            code: "RULE_01",
            title: "Intégrité des données",
            desc: "Modélisation relationnelle rigoureuse sous MySQL/PostgreSQL. Gestion transactionnelle stricte pour les calculs de scolarité et de trésorerie sans incohérence."
        },
        {
            icon: Cpu,
            code: "RULE_02",
            title: "Architecture Métier & RBAC",
            desc: "Séparation stricte des responsabilités (MVC Laravel), cloisonnement des accès par rôles (Direction, Comptabilité, Professeurs, Parents, Élèves)."
        },
        {
            icon: LayoutGrid,
            code: "RULE_03",
            title: "Interfaces denses & réactives",
            desc: "Conception d'écrans de saisie rapide, tableaux de bord de synthèse et génération instantanée de documents officiels (bulletins, factures, reçus PDF)."
        },
        {
            icon: Award,
            code: "RULE_04",
            title: "Pratique Agile & Scrum",
            desc: "Habitude du travail collaboratif en sprints, suivi d'avancement, formalisation des cahiers des charges et écoute des utilisateurs finaux."
        }
    ];

    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">01 // Parcours &amp; Philosophie</span>
                    <h2 className="section-title">De la rigueur algorithmique aux logiciels de gestion opérationnels.</h2>
                    <p className="section-description">
                        Mon approche repose sur la résolution concrète de problèmes métiers complexes par le code, avec une attention particulière à la robustesse des données et à la clarté d'utilisation.
                    </p>
                </div>

                <div className="about-grid">
                    {/* Visual left */}
                    <motion.div
                        className="about-visual-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="about-image-card">
                            <div className="about-image-frame">
                                <img src={aboutImg} alt="Environnement de travail et conception" className="about-img" />
                            </div>
                            <div className="about-stats-strip">
                                <div className="stat-unit">
                                    <span className="stat-value">ERP &amp; Web</span>
                                    <span className="stat-desc">Orientation progiciels métiers</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-unit">
                                    <span className="stat-value">Laravel · React</span>
                                    <span className="stat-desc">Cœur de stack full-stack</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content right */}
                    <motion.div
                        className="about-text-column"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="about-bio">
                            <p className="bio-lead">
                                Développeur basé à Lomé, j'ai développé une affinité forte pour les <strong>logiciels de gestion et progiciels métiers</strong>. À travers la création de <strong>Schoolpro</strong>, j'ai modélisé et implémenté l'ensemble du cycle de vie scolaire d'un établissement : inscriptions, suivi de recouvrement des frais, calcul automatique des moyennes pondérées et édition automatisée de bulletins PDF.
                            </p>
                            <p className="bio-sub">
                                Qu'il s'agisse de concevoir une plateforme e-commerce multi-marchands (OpenMarketTogo), une base de données hôtelière complète ou des applications interactives pour concours nationaux, j'accorde une priorité absolue à la clarté du code, au respect des standards et à la sécurité des transactions.
                            </p>
                        </div>

                        {/* Principles grid */}
                        <div className="principles-grid">
                            {principles.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <div className="principle-card" key={idx}>
                                        <div className="principle-header">
                                            <span className="principle-code">{item.code}</span>
                                            <IconComponent size={18} className="principle-icon" />
                                        </div>
                                        <h4 className="principle-title">{item.title}</h4>
                                        <p className="principle-desc">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
