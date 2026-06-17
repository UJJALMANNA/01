import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Ujjal Manna</p>
          <p className="footer__role">M.Tech, C&I — IIT Bhilai</p>
        </div>

        <div className="footer__social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:ujjal.manna@example.com" aria-label="Email">
            <FaEnvelope size={20} />
          </a>
        </div>

        <p className="footer__copy">© {year} Ujjal Manna. Built with React, FastAPI &amp; MongoDB.</p>
      </div>
    </footer>
  )
}
