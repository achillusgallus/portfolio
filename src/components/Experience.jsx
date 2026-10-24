import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const timeline = [
    {
        period: "Projet Majeur // Récemment",
        role: "Concepteur & Développeur Progiciel",
        organization: "Schoolpro (Gescadmec) — ERP Scolaire",
        location: "Lomé, Togo",
        type: "Progiciel Métier",
        description: "Prise en charge de la conception de bout en bout du logiciel de gestion scolaire. Modélisation de la base de données, implémentation des règles métiers de calcul des moyennes selon les coefficients, sécurisation du recouvrement des frais scolaires avec reçus de caisse horodatés et génération automatisée des bulletins officiels sous Laravel et MySQL.",
        achievements: [
            "Conception du modèle relationnel complet pour les inscriptions, classes, matières et notes",
            "Moteur algorithmique de calcul des moyennes pondérées par coefficients et classements",
            "Mise en place des rôles RBAC (Administrateur, Comptabilité, Professeur, Parent, Élève)"
        ]
    },
    {
        period: "Mission Agile",
        role: "Scrum Master & Développeur",
        organization: "Supervision de Projets Web & Mobile",
        location: "Lomé, Togo",
        type: "Méthode Agile",
        description: "Rôle de Scrum Master dans le cadre de projets de formation et de développement applicatif. Animation des rituels agiles (daily standups, sprint planning, rétrospectives), gestion du backlog sous Jira/Trello et garantie des délais de livraison.",
        achievements: [
            "Coordination d'une équipe de développeurs autour de technos modernes (React, Flutter, Laravel)",
            "Garantie de la qualité du code et des bonnes pratiques de versioning Git"
        ]
    },
    {
        period: "Missions & Freelance",
        role: "Développeur Web & E-Commerce",
        organization: "Projets Clients & Plateformes Marchandes",
        location: "Remote / Hybride",
        type: "Développement Web",
        description: "Conception et déploiement de solutions e-commerce et vitrines professionnelles : marketplace multi-vendeurs OpenMarketTogo (WooCommerce), boutique Shopify Makakooo et sites vitrines haute performance pour des professionnels du secteur IT.",
        achievements: [
            "Déploiement de tunnels de vente optimisés et intégration des moyens de paiement",
            "Amélioration des performances web, du responsive design et du référencement naturel"
        ]
    },
    {
        period: "Ingénierie des Données",
        role: "Concepteur Base de Données",
        organization: "Système de Gestion — Hôtel Vivisesetobaa",
        location: "Lomé, Togo",
        type: "Bases de Données",
        description: "Étude et élaboration du modèle conceptuel et logique de données pour la gestion opérationnelle d'un complexe hôtelier : vérification en temps réel de la disponibilité des chambres, gestion des réservations et des affectations du personnel.",
        achievements: [
            "Élaboration du schéma relationnel MySQL sous forme normale stricte",
            "Définition des procédures et index pour accélérer les requêtes d'occupation"
        ]
    }
];

const Experience = () => {
    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">04 // Parcours &amp; Expériences</span>
                    <h2 className="section-title">Expérience pragmatique sur des projets réels.</h2>
                    <p className="section-description">
                        Un parcours axé sur la livraison de logiciels utiles, la gestion agile et la conception rigoureuse de systèmes informatiques.
                    </p>
                </div>

                <div className="timeline-container">
                    {timeline.map((item, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: index * 0.1 }}
                        >
                            <div className="timeline-marker">
                                <span className="marker-dot"></span>
                                <span className="marker-line"></span>
                            </div>

                            <div className="timeline-card">
                                <div className="timeline-card-header">
                                    <div>
                                        <div className="timeline-meta">
                                            <span className="timeline-period">
                                                <Calendar size={13} />
                                                {item.period}
                                            </span>
                                            <span className="timeline-badge">{item.type}</span>
                                        </div>
                                        <h3 className="timeline-role">{item.role}</h3>
                                        <h4 className="timeline-org">{item.organization}</h4>
                                    </div>

                                    <span className="timeline-location">
                                        <MapPin size={13} />
                                        {item.location}
                                    </span>
                                </div>

                                <p className="timeline-desc">{item.description}</p>

                                <div className="timeline-achievements">
                                    {item.achievements.map((ach, i) => (
                                        <div key={i} className="achievement-row">
                                            <CheckCircle2 size={15} className="achievement-icon" />
                                            <span>{ach}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
