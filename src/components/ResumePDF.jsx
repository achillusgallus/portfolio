import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        paddingTop: 28,
        paddingBottom: 28,
        paddingHorizontal: 28,
        fontFamily: 'Helvetica',
        fontSize: 9,
        color: '#1e293b',
        lineHeight: 1.4,
        backgroundColor: '#ffffff',
    },
    // Top Executive Header
    headerContainer: {
        borderBottomWidth: 1.5,
        borderBottomColor: '#0f172a',
        paddingBottom: 12,
        marginBottom: 14,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    nameTitleBox: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    role: {
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        color: '#2563eb',
        marginTop: 3,
        letterSpacing: 0.3,
    },
    tagline: {
        fontSize: 8.5,
        color: '#475569',
        marginTop: 2,
        fontFamily: 'Helvetica-Oblique',
    },
    contactBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 8,
        paddingTop: 8,
        borderTopWidth: 0.5,
        borderTopColor: '#e2e8f0',
        fontSize: 8,
        color: '#475569',
    },
    contactItem: {
        marginRight: 10,
    },
    // Two Column Layout
    mainGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // Left Sidebar (30%)
    leftCol: {
        width: '30%',
        paddingRight: 12,
        borderRightWidth: 0.5,
        borderRightColor: '#e2e8f0',
    },
    // Right Content Area (68%)
    rightCol: {
        width: '68%',
        paddingLeft: 4,
    },
    // Section Headers
    sectionHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#2563eb',
        paddingBottom: 3,
        marginBottom: 8,
        marginTop: 10,
    },
    firstSectionHeader: {
        marginTop: 0,
    },
    sectionTitle: {
        fontSize: 9.5,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    // Sidebar Modules
    sidebarGroup: {
        marginBottom: 9,
    },
    sidebarLabel: {
        fontSize: 8.5,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
        marginBottom: 2,
    },
    sidebarText: {
        fontSize: 7.8,
        color: '#334155',
        lineHeight: 1.35,
    },
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2,
        marginTop: 2,
    },
    skillBadge: {
        backgroundColor: '#f1f5f9',
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 2,
        fontSize: 7.2,
        color: '#334155',
        marginRight: 3,
        marginBottom: 3,
    },
    // Summary Text
    summaryText: {
        fontSize: 8.3,
        color: '#334155',
        lineHeight: 1.45,
        marginBottom: 10,
        textAlign: 'justify',
    },
    // Experience & Projects
    expItem: {
        marginBottom: 11,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 2,
    },
    expTitle: {
        fontSize: 9.2,
        fontFamily: 'Helvetica-Bold',
        color: '#0f172a',
    },
    expDate: {
        fontSize: 7.5,
        fontFamily: 'Helvetica-Bold',
        color: '#2563eb',
    },
    expOrgRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    expOrg: {
        fontSize: 8.2,
        fontFamily: 'Helvetica-Oblique',
        color: '#475569',
    },
    expLocation: {
        fontSize: 7.5,
        color: '#64748b',
    },
    expDescription: {
        fontSize: 8,
        color: '#334155',
        lineHeight: 1.35,
        marginBottom: 4,
        textAlign: 'justify',
    },
    bulletList: {
        marginTop: 2,
    },
    bulletItem: {
        flexDirection: 'row',
        marginBottom: 2,
    },
    bulletDot: {
        width: 10,
        fontSize: 8,
        color: '#2563eb',
    },
    bulletContent: {
        flex: 1,
        fontSize: 7.8,
        color: '#334155',
        lineHeight: 1.3,
    },
    techRow: {
        flexDirection: 'row',
        marginTop: 3,
    },
    techLabel: {
        fontSize: 7.2,
        fontFamily: 'Helvetica-Bold',
        color: '#64748b',
    },
    techStack: {
        fontSize: 7.2,
        color: '#475569',
        fontFamily: 'Helvetica-Oblique',
        flex: 1,
    },
});

const ResumePDF = () => (
    <Document title="CV_AFFOGNON_Komi_Achille" author="AFFOGNON Komi Achille">
        <Page size="A4" style={styles.page}>

            {/* Top Executive Header */}
            <View style={styles.headerContainer}>
                <View style={styles.headerTop}>
                    <View style={styles.nameTitleBox}>
                        <Text style={styles.name}>AFFOGNON KOMI ACHILLE</Text>
                        <Text style={styles.role}>Lead Architecte Logiciel &amp; Développeur Full-Stack</Text>
                        <Text style={styles.tagline}>
                            Spécialiste Progiciels ERP Métiers · Écosystème Laravel &amp; React · Modélisation Relationnelle Avancée
                        </Text>
                    </View>
                </View>

                {/* Contact metadata */}
                <View style={styles.contactBlock}>
                    <Text style={styles.contactItem}>Lomé, Togo (Ouvert Remote)</Text>
                    <Text style={styles.contactItem}>Tél : +228 93 68 07 87</Text>
                    <Text style={styles.contactItem}>achilllusgallus@gmail.com</Text>
                    <Text style={styles.contactItem}>linkedin.com/in/komi-achille-affognon</Text>
                    <Text style={styles.contactItem}>github.com/achillusgallus</Text>
                </View>
            </View>

            {/* Two-Column Body */}
            <View style={styles.mainGrid}>

                {/* Left Column: Core Competencies & Architecture */}
                <View style={styles.leftCol}>

                    {/* Domaines d'Expertise */}
                    <View style={[styles.sectionHeader, styles.firstSectionHeader]}>
                        <Text style={styles.sectionTitle}>Domaines d'Expertise</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Architecture ERP &amp; Métier</Text>
                        <Text style={styles.sidebarText}>Modélisation des règles comptables, scolaires et flux financiers.</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Gouvernance des Données</Text>
                        <Text style={styles.sidebarText}>Intégrité relationnelle, transactions ACID, indexation SQL critique.</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Contrôle d'Accès (RBAC)</Text>
                        <Text style={styles.sidebarText}>Cloisonnement sécurisé des privilèges multi-rôles et audit.</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Direction Agile</Text>
                        <Text style={styles.sidebarText}>Scrum Master certifié dans la pratique, conduite de sprints et backlog.</Text>
                    </View>

                    {/* Stack & Technologies */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Arsenal Technique</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Backend &amp; Systèmes</Text>
                        <Text style={styles.sidebarText}>Python 3.12+ (Django 6.x, Waitress WSGI), PHP 8+ (Laravel 10+), MVC, REST APIs.</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Desktop &amp; Frontend</Text>
                        <Text style={styles.sidebarText}>Electron 44, React 19, JavaScript ES6+, TypeScript, Tailwind CSS, Bootstrap, Flutter.</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Packaging &amp; DevOps</Text>
                        <Text style={styles.sidebarText}>PyInstaller, Electron Builder (NSIS / DMG), GitHub Actions CI/CD, Docker, Git.</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Bases de Données</Text>
                        <Text style={styles.sidebarText}>SQLite (Local), MySQL, PostgreSQL, Modélisation MCD/MLD, QR Code (Pillow).</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Progiciels &amp; E-Commerce</Text>
                        <Text style={styles.sidebarText}>Odoo Online, Dolibarr, Shopify, WordPress, WooCommerce.</Text>
                    </View>

                    {/* Langues & Communication */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Langues &amp; Méthodes</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Français</Text>
                        <Text style={styles.sidebarText}>Langue maternelle (Rédaction technique et direction de réunion).</Text>
                    </View>
                    <View style={styles.sidebarGroup}>
                        <Text style={styles.sidebarLabel}>Anglais</Text>
                        <Text style={styles.sidebarText}>Technique &amp; Opérationnel (Documentation et échange international).</Text>
                    </View>

                </View>

                {/* Right Column: Experience, Vision & High Impact Projects */}
                <View style={styles.rightCol}>

                    {/* Executive Summary */}
                    <View style={[styles.sectionHeader, styles.firstSectionHeader]}>
                        <Text style={styles.sectionTitle}>Profil Professionnel</Text>
                    </View>
                    <Text style={styles.summaryText}>
                        Lead Développeur et Architecte Logiciel doté d'une expertise éprouvée dans la conception d'ERP métiers et d'applications de bureau distribuées. Concepteur principal de <Text style={{ fontFamily: 'Helvetica-Bold' }}>SchoolPro Enterprise ERP (v2.6.0)</Text>, progiciel hybride autonome et réseau local propulsé par Python/Django 6.x et Electron, et de solutions web sous Laravel/React. Rigueur reconnue en modélisation de données, génération automatisée de documents officiels (QR Code, Bulletins PDF) et conduite de projets agiles (Scrum).
                    </Text>

                    {/* Expérience & Réalisations Majeures */}
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Réalisations Logicielles Majeures &amp; Direction de Projet</Text>
                    </View>

                    {/* Projet 1: SchoolPro Enterprise ERP */}
                    <View style={styles.expItem}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expTitle}>SchoolPro Enterprise ERP (v2.6.0) — Desktop &amp; Réseau</Text>
                            <Text style={styles.expDate}>Build v2.6.0 Stable // Multi-OS</Text>
                        </View>
                        <View style={styles.expOrgRow}>
                            <Text style={styles.expOrg}>Concepteur en Chef &amp; Architecte Applicatif (Desktop / Python / Electron)</Text>
                            <Text style={styles.expLocation}>Lomé, Togo</Text>
                        </View>
                        <Text style={styles.expDescription}>
                            Progiciel ERP tout-en-un hybride : fonctionnement 100% autonome sans connexion Internet ou en réseau local multi-postes (serveur centralisé Directeur + postes Secrétariat, Comptabilité, Professeurs).
                        </Text>
                        <View style={styles.bulletList}>
                            <View style={styles.bulletItem}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletContent}>
                                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>Architecture Hybride : </Text>
                                    Serveur WSGI embarqué (Waitress), base SQLite/PostgreSQL et packaging multi-OS (installateur Windows .exe et images disques macOS .dmg).
                                </Text>
                            </View>
                            <View style={styles.bulletItem}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletContent}>
                                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>Scolarité &amp; Sécurité : </Text>
                                    Fiches apprenants, impression de cartes scolaires avec QR Code de vérification publique et certificats de scolarité officiels.
                                </Text>
                            </View>
                            <View style={styles.bulletItem}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletContent}>
                                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>Comptabilité &amp; Trésorerie : </Text>
                                    Règlement des frais par tranches, reçus compacts avec montant en toutes lettres et suivi du recouvrement par classe.
                                </Text>
                            </View>
                            <View style={styles.bulletItem}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletContent}>
                                    <Text style={{ fontFamily: 'Helvetica-Bold' }}>Évaluations &amp; Médiathèque : </Text>
                                    Moyennes pondérées automatiques, bulletins A4 ministériels et gestion de bibliothèque avec suivi des emprunts d'ouvrages.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.techRow}>
                            <Text style={styles.techLabel}>Environnement : </Text>
                            <Text style={styles.techStack}>Python 3.12+, Django 6.x, Electron 44, Waitress, PyInstaller, Pillow/QR Code, OpenPyXL.</Text>
                        </View>
                    </View>

                    {/* Projet 2: Gescadmec Web */}
                    <View style={styles.expItem}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expTitle}>Gescadmec — Progiciel Web de Gestion Scolaire</Text>
                            <Text style={styles.expDate}>Application Web Laravel</Text>
                        </View>
                        <View style={styles.expOrgRow}>
                            <Text style={styles.expOrg}>Développement Full-Stack &amp; Modélisation BDD</Text>
                            <Text style={styles.expLocation}>Lomé, Togo</Text>
                        </View>
                        <Text style={styles.expDescription}>
                            Plateforme web de gestion des inscriptions scolaires, suivi des paiements et besoins administratifs sous architecture MVC Laravel et base relationnelle MySQL.
                        </Text>
                        <View style={styles.techRow}>
                            <Text style={styles.techLabel}>Technologies : </Text>
                            <Text style={styles.techStack}>PHP 8+, Laravel 10, MySQL, Bootstrap, Architecture MVC, Git.</Text>
                        </View>
                    </View>

                    {/* Projet 2: Scrum Master & Direction Agile */}
                    <View style={styles.expItem}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expTitle}>Pilotage Agile de Projets Web &amp; Mobile</Text>
                            <Text style={styles.expDate}>Scrum Master</Text>
                        </View>
                        <View style={styles.expOrgRow}>
                            <Text style={styles.expOrg}>Supervision d'Équipes &amp; Coordination Technique</Text>
                            <Text style={styles.expLocation}>Lomé, Togo</Text>
                        </View>
                        <View style={styles.bulletList}>
                            <View style={styles.bulletItem}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletContent}>
                                    Animation des cérémonies Scrum : Sprint Planning, Daily Standup, Sprint Review et Rétrospectives.
                                </Text>
                            </View>
                            <View style={styles.bulletItem}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletContent}>
                                    Gestion et priorisation du Product Backlog sous Jira et Trello ; alignement des livrables sur les exigences métiers.
                                </Text>
                            </View>
                            <View style={styles.bulletItem}>
                                <Text style={styles.bulletDot}>•</Text>
                                <Text style={styles.bulletContent}>
                                    Supervision de développeurs sur des piles modernes combinant React, Flutter et backend Laravel.
                                </Text>
                            </View>
                        </View>
                        <View style={styles.techRow}>
                            <Text style={styles.techLabel}>Méthodes : </Text>
                            <Text style={styles.techStack}>Scrum, Agile, Jira, Trello, Figma, Revue de code Git.</Text>
                        </View>
                    </View>

                    {/* Projet 3: Base de Données Hôtellerie Vivisesetobaa */}
                    <View style={styles.expItem}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expTitle}>Système de Gestion Complexe — Hôtel Vivisesetobaa</Text>
                            <Text style={styles.expDate}>Ingénierie BDD</Text>
                        </View>
                        <View style={styles.expOrgRow}>
                            <Text style={styles.expOrg}>Conception du Modèle Conceptuel &amp; Logique (MCD/MLD)</Text>
                            <Text style={styles.expLocation}>Lomé, Togo</Text>
                        </View>
                        <Text style={styles.expDescription}>
                            Architecture de données complète pour l'exploitation hôtelière : inventaire des chambres et suites en temps réel, gestion des réservations, facturation multidevises et affectations du personnel de service.
                        </Text>
                        <View style={styles.techRow}>
                            <Text style={styles.techLabel}>Technologies : </Text>
                            <Text style={styles.techStack}>MySQL, Modélisation MCD/MLD, Normalisation 3NF, Procédures SQL.</Text>
                        </View>
                    </View>

                    {/* Projet 4: Marketplace & Plateformes Marchandes */}
                    <View style={styles.expItem}>
                        <View style={styles.expHeader}>
                            <Text style={styles.expTitle}>Plateformes E-Commerce &amp; Marketplaces</Text>
                            <Text style={styles.expDate}>OpenMarketTogo &amp; Makakooo</Text>
                        </View>
                        <Text style={styles.expDescription}>
                            Déploiement de plateformes marchandes scalables : marketplace multi-vendeurs avec gestion de commissions (OpenMarketTogo) et boutique spécialisée Shopify (Makakooo) avec intégration de moyens de paiement locaux et internationaux.
                        </Text>
                        <View style={styles.techRow}>
                            <Text style={styles.techLabel}>Technologies : </Text>
                            <Text style={styles.techStack}>WordPress, WooCommerce, PHP, Shopify, Liquid, Passerelles de paiement.</Text>
                        </View>
                    </View>

                </View>

            </View>

        </Page>
    </Document>
);

export default ResumePDF;
