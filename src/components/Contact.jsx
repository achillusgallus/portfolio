import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        // REMPLACEZ CES VALEURS PAR VOS PROPRES ID EMAILJS
        // Créez un compte sur https://www.emailjs.com/
        const SERVICE_ID = "service_ymtkbd2";
        const TEMPLATE_ID = "template_qzfyzu8";
        const PUBLIC_KEY = "Tq0wBTm5K3YgViQSY";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                formRef.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setStatus(null), 5000); // Clear status after 5s
            });
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-header"
                >
                    <h2 className="title">Contactez moi</h2>
                    <p className="contact-subtitle">
                        Je suis actuellement disponible pour des travaux indépendants ou des opportunités à temps plein.
                        Si vous avez un projet qui nécessite un toucher créatif, parlons-en.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-item">
                            <div className="icon-box">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>achillusgallus@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Téléphone</h3>
                                <p>+228 93680787</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3>Localisation</h3>
                                <p>Lomé, Togo</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={formRef}
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={sendEmail}
                    >
                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Votre Nom" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Votre Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" placeholder="Votre Message" rows="5" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>Envoi en cours... <Loader2 className="animate-spin" size={18} /></>
                            ) : (
                                <>Envoyer <Send size={18} /></>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="status-message success">Message envoyé avec succès !</p>
                        )}
                        {status === 'error' && (
                            <p className="status-message error">Une erreur est survenue, veuillez réessayer.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
