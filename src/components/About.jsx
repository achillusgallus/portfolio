import { motion } from 'framer-motion';
import { Award, Users, Globe } from 'lucide-react';
import './About.css';
import aboutImg from '../assets/Apropos_img.jpg';

const About = () => {
    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img src={aboutImg} alt="Working" />
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="title">À propos de moi</h2>
                        <p className="about-text">
                        Je suis un développeur web et mobile début, passionné par la création de sites et d’applications modernes.  
                        J'aime apprendre de nouvelles technologies et améliorer mes compétences chaque jour.  
                        Mon objectif est de construire des projets utiles et de progresser dans le domaine du développement.
                        </p>
                        <p className="about-text">
                        Je suis motivé à développer mes compétences et à travailler sur des projets concrets.  
                        Chaque nouveau défi est pour moi une occasion d’apprendre et de progresser dans le domaine du développement web et mobile.  
                        Mon ambition est de construire un parcours solide et de collaborer avec des personnes passionnées par la technologie.
                        </p>

                        {/* <div className="stats-grid">
                            <div className="stat-item">
                                <Award className="stat-icon" />
                                <h4>8+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat-item">
                                <Users className="stat-icon" />
                                <h4>50+</h4>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-item">
                                <Globe className="stat-icon" />
                                <h4>100+</h4>
                                <p>Projects Done</p>
                            </div>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
