import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Daniel17-Byte/repos');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div style={{ ...styles.container }}>
            <h2 style={styles.heading}>My Projects</h2>
            <div style={styles.projectsGrid}>
                {projects.map((project) => (
                    <div key={project.id} style={styles.projectCard}>
                        <h3 style={styles.projectTitle}>{project.name}</h3>
                        <p style={styles.projectDescription}>
                            {project.description ? project.description : 'No description available.'}
                        </p>
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.projectLink}
                        >
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: "'Arial', sans-serif",
    },
    heading: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    projectsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
    },
    projectCard: {
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        transition: 'transform 0.3s ease',
    },
    projectTitle: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#1a73e8',
        marginBottom: '0.5rem',
    },
    projectDescription: {
        fontSize: '1rem',
        color: '#555',
        marginBottom: '1rem',
    },
    projectLink: {
        fontSize: '1rem',
        color: '#ffffff',
        backgroundColor: '#1a73e8',
        padding: '10px 15px',
        borderRadius: '4px',
        textDecoration: 'none',
        display: 'inline-block',
    },
};

export default Projects;
