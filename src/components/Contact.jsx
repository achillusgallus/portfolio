import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'
    const [emailCopied, setEmailCopied] = useState(false);

    const email = "achilllusgallus@gmail.com";
    const phone = "+228 93 68 07 87";
    const whatsappLink = "https://wa.me/22893680787";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2500);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const SERVICE_ID = "service_ymtkbd2";
        const TEMPLATE_ID = "template_qzfyzu8";
        const PUBLIC_KEY = "Tq0wBTm5K3YgViQSY";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                formRef.current.reset();
            }, (error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setStatus(null), 6000);
            });
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">05 // Prise de Contact</span>
                    <h2 className="section-title">Construisons votre prochain système.</h2>
                    <p className="section-description">
                        Disponible pour le développement de progiciels de gestion (ERP), missions full-stack Laravel &amp; React, ou opportunités de recrutement.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left: Direct channels & Quick Action */}
                    <motion.div
                        className="contact-info-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="contact-card">
                            <span className="panel-badge">CANAUX DIRECTS</span>
                            <h3 className="panel-title">Échangeons sans friction</h3>
                            <p className="panel-text">
                                Je réponds généralement sous 24 heures pour toute demande de collaboration, chiffrage de projet ou proposition de mission.
                            </p>

                            <div className="contact-methods">
                                <div className="method-item">
                                    <div className="method-icon-box">
                                        <Mail size={18} />
                                    </div>
                                    <div className="method-details">
                                        <span className="method-label">Email Principal</span>
                                        <a href={`mailto:${email}`} className="method-value">{email}</a>
                                    </div>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="method-copy-btn"
                                        title="Copier l'email"
                                    >
                                        {emailCopied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                                    </button>
                                </div>

                                <div className="method-item">
                                    <div className="method-icon-box">
                                        <Phone size={18} />
                                    </div>
                                    <div className="method-details">
                                        <span className="method-label">Téléphone &amp; WhatsApp</span>
                                        <a href={whatsappLink} target="_blank" rel="noreferrer" className="method-value">
                                            {phone}
                                        </a>
                                    </div>
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="method-copy-btn"
                                        title="Ouvrir WhatsApp"
                                    >
                                        <ArrowUpRight size={14} />
                                    </a>
                                </div>

                                <div className="method-item">
                                    <div className="method-icon-box">
                                        <MapPin size={18} />
                                    </div>
                                    <div className="method-details">
                                        <span className="method-label">Localisation</span>
                                        <span className="method-value">Lomé, Togo · Fuseau GMT+0</span>
                                    </div>
                                </div>
                            </div>

                            <div className="availability-notice">
                                <span className="status-beacon"></span>
                                <div>
                                    <p className="notice-title">Statut actuel : Disponible</p>
                                    <p className="notice-sub">Ouvert aux projets freelance, contrats et opportunités remote.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Clean, validated form */}
                    <motion.div
                        className="contact-form-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <form ref={formRef} onSubmit={sendEmail} className="editorial-form">
                            <div className="form-header">
                                <MessageSquare size={18} className="form-icon" />
                                <span>Envoyer un message direct</span>
                            </div>

                            <div className="form-row">
                                <div className="form-field">
                                    <label htmlFor="user_name" className="field-label">Votre Nom / Organisation</label>
                                    <input
                                        type="text"
                                        id="user_name"
                                        name="user_name"
                                        className="field-input"
                                        placeholder="Ex: Koffi Mensah ou Établissement XYZ"
                                        required
                                    />
                                </div>

                                <div className="form-field">
                                    <label htmlFor="user_email" className="field-label">Votre Adresse Email</label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        className="field-input"
                                        placeholder="nom@organisation.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-field">
                                <label htmlFor="message" className="field-label">Détails de votre besoin ou projet</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="field-textarea"
                                    placeholder="Présentez brièvement votre projet (progiciel scolaire, web app, base de données, délais estimés...)"
                                    required
                                ></textarea>
                            </div>

                            <div className="form-actions">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span>Envoi en cours...</span>
                                            <Loader2 size={16} className="spin-loader" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Transmettre le message</span>
                                            <Send size={15} />
                                        </>
                                    )}
                                </button>
                            </div>

                            {status === 'success' && (
                                <motion.div
                                    className="form-feedback is-success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <Check size={16} />
                                    <span>Votre message a bien été transmis. Je vous répondrai sous 24h.</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    className="form-feedback is-error"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <span>Erreur d'envoi. Veuillez me contacter directement à : achilllusgallus@gmail.com</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
