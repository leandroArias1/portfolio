function Skills() {
  return (
    <section className="fade-up" id="skills">
      <div className="container">
        <h2>Skills</h2>
        <p>Stack focused on modern web development, with an emphasis on clean, maintainable code and practical solutions.</p>

        <div className="skills-grid">
          {/* FRONTEND */}
          <div className="skill-group">
            <h3>Frontend</h3>
            <ul>
              <li>
                <img src="/icons/js.png" alt="JavaScript" />
                <span>JavaScript</span>
              </li>
              <li>
                <img src="/icons/react.png" alt="React" />
                <span>React</span>
              </li>
              <li>
                <img src="/icons/html.png" alt="HTML" />
                <span>HTML</span>
              </li>
              <li>
                <img src="/icons/css.svg" alt="CSS" />
                <span>CSS</span>
              </li>
              <li>
                <img src="/icons/bootstrap.png" alt="Bootstrap" />
                <span>Bootstrap</span>
              </li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="skill-group">
            <h3>Backend</h3>
            <ul>
              <li>
                <img src="/icons/nodejs.svg" alt="Node.js" />
                <span>Node.js</span>
              </li>
              <li>
                <img src="/icons/express.svg" alt="Express" />
                <span>Express</span>
              </li>
            </ul>
          </div>

          {/* DATABASES */}
          <div className="skill-group">
            <h3>Databases</h3>
            <ul>
              <li>
                <img src="/icons/mongodb.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </li>
              <li>
                <img src="/icons/mysql.png" alt="MySQL" />
                <span>MySQL</span>
              </li>
            </ul>
          </div>

          {/* TOOLS */}
          <div className="skill-group">
            <h3>Tools</h3>
            <ul>
              <li>
                <img src="/icons/vite.svg" alt="Vite" />
                <span>Vite</span>
              </li>
              <li>
                <img src="/icons/git.png" alt="Git" />
                <span>Git</span>
              </li>
              <li>
                <img src="/icons/github.svg" alt="GitHub" />
                <span>GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
