import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
        fontSize: 11,
        lineHeight: 1.5,
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#112240',
        paddingBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#112240',
        textTransform: 'uppercase',
    },
    role: {
        fontSize: 14,
        color: '#3b82f6',
        marginTop: 5,
        marginBottom: 5,
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 10,
        color: '#64748b',
        marginTop: 5,
    },
    section: {
        margin: 10,
        padding: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#112240',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
        paddingBottom: 5,
        textTransform: 'uppercase',
    },
    skillGroup: {
        marginBottom: 10,
    },
    skillCategory: {
        fontWeight: 'bold',
        marginBottom: 3,
        color: '#334155',
    },
    skillList: {
        color: '#475569',
    },
    projectItem: {
        marginBottom: 15,
    },
    projectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    projectTitle: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    projectDescription: {
        marginBottom: 5,
        color: '#475569',
    },
    techStack: {
        fontSize: 9,
        fontStyle: 'italic',
        color: '#64748b',
    },
    experienceItem: {
        marginBottom: 15,
    },
    date: {
        fontSize: 9,
        color: '#64748b'
    }
});

const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>AFFOGNON KOMI ACHILLE</Text>
                <Text style={styles.role}>Développeur Web / Mobile</Text>
                <View style={styles.contactInfo}>
                    <Text>Lomé, Togo</Text>
                    <Text>+228 93 68 07 87</Text>
                    <Text>achillusgallus@gmail.com</Text>
                    <Text>linkedin.com/in/komi-achille-affognon</Text>
                </View>
            </View>

            {/* Profil */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Profil</Text>
                <Text style={{ color: '#475569' }}>
                    Développeur web et mobile débutant, passionné par la création de sites et d’applications modernes.
                    J'aime apprendre de nouvelles technologies et améliorer mes compétences chaque jour.
                    Spécialisé en React, Laravel et architectures cloud modernes.
                </Text>
            </View>

            {/* Compétences */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Compétences Techniques</Text>
                <View style={styles.skillGroup}>
                    <Text style={styles.skillCategory}>Frontend:</Text>
                    <Text style={styles.skillList}>React, Flutter, Dart, Tailwind CSS, Bootstrap, HTML, CSS, JavaScript</Text>
                </View>
                <View style={styles.skillGroup}>
                    <Text style={styles.skillCategory}>Backend:</Text>
                    <Text style={styles.skillList}>PHP, Laravel, PostgreSQL, SQL, Firebase</Text>
                </View>
                <View style={styles.skillGroup}>
                    <Text style={styles.skillCategory}>Outils & DevOps:</Text>
                    <Text style={styles.skillList}>Docker, Git, Linux</Text>
                </View>
            </View>

            {/* Projets */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projets Réalisés</Text>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>Scrum Master-projet scolaire(formations)</Text>
                    <Text style={styles.projectDescription}>
                        Gestion d'équipe avec la méthode agile (supervision de projets de développement web et mobile)
                    </Text>
                    <Text style={styles.techStack}>Technologies: React, Flutter, Laravel, Git, trello, figma, jira</Text>
                </View>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>GESCADMEC-Logiciel de gestion scolaire</Text>
                    <Text style={styles.projectDescription}>
                        Gestion des inscriptions, paiements,besoins, interface admin intuitive
                    </Text>
                    <Text style={styles.techStack}>Technologies: laravel, Mysql, sql, git</Text>
                </View>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>Bases de données complètes pour la gestion d'un hôtel de luxe</Text>
                    <Text style={styles.projectDescription}>
                        Pour gérer les chambres, les employés la vérification de la disponibilité des salles ou des chambres
                    </Text>
                    <Text style={styles.techStack}>Technologies: Mysql</Text>
                </View>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>développement d'une plateforme E-learning avec Odoo online</Text>
                    <Text style={styles.techStack}>Technologies: Odoo online</Text>
                </View>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>Gestion de projet avec la méthode Agile(AYOUBDECOR)</Text>
                    <Text style={styles.projectDescription}>
                        mise en place de tous les paradigmes du marketing digital et le SEO
                    </Text>
                    <Text style={styles.techStack}>Technologies: Odoo online</Text>
                </View>

                <View style={styles.projectItem}>
                    <Text style={styles.projectTitle}>développement d'un marketplace pour la vente de produits</Text>
                    <Text style={styles.projectDescription}>
                        une plateforme dénomée "OpenMarketTogo"
                    </Text>
                    <Text style={styles.techStack}>Technologies: wordpress, woocommerce</Text>
                </View>
            </View>

            {/* Langues */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Langues</Text>
                <Text>Français (Natif)</Text>
                <Text>Anglais (Technique)</Text>
            </View>

        </Page>
    </Document>
);

export default ResumePDF;
