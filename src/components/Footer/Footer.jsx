function Footer() {
  return (
    <footer>
      <div className="container footer-content">

        <div className="footer-brand">
          <span>{"</>"} Leandro Arias</span>
          <p>Frontend developer focused on creating clear, functional and maintainable interfaces.</p>
        </div>

        <div className="footer-links">
          <h4>Sections</h4>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Contact</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/leandro-arias-170962387/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/leandroArias1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="mailto:leanahuelarias@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <small>© 2026 Leandro Arias · All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
