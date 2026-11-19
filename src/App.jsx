import './App.css';

function LaptopVisual() {
  return (
    <div className="visual-container">
      <div className="glow-circle"></div>

      <div className="code-card">
        <div className="code-header">
          <span></span>
          <span></span>
          <span></span>
          <p>portfolio.jsx</p>
        </div>

        <div className="code-content">
          <p>
            <span className="purple">const</span> developer = {'{'}
          </p>
          <p className="indent">
            name: <span className="green">'Sana'</span>,
          </p>
          <p className="indent">
            role: <span className="green">'Frontend Developer'</span>,
          </p>
          <p className="indent">
            passion: <span className="green">'Creating for web'</span>
          </p>
          <p>{'}'};</p>
          <p className="code-comment">// Turning ideas into reality.</p>
        </div>
      </div>

      <div className="laptop">
        <div className="laptop-screen">
          <div className="screen-content">
            <span className="screen-dot"></span>
            <span className="screen-line"></span>
            <span className="screen-line short"></span>
            <span className="screen-line"></span>
            <span className="screen-block"></span>
          </div>
        </div>
        <div className="laptop-base"></div>
      </div>

      <div className="floating-tag"> &lt;Code /&gt; </div>
      <div className="floating-circle">✦</div>
    </div>
  );
}

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <h2>
          SANA.DEV<span>.</span>
        </h2>
        <a href="#contact">Let's Connect ↗</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="intro">HELLO, I'M SANA 👋</p>

          <h1>
            Building Digital
            <span> Experiences.</span>
          </h1>

          <p className="description">
            I'm Baby Sana Fathima, a Junior Frontend Developer passionate about
            creating beautiful and user-friendly web experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work ↗
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <LaptopVisual />
      </section>

      <section id="projects" className="projects">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>
            Featured Projects<span>.</span>
          </h2>
          <p className="section-description">
            A selection of projects I've built while exploring frontend
            development and creating useful web experiences.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <div className="project-number">01 / PROJECT</div>

            <div className="project-preview webcanvas-preview">
              <span>WEB</span>
              <h3>Canvas Studio</h3>
              <div className="preview-window">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="project-info">
              <h3>WebCanvas Studio</h3>
              <p>
                An interactive web application built with React, focused on
                reusable components and state management.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>Vite</span>
                <span>Context API</span>
                <span>useReducer</span>
              </div>

              <a
                href="https://github.com/babysanafathima/webcanvas-studio"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-number">02 / PROJECT</div>

            <div className="project-preview bookvault-preview">
              <span>BOOK</span>
              <h3>BookVault</h3>
              <div className="book-shapes">
                <div>01</div>
                <div>02</div>
                <div>03</div>
              </div>
            </div>

            <div className="project-info">
              <h3>BookVault</h3>
              <p>
                A book management application featuring CRUD operations,
                filtering and a dashboard.
              </p>

              <div className="tech-stack">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Local Storage</span>
              </div>

              <a
                href="https://github.com/babysanafathima/BookVault"
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-number">03 / ACADEMIC PROJECT</div>

            <div className="project-preview college-preview">
              <span>COLLEGE</span>
              <h3>Management System</h3>
              <div className="college-shapes">
                <div>STUDENTS</div>
                <div>COURSES</div>
                <div>RECORDS</div>
              </div>
            </div>

            <div className="project-info">
              <h3>College Management System</h3>
              <p>
                Collaborated with a team to develop a College Management System
                featuring login functionality and CRUD operations. Independently
                handled the complete styling and visual design of the
                application, focusing on layout and user interface consistency.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>

              <span className="academic-label">
                Academic Team Project | Individual UI Styling
              </span>
            </div>
          </article>
        </div>
      </section>
      <section id="about" className="about">
        <div className="about-content">
          <p className="section-label">GET TO KNOW ME</p>

          <h2>
            More than just
            <span> writing code.</span>
          </h2>

          <p className="about-description">
            I'm Baby Sana Fathima, a Computer Science graduate and aspiring
            Frontend Developer who enjoys turning creative ideas into meaningful
            digital experiences.
          </p>

          <p className="about-description">
            My journey in web development has helped me explore HTML, CSS,
            JavaScript and React. I enjoy creating responsive interfaces,
            experimenting with designs and continuously improving my development
            skills.
          </p>

          <p className="about-description">
            I believe great websites should not only look beautiful but also
            provide a smooth and enjoyable experience for everyone.
          </p>
        </div>

        <div className="about-highlight">
          <span className="highlight-symbol">✦</span>
          <h3>Curious mind.</h3>
          <h3>Creative thinking.</h3>
          <h3>Continuous growth.</h3>
          <p>Always learning. Always building.</p>
        </div>
      </section>
      <section id="skills" className="skills">
        <div className="section-heading">
          <p>MY TOOLKIT</p>
          <h2>
            Skills & Technologies<span>.</span>
          </h2>
          <p className="section-description">
            Technologies I use to turn ideas into functional and engaging web
            experiences.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-number">01</span>
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <h3>Backend & Database</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <h3>Tools & Workflow</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Vite</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Have an idea?
            <span> Let's build it.</span>
          </h2>

          <p className="contact-description">
            I'm always open to new opportunities, creative collaborations and
            interesting conversations. Let's create something meaningful
            together.
          </p>

          <a href="mailto:babysanahfathima@gmail.com" className="contact-email">
            babysanahfathima@gmail.com ↗
          </a>

          <div className="social-links">
            <a
              href="https://github.com/babysanafathima"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/babysanafathima/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Designed & Built by Sana.</p>
        <p>© 2026 SANA.DEV. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
