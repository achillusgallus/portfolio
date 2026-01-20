import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Flutter", "Dart", "Tailwind CSS", "Bootstrap", "HTML", "CSS", "JavaScript"]
    },
    {
        category: "Backend",
        items: ["PHP", "Laravel", "PostgreSQL", "SQL", "Firebase", "Mysql"]
    },
    {
        category: "DevOps & Tools",
        items: ["Docker", "Linux", "Git", "GitHub", "GitLab"]
    },
    {
        category: "Design",
        items: ["Figma", "UI/UX", "Adobe XD", "Responsive Design"]
    },
    {
        category: "CMS",
        items: ["WordPress", "WooCommerce", "Shopify", "Dolibarr", "Odoo"]
    },
    {
        category: "Projets",
        items: ["Scrum Master"]
    }
];

const Skills = () => {
    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <motion.h2
                    className="title title-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Compétences
                </motion.h2>

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="skill-category">{category.category}</h3>
                            <div className="skill-tags">
                                {category.items.map((item, idx) => (
                                    <span className="skill-tag" key={idx}>{item}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
