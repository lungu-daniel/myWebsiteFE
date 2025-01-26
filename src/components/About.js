import 'bootstrap-icons/font/bootstrap-icons.css';

const styles = {
    aboutMe: {
        maxWidth: "70%",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
        maxHeight: '90%',
        overflowY: 'auto',
    },
    sectionTitle: {
        fontSize: "1.75rem",
        fontWeight: "bold",
        margin: "20px 0",
        color: "#222",
        borderBottom: "2px solid #ddd",
        paddingBottom: "10px",
    },
    description: {
        marginBottom: "20px",
        color: "#444",
        lineHeight: "1.6",
    },
    list: {
        listStyleType: "none",
        padding: 0,
    },
    listItem: {
        fontSize: "1.1rem",
        marginBottom: "12px",
    },
    links: {
        display: "flex",
        flexDirection: 'column',
        gap: '12px',
    },
    link: {
        color: "#1a73e8",
        textDecoration: "none",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
    },
    linkIcon: {
        marginRight: "8px",
        fontSize: "1.4rem",
    },
};

const About = () => {

    return (
        <div style={{ ...styles.aboutMe }}>
            <h2 style={styles.sectionTitle}>Studies</h2>
            <div style={styles.description}>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Technological High-School Lucian Blaga Reghin, Mathematics - Informatics</li>
                    <li style={styles.listItem}>Technical University of Cluj-Napoca, Computer Science</li>
                </ul>
            </div>

            <h2 style={styles.sectionTitle}>Experience</h2>
            <div style={styles.description}>
                <ul style={styles.list}>
                    <li style={styles.listItem}>Software Engineer at Reea</li>
                </ul>
            </div>

            <h2 style={styles.sectionTitle}>Personal Projects</h2>
            <div style={styles.description}>
                <ul style={styles.links}>
                    <li>
                        <a href="https://github.com/Daniel17-Byte" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            <i className="bi bi-github" style={styles.linkIcon}></i>
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="https://gitlab.com/Daniel17-Byte" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            <i className="bi bi-gitlab" style={styles.linkIcon}></i>
                            Gitlab
                        </a>
                    </li>
                </ul>
            </div>

            <h2 style={styles.sectionTitle}>Description</h2>
            <div style={styles.description}>
                <p>Welcome to my personal space on the web! I'm a 24-year-old passionate individual, balancing my academic pursuits in Computer Science at the Technical University of Cluj-Napoca (UTCN) with my professional journey as a Software Engineer. With four years of hands-on experience in Java, I've honed my skills in developing robust software solutions, constantly driven by the challenge of solving complex problems and making a tangible impact through technology.</p>

                <p>Beyond my professional and academic life, I have a fervent passion for fitness and sports. The discipline and commitment I demonstrate in the gym and on the football field mirror the dedication I bring to my work and studies. I believe in the power of a balanced lifestyle, where physical fitness and mental agility play crucial roles in achieving personal and professional excellence.</p>

                <p>Coffee aficionado might be an understatement when describing my love for this energizing elixir. It's not just about the caffeine boost but the moments of tranquility and reflection that come with every cup. This simple pleasure complements my dynamic lifestyle, offering moments of peace amid the hustle.</p>

                <p>Whether it's tackling the next challenge at the gym, scoring a goal on the football field, brewing the perfect cup of coffee, diving into the intricacies of Computer Science, or coding away on my next Java project, I'm always on the lookout for the next adventure. Through this website, I aim to share my journey, insights, and passions. Welcome aboard!</p>
            </div>
        </div>
    );
}

export default About;