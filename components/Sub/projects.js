import { IoArrowUpOutline } from 'react-icons/io5'

const work = [
  { title: 'Bizedge', description: 'A considered suite of business-management tools built to bring daily operations into focus.', href: 'https://web.bizedgeapp.com', className: 'feature-visual visual-bizedge', type: 'copy', image: "/bizedge.png" },
  { title: 'Unboxie', description: 'An AI Powered gifting service.', href: 'https://unboxie.ai/', className: 'project-note note-jungle', type: 'copy', image: "/unboxie.png" },
  { title: 'IQ4Schools', description: 'A school-management platform engineered with Python and Django for clarity at every step.', href: 'https://iq.torilo.ng/', className: 'project-note note-iq', type: 'copy', image: "/iq4schools.png" },
  { title: 'DSLMS', description: 'An efficient e-learning management system.', href: 'https://play.google.com/store/apps/details?id=com.prunedge.dslms&hl=en&pli=1', className: 'feature-visual visual-system', type: 'visual', image: "/dslms.png" },
]

const Arrow = () => <span className="arrow-link"><IoArrowUpOutline /></span>

const ProjectsComponent = () => (
  <div className="portfolio-shell">
    <section className="intro" id="about">
      <p className="eyebrow">Independent developer</p>
      <h1>Building digital products with care and character.</h1>
      <p>I&rsquo;m Michael, a backend developer who enjoys turning complex workflows into calm, capable experiences.</p>
    </section>
    <section className="work-grid" id="work" aria-label="Selected work">
      {work.map((project, index) => (
        <a className={project.className} href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined} key={project.title} style={{ backgroundImage: `url(${project.image})` }}>
          {project.type === 'visual' && <div className="visual-art" aria-hidden="true"><span /><span /><span /></div>}
          <div className="project-content"><Arrow /><div><p className="project-index">0{index + 1} / Selected work</p><h2>{project.title}</h2><p>{project.description}</p></div></div>
        </a>
      ))}
    </section>
    <section className="contact-strip" id="contact"><p>Have a project in mind?</p><a href="mailto:michaelutoh@gmail.com">Let&rsquo;s work together <IoArrowUpOutline /></a></section>
  </div>
)

export default ProjectsComponent
