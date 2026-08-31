import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

const NavBar = () => (
  <aside className="editorial-sidebar">
    <div>
      <Link href="/" passHref><a className="site-name">Michael Utoh</a></Link>
      <p className="site-role">Backend developer &amp; creative technologist<br />Based in Lagos, Nigeria</p>
      <nav className="side-nav" aria-label="Main navigation"><a href="#about">About me</a><a href="#work">Selected work</a><a href="#contact">Get in touch</a></nav>
    </div>
    <div className="social-links" aria-label="Social links">
      <a href="https://www.linkedin.com/in/michael-utoh-b9074a193/" target="_blank" rel="noreferrer"><IoLogoLinkedin /> LinkedIn</a>
      <a href="https://github.com/MichaelUtoh" target="_blank" rel="noreferrer"><IoLogoGithub /> GitHub</a>
      <a href="https://twitter.com/Anonymac69" target="_blank" rel="noreferrer"><IoLogoTwitter /> Twitter</a>
    </div>
  </aside>
)

export default NavBar
