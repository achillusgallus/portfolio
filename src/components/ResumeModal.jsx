import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Loader2, FileText, CheckCircle2 } from 'lucide-react';
import { BlobProvider } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
    // Lock scroll and handle ESC key
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="cv-modal-backdrop" onClick={onClose}>
                <motion.div
                    className="cv-modal-container"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 15 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Aperçu du Curriculum Vitae"
                >
                    <BlobProvider document={<ResumePDF />}>
                        {({ blob, url, loading, error }) => (
                            <>
                                {/* Modal Header */}
                                <div className="cv-modal-header">
                                    <div className="cv-modal-title-box">
                                        <div className="cv-modal-icon">
                                            <FileText size={18} />
                                        </div>
                                        <div>
                                            <h3 className="cv-modal-title">Curriculum Vitae</h3>
                                            <p className="cv-modal-subtitle">AFFOGNON Komi Achille · Développeur Full-Stack &amp; ERP</p>
                                        </div>
                                    </div>

                                    <div className="cv-modal-actions">
                                        {url && (
                                            <>
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-secondary btn-sm cv-btn-action"
                                                    title="Ouvrir dans un nouvel onglet"
                                                >
                                                    <ExternalLink size={15} />
                                                    <span className="cv-btn-label">Plein écran</span>
                                                </a>

                                                <a
                                                    href={url}
                                                    download="CV_AFFOGNON_Komi_Achille.pdf"
                                                    className="btn btn-primary btn-sm cv-btn-action"
                                                >
                                                    <Download size={15} />
                                                    <span>Télécharger (PDF)</span>
                                                </a>
                                            </>
                                        )}

                                        <button
                                            onClick={onClose}
                                            className="cv-modal-close-btn"
                                            aria-label="Fermer l'aperçu"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Modal Body / PDF Preview */}
                                <div className="cv-modal-body">
                                    {loading ? (
                                        <div className="cv-modal-loading">
                                            <Loader2 size={36} className="spin-loader" />
                                            <p className="loading-title">Génération de l'aperçu PDF...</p>
                                            <p className="loading-sub">Compilation du document haute définition en cours</p>
                                        </div>
                                    ) : error ? (
                                        <div className="cv-modal-error">
                                            <p>Impossible de générer l'aperçu direct.</p>
                                            {url && (
                                                <a href={url} download="CV_AFFOGNON_Komi_Achille.pdf" className="btn btn-primary">
                                                    Télécharger directement le fichier
                                                </a>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="cv-iframe-wrapper">
                                            <iframe
                                                src={`${url}#toolbar=0&navpanes=0`}
                                                title="Aperçu du CV - AFFOGNON Komi Achille"
                                                className="cv-pdf-iframe"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Modal Footer */}
                                <div className="cv-modal-footer">
                                    <div className="cv-footer-meta">
                                        <span className="status-beacon"></span>
                                        <span>Document certifié à jour · Format A4</span>
                                    </div>
                                    {url && (
                                        <a
                                            href={url}
                                            download="CV_AFFOGNON_Komi_Achille.pdf"
                                            className="btn btn-primary btn-sm mobile-only-download"
                                        >
                                            <Download size={15} />
                                            <span>Télécharger le PDF</span>
                                        </a>
                                    )}
                                </div>
                            </>
                        )}
                    </BlobProvider>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ResumeModal;
