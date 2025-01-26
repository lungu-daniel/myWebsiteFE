import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {

    return (
        <div style={{ ...styles.contact}}>
            <h2 style={styles.heading}>Contact Me</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <i className="bi bi-linkedin" style={styles.icon}></i>
                    <a
                        href="https://www.linkedin.com/in/daniel-lungu-207363211/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        My LinkedIn
                    </a>
                </li>
                <li style={styles.listItem}>
                    <i className="bi bi-instagram" style={styles.icon}></i>
                    <a
                        href="http://www.instagram.com/_lungudaniel_"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        Instagram
                    </a>
                </li>
                <li style={styles.listItem}>
                    <i className="bi bi-envelope" style={styles.icon}></i>
                    <div style={styles.emailWrapper}>
                        <p style={{ fontWeight: "bold", margin: 0 }}>Email:</p>
                        <a
                            href="mailto:lungud995@gmail.com"
                            style={styles.link}
                        >
                            lungud995@gmail.com
                        </a>
                    </div>
                </li>
                <li style={styles.listItem}>
                    <i className="bi bi-file-earmark-text" style={styles.icon}></i>
                    <a
                        href="/Users/daniellungu/Projects/myWebsiteFE/Professional CV Resume.pdf"
                        download
                        style={styles.downloadLink}
                    >
                        Download CV
                    </a>
                </li>
            </ul>
        </div>
    );
};

const styles = {
    contact: {
        maxWidth: "50%",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        wordWrap: "break-word",
    },
    heading: {
        fontSize: "1.8rem",
        fontWeight: "700",
        color: "#ffffff",
        marginBottom: "1rem",
        textAlign: "center",
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    listItem: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0",
        fontSize: "1rem",
    },
    link: {
        color: "#ffffff",
        textDecoration: "none",
        transition: "color 0.3s ease",
        wordBreak: "break-word",
    },
    emailWrapper: {
        display: "flex",
        flexDirection: "column",
        color: "#ffffff",
    },
    icon: {
        fontSize: "1.5rem",
        color: "#ffffff",
        transition: "color 0.3s ease",
    },
    downloadLink: {
        display: "inline-flex",
        alignItems: "center",
        fontWeight: "600",
        color: "#ffffff",
        marginTop: "1rem",
        gap: "0.5rem",
        textDecoration: "none",
    },
};

export default Contact;