import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import siteWebStatique from '../assets/siteWebStatic.jpeg';
import app_Quiz from '../assets/app_Quiz.png';
import site_vitrine from '../assets/sitevitrine.png';
import marketplace from '../assets/marketplace.png';
import makakooo from '../assets/makakooo.png';
import vivisese from '../assets/vivisese.png';
import gescadmec from '../assets/gescadmec.jpg';
import './Projects.css';

const projects = [
    {
        title: "Site Web Statique en HTML & CSS",
        description: "Mettre en place un site en monopage qui incorpore un formulaire interactive.",
        tech: ["HTML", "CSS"],
        image: siteWebStatique,
        github: "#",
        live: "#"
    },

    {
        title: "Quiz en HTML & CSS javascript (INGGBAATEST-Pro)",
        description: "Développement d'une application de quiz pour un concours numérique national nommée(INGGBAATEST-Pro )",
        tech: ["HTML", "CSS", "javascript"],
        image: app_Quiz,
        github: "#",
        live: "https://achillusgallus.github.io/Quiz/"
    },

    {
        title: "site vitrine pour un client",
        description: "Création d’un site pour un client – collègue Informaticien",
        tech: ["HTML", "CSS", "tailwind", "bootstrap"],
        image: site_vitrine,
        github: "#",
        live: "https://achillusgallus.github.io/simple/"
    },

    {
        title: "site E-commerce(MarketPlace)- OpenMarketTogo",
        description: "Création d'une plateforme de vente en ligne pour les produits",
        tech: ["wordpress", "woocommerce"],
        image: marketplace,
        github: "#",
        live: "#"
    },

    {
        title: "Développement d'une Plateforme e-commerce avec SHOPIFY nomméé- (MAKAKOOO)",
        description: "Création d'une plateforme de vente en ligne pour les produits ",
        tech: ["shopify"],
        image: makakooo,
        github: "#",
        live: "#"
    },

    {
        title: "Conception d'une base de Donnée de l'hotel- ( VIVISESETOBAA )",
        description: "mettre en place une base de données complète pour la gestion d'un hotel de luxe de la place appelée ( VIVISESETOBAA )",
        tech: ["php", "mysql"],
        image: vivisese,
        github: "#",
        live: "#"
    },

    {
        title: "Développement du Logiciel Gescadmec",
        description: "mise en place d'un logiciel de gestion des scolaires",
        tech: ["laravel", "mysql", "bootstrap"],
        image: gescadmec,
        github: "#",
        live: "#"
    },

];

const Projects = () => {
    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <motion.h2
                    className="title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="icon-link" aria-label="GitHub Code">
                                            <Github size={24} />
                                        </a>
                                        <a href={project.live} className="icon-link" aria-label="Live Demo">
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">{tech}</span>
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

export default Projects;
