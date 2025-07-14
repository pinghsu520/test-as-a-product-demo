import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Me</h1>
                <div className="subtitle">Software Developer & Tech Enthusiast</div>
            </div>
            
            <div className="about-section">
                <h2>Who I Am</h2>
                <p>
                    Hello! I'm a passionate software developer with a love for creating elegant solutions 
                    to complex problems. My journey in technology began with a curiosity about how things 
                    work, and it has evolved into a professional career where I get to build amazing 
                    things every day.
                </p>
            </div>

            <div className="about-section">
                <h2>What I Do</h2>
                <div className="skills-container">
                    <div className="skill-category">
                        <h3>Frontend Development</h3>
                        <ul>
                            <li>React.js</li>
                            <li>JavaScript/TypeScript</li>
                            <li>HTML5 & CSS3</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    <div className="skill-category">
                        <h3>Backend Development</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>RESTful APIs</li>
                            <li>Database Design</li>
                            <li>System Architecture</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <h2>My Journey</h2>
                <p>
                    Throughout my career, I've had the opportunity to work on diverse projects that have 
                    shaped my understanding of software development. I believe in writing clean, maintainable 
                    code and creating user-friendly applications that solve real-world problems.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or sharing my knowledge through this blog. I'm always excited to learn new things 
                    and take on challenging projects that push my boundaries.
                </p>
            </div>

            <div className="about-section contact-section">
                <h2>Let's Connect</h2>
                <p>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of 
                    your visions. Feel free to reach out through any of my social media channels or drop me 
                    an email.
                </p>
                <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;