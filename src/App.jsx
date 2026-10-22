import { assetUrl } from './asset-url.js'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { copy } from './content.js'
import { countries, peopleImages } from './image-data.js'
import WorldArtwork from './WorldArtwork.jsx'
import { worldPortraits } from './portrait-data.js'
import './App.css'
import './world-motion.css'
import './footer.css'

const socialPlatforms = [
  ['instagram', 'Instagram'], ['linkedin', 'LinkedIn'], ['facebook', 'Facebook'],
  ['x', 'X'], ['youtube', 'YouTube'], ['whatsapp', 'WhatsApp'], ['telegram', 'Telegram'],
]

function Arrow({ down = false }) {
  return <svg className={`arrow ${down ? 'arrow-down' : ''}`} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function Star({ className = '' }) {
  return <svg className={className} viewBox="0 0 40 40" aria-hidden="true"><path d="M20 1c1.8 13 5.2 16.4 19 19-13.8 2.6-17.2 6-19 19C18.2 26 14.8 22.6 1 20 14.8 17.4 18.2 14 20 1Z" fill="currentColor" /></svg>
}

function Logo({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="Luminary Syndicate home"><img src={assetUrl('images/luminary-syndicate-logo.jpeg')} alt="Luminary Syndicate" width="1600" height="849" decoding="async" /></a>
}

function MembershipButtons() {
  return <div className="membership-actions">
    <button className="membership-button membership-primary" type="button" aria-disabled="true" aria-describedby="membership-note" title="Registration preview">Become a member</button>
    <span className="membership-divider" aria-hidden="true" />
    <button className="membership-button membership-login" type="button" aria-disabled="true" aria-describedby="membership-note" title="Login preview">Member login</button>
    <span id="membership-note" className="sr-only">These membership buttons are visual previews. Registration and login are not available in this preview.</span>
  </div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const navRef = useRef(null)
  useEffect(() => {
    if (!open) return
    navRef.current?.querySelector('a')?.focus()
    const onEscape = event => {
      if (event.key === 'Escape') { setOpen(false); menuRef.current?.focus() }
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [open])
  return <header className="site-header"><div className="header-inner">
    <Logo />
    <button ref={menuRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(value => !value)}><span>{open ? 'Close' : 'Menu'}</span><span className={`menu-lines ${open ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span></button>
    <nav ref={navRef} id="primary-navigation" className={`primary-navigation ${open ? 'is-open' : ''}`} aria-label="Primary"><a href="#about" onClick={() => setOpen(false)}>Our community</a><a href="#program" onClick={() => setOpen(false)}>The program</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a></nav>
    <MembershipButtons />
  </div></header>
}

function Action({ href, children, secondary = false }) {
  return <a className={secondary ? 'text-action' : 'primary-action'} href={href}><span>{children}</span><Arrow /></a>
}

function useReveals() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element))
    document.documentElement.classList.add('motion-ready')
    return () => { observer.disconnect(); document.documentElement.classList.remove('motion-ready') }
  }, [])
}

function subscribeToMotion(callback) {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
  preference.addEventListener('change', callback)
  return () => preference.removeEventListener('change', callback)
}

function reducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function MotionControl() {
  const systemReduced = useSyncExternalStore(subscribeToMotion, reducedMotionSnapshot, () => false)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('motion-paused', paused || systemReduced)
    return () => document.documentElement.classList.remove('motion-paused')
  }, [paused, systemReduced])
  return <button className="motion-control" type="button" disabled={systemReduced} onClick={() => setPaused(value => !value)}>{systemReduced ? 'Motion reduced' : paused ? 'Resume motion' : 'Pause motion'}</button>
}

function Hero() {
  return <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="container hero-layout"><div className="hero-copy">
      <p className="eyebrow hero-tagline"><span className="blue-dot" />{copy.tagline}</p>
      <h1 id="hero-title"><span>{copy.headlineLines[0]}</span><em>{copy.headlineLines[1]}</em></h1>
      <p className="hero-description">{copy.description}</p>
      <div className="hero-actions"><Action href="#program">{copy.programCta}</Action><Action href="#about" secondary>Meet the community</Action></div>
    </div><div className="hero-visual">
      <svg className="hero-constellation" viewBox="0 0 620 500" fill="none" aria-hidden="true"><path d="M36 350C-44 129 158-10 363 43s335 256 203 403" stroke="currentColor" strokeWidth="1" /><circle cx="363" cy="43" r="4" fill="currentColor" /><circle cx="36" cy="350" r="3" fill="currentColor" /></svg>
      <figure className="hero-photo hero-community-art"><div className="hero-photo-frame"><WorldArtwork compact /></div><figcaption>Many places. One shared light.</figcaption></figure>
      <div className="hero-photo-note"><Star /><span>Curiosity. Purpose. Possibility.</span></div>
    </div></div>
    <div className="container hero-bottom"><a href="#about">Scroll to discover<Arrow down /></a><MotionControl /></div>
  </section>
}

function Community() {
  return <section id="about" className="community section-space" aria-labelledby="community-title"><div className="container community-layout">
    <div className="section-title reveal"><p className="eyebrow">OUR COMMUNITY</p><h2 id="community-title">{copy.purposeTitle}</h2></div>
    <div className="community-copy reveal"><p className="lead-copy">{copy.purpose}</p><div className="contribution"><Star /><div><p className="eyebrow">{copy.contributionTitle}</p><h3>{copy.contributionLines.map(line => <span key={line}>{line}</span>)}</h3><p>{copy.contribution}</p></div></div></div>
  </div></section>
}

function Program() {
  return <section id="program" className="program section-space" aria-labelledby="program-title"><div className="container program-layout">
    <figure className="program-photo reveal"><div className="program-photo-frame"><img src={peopleImages.learning.image} alt={peopleImages.learning.alt} width="1600" height="1067" loading="lazy" decoding="async" /></div><figcaption>Illustrative learning scene.</figcaption></figure>
    <div className="program-copy reveal"><p className="eyebrow">THE FIRST COHORT</p><h2 id="program-title">{copy.programTitle}</h2><p>{copy.program}</p><ol className="learning-path" aria-label="Program themes"><li><span>01</span><h3>Learn</h3><p>Masterclasses</p></li><li><span>02</span><h3>Practice</h3><p>Shared practice</p></li><li><span>03</span><h3>Create</h3><p>A community project</p></li></ol><Action href="#participation" secondary>Before you join</Action></div>
  </div></section>
}

function SharedWorld() {
  return <section className="shared-world section-space" aria-labelledby="world-title"><div className="container">
    <div className="world-heading reveal"><p className="eyebrow">MANY PLACES. SHARED PURPOSE.</p><h2 id="world-title">A shared world</h2><p>Different horizons. Room to grow together.</p></div>
    <div className="world-illustration reveal"><WorldArtwork /></div>
    <div className="world-gallery-heading reveal"><span>Views of the world we share</span><p>Geographic inspiration. These images do not identify participating countries.</p></div>
    <div className="country-grid reveal">{countries.map(country => <figure className="country" key={country.country}><div className="country-frame"><img src={country.image} alt={country.alt} width="800" height="600" loading="lazy" decoding="async" style={{ objectPosition: country.country === 'Portugal' ? '50% 68%' : '50% 50%' }} /></div><figcaption><strong>{country.country}</strong><span>{country.place}</span></figcaption></figure>)}</div>
  </div></section>
}

function Participation() {
  return <section id="participation" className="participation" aria-labelledby="participation-title"><div className="container participation-layout reveal"><div><p className="eyebrow">TAKING PART</p><h2 id="participation-title">{copy.requirementsTitle}</h2></div><p>{copy.requirements}</p></div></section>
}

function SocialIcons() {
  return <div className="social-block footer-socials"><p className="social-label">Social media</p><ul className="social-icons" aria-label="Social media platforms">{socialPlatforms.map(([filename, name]) => <li key={filename}><span className="social-icon" role="img" aria-label={name} title={name}><img src={assetUrl(`social/${filename}.svg`)} alt="" width="20" height="20" loading="lazy" /></span></li>)}</ul></div>
}

function ImageCredits() {
  return <details className="image-credits"><summary>Image credits</summary><div className="credit-content"><p>Photography from <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Pexels under its licence</a>. The photographs are illustrative and do not identify Luminary members or participating countries. Map connections are conceptual.</p><ul>{[...worldPortraits, peopleImages.learning, ...countries].map(photo => <li key={photo.image}><a href={photo.source} target="_blank" rel="noreferrer">{photo.place || photo.alt.replace(/\.$/, '')}</a><span>{photo.creator}</span></li>)}</ul><p>World map adapted from the <a href="https://commons.wikimedia.org/wiki/File:BlankMap_World_simple.svg" target="_blank" rel="noreferrer">public domain world map</a> by CodeOne and Master Uegly. The central star is an animated light effect.</p><p>Social icons by <a href="https://fontawesome.com/license/free" target="_blank" rel="noreferrer">Font Awesome under CC BY 4.0</a>.</p></div></details>
}

function Contact() {
  return <section className="contact-invitation" aria-labelledby="invitation-title"><div className="container invitation-layout reveal">
    <div className="invitation-heading"><Star className="invitation-star" /><p className="eyebrow">YOUR NEXT STEP</p><h2 id="invitation-title">{copy.invitationTitle}</h2></div>
    <div className="invitation-body"><p>{copy.invitation}</p><Action href="#contact" secondary>{copy.contactCta}</Action></div>
  </div></section>
}

function Footer() {
  return <footer id="contact" className="site-footer"><div className="container footer-main">
    <div className="footer-identity"><Logo footer /><p className="footer-tagline">{copy.tagline}</p></div>
    <nav className="footer-explore" aria-labelledby="footer-explore-title"><h2 id="footer-explore-title" className="footer-label">Explore</h2><ul><li><a href="#home">Home</a></li><li><a href="#about">Our community</a></li><li><a href="#program">The program</a></li><li><a href="#participation">Before you join</a></li><li><a href="#contact">Contact</a></li></ul></nav>
    <section className="footer-contact" aria-labelledby="footer-contact-title"><h2 id="footer-contact-title" className="footer-contact-title">{copy.contactTitle}</h2><p className="footer-contact-subtitle">{copy.contactSubtitle}</p><a className="footer-email" href={`mailto:${copy.contactEmail}`}>{copy.contactEmail}<Arrow /></a><SocialIcons /></section>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} The Luminary Syndicate</span><div className="footer-tools"><a className="back-top" href="#home">Back to top<Arrow /></a><ImageCredits /></div></div></footer>
}

export default function App() {
  useReveals()
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><Community /><Program /><SharedWorld /><Participation /><Contact /></main><Footer /></>
}
