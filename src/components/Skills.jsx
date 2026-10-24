import { motion } from 'framer-motion';
import { Server, Database, Layout, Terminal, ShoppingBag, GitBranch } from 'lucide-react';
import './Skills.css';

const skillClusters = [
    {
        id: "backend",
        code: "STACK_01",
        category: "Backend & Architectures ERP",
        icon: Server,
        summary: "Développement serveur robuste : logique comptable, calculs académiques, serveurs WSGI et APIs sécurisées.",
        skills: [
            "Python 3.12+",
            "Django 6.x",
            "Laravel 10+",
            "PHP 8+",
            "Waitress WSGI",
            "Architecture MVC",
            "Contrôle d'accès RBAC",
            "Pillow & QR Code",
            "OpenPyXL & Exports",
            "Génération PDF officielle"
        ]
    },
    {
        id: "database",
        code: "STACK_02",
        category: "Bases de Données & Modélisation",
        icon: Database,
        summary: "Conception de schémas relationnels normalisés, intégrité référentielle et requêtes performantes.",
        skills: [
            "SQLite (Local)",
            "MySQL",
            "PostgreSQL",
            "Modélisation MCD / MLD",
            "Contraintes d'intégrité",
            "Indexation & Optimisation",
            "Transactions ACID",
            "Firebase"
        ]
    },
    {
        id: "frontend",
        code: "STACK_03",
        category: "Frontend, UI & Desktop",
        icon: Layout,
        summary: "Interfaces réactives, applications de bureau multi-OS et ergonomie Néo-SaaS moderne.",
        skills: [
            "Electron 44",
            "React 19",
            "JavaScript (ES6+)",
            "TypeScript",
            "Tailwind CSS",
            "Bootstrap",
            "HTML5 Sémantique",
            "Framer Motion",
            "Flutter / Dart"
        ]
    },
    {
        id: "devops",
        code: "STACK_04",
        category: "Packaging, Systèmes & DevOps",
        icon: Terminal,
        summary: "Compilation d'exécutables autonomes, pipelines CI/CD et environnements Linux.",
        skills: [
            "PyInstaller",
            "Electron Builder (NSIS / DMG)",
            "GitHub Actions CI/CD",
            "Docker",
            "Linux (Ubuntu/Debian)",
            "Git & GitHub",
            "Postman (Tests API)"
        ]
    },
    {
        id: "cms",
        code: "STACK_05",
        category: "Solutions E-Commerce & CMS",
        icon: ShoppingBag,
        summary: "Déploiement de plateformes marchandes, gestion de catalogues et personnalisation.",
        skills: [
            "WordPress",
            "WooCommerce",
            "Shopify (Liquid)",
            "Odoo Online",
            "Dolibarr ERP/CRM"
        ]
    },
    {
        id: "management",
        code: "STACK_06",
        category: "Gestion de Projet & Méthodologie",
        icon: GitBranch,
        summary: "Organisation en cycles itératifs, spécifications claires et orientation livraison client.",
        skills: [
            "Scrum Master",
            "Méthode Agile",
            "Cahier des charges fonctionnel",
            "Figma / Prototypage UI",
            "Tests fonctionnels & Recette"
        ]
    }
];

const Skills = () => {
    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">03 // Matrice de Compétences</span>
                    <h2 className="section-title">Architecture technique &amp; savoir-faire opérationnel.</h2>
                    <p className="section-description">
                        Une boîte à outils construite autour des besoins concrets du développement logiciel : persistance des données, logique backend éprouvée et ergonomie front-end.
                    </p>
                </div>

                <div className="skills-matrix">
                    {skillClusters.map((cluster, index) => {
                        const IconComponent = cluster.icon;
                        return (
                            <motion.div
                                className="skill-cluster-card"
                                key={cluster.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <div className="cluster-header">
                                    <span className="cluster-code">{cluster.code}</span>
                                    <IconComponent size={19} className="cluster-icon" />
                                </div>

                                <h3 className="cluster-title">{cluster.category}</h3>
                                <p className="cluster-summary">{cluster.summary}</p>

                                <div className="cluster-tags">
                                    {cluster.skills.map((skill, idx) => (
                                        <span key={idx} className="cluster-tag">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
