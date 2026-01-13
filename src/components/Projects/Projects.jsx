function Projects() {
  return (
    <section className="fade-up" id="projects">
      <div className="container">
        <h2>Projects</h2>

        {/* PROYECTOS SUPERIORES */}
        <div className="projects-top">
          <div className="card">
            <img src="/img/contable.png" alt="Estudio contable" />
            <h3>Professional landing page for accounting office</h3>
            <p>
              Website developed for an accounting office, focused on
              transmitting confidence, clarity and ease of contact.
            </p>
            <ul>
              <li>React</li>
              <li>Vite</li>
              <li>CSS</li>
              <li>EmailJS</li>
            </ul>
            <div className="project-actions">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://estudio-contable-ruby.vercel.app/">View site</a>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leandroArias1/estudio-contable">View code</a>
            </div>
          </div>

          <div className="card">
            <img src="/img/fitgym.png" alt="Gym" />
            <h3>Simple landing page for gym</h3>
            <p>
              Landing page designed to attract clients, with a focus on
              conversion and user experience.
            </p>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="project-actions">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://fitgym-landing.vercel.app/">View site</a>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leandroArias1/fitgym-landing">View code</a>
            </div>
          </div>
        </div>

        {/* PROYECTO DESTACADO */}
        <div className="project-featured">
          <div className="featured-image">
            <img src="/img/barberia.png" alt="Negocio local" />
          </div>

          <div className="featured-content">
            <h3>Simple landing page for local business</h3>
            <p>
              Simple and responsive website designed to present services
              and facilitate contact for a local business.
            </p>
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="project-actions">
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://landing-simple-pi.vercel.app/">View site</a>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/leandroArias1/landing-simple">View code</a>
            </div>
          </div>
        </div>

        {/* VER MÁS */}
        <div className="projects-more">
          <a href="">View more projects</a>
        </div>
      </div>
    </section>
  )
}

export default Projects
