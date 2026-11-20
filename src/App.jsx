import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { COMPANY, ABOUT, SERVICES, EQUIPMENT, REASONS, LEADERS, NAV } from './content.js'
import { AboutScene, ConstructionScene, RentalScene, TradingScene } from './scenes.jsx'
import { Wordmark, ServiceIcons, EquipmentIcons, ContactIcons, HeroArt } from './icons.jsx'

const EASE_OUT = [0.23, 1, 0.32, 1]
const EASE_DRAWER = [0.32, 0.72, 0, 1]

/* ---------- motion helpers ---------- */

// Scroll reveal: occasional, purpose = preventing content from popping in. Once only.
function Reveal({ children, delay = 0, as = 'div', className }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
    >
      {children}
    </Tag>
  )
}

const listParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
function useItemVariants() {
  const reduce = useReducedMotion()
  return {
    hidden: { opacity: 0, y: reduce ? 0 : 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
  }
}

/* ---------- header + mobile sheet ---------- */

function Header({ onMenu, solid, hidden, active }) {
  return (
    <header className={`site-header${solid ? ' is-solid' : ''}${hidden ? ' is-hidden' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Stonewave home">
          <Wordmark />
        </a>
        <nav className="desktop-nav" aria-label="Main">
          {NAV.map((n) => {
            const isActive = active === n.href.slice(1)
            return (
              <a key={n.href} href={n.href} className={isActive ? 'is-active' : undefined} aria-current={isActive ? 'true' : undefined}>
                {n.label}
                {isActive && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
                  />
                )}
              </a>
            )
          })}
        </nav>
        <a href={COMPANY.phoneHref} className="header-phone">
          {ContactIcons.phone}
          <span>{COMPANY.phoneDisplay}</span>
        </a>
        <a href="#contact" className="btn btn-accent btn-sm header-cta">
          Get in touch
        </a>
        <a href={COMPANY.phoneHref} className="icon-btn header-call" aria-label={`Call ${COMPANY.phoneDisplay}`}>
          {ContactIcons.phone}
        </a>
        <button className="icon-btn menu-btn" onClick={onMenu} aria-label="Open menu" aria-haspopup="dialog">
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function MenuSheet({ open, onClose }) {
  const reduce = useReducedMotion()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const behind = document.querySelectorAll('.site-header, main, .site-footer, .action-bar')
    document.documentElement.classList.add('no-scroll')
    behind.forEach((el) => (el.inert = true))
    panelRef.current?.querySelector('a')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('no-scroll')
      behind.forEach((el) => (el.inert = false))
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="sheet-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
          />
          <motion.div
            ref={panelRef}
            className="sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ y: reduce ? 0 : '100%', opacity: reduce ? 0 : 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduce ? 0 : '100%', opacity: reduce ? 0 : 1 }}
            transition={{ duration: 0.45, ease: EASE_DRAWER }}
            drag={reduce ? false : 'y'}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.05, bottom: 0.9 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 90 || info.velocity.y > 500) onClose()
            }}
          >
            <div className="sheet-handle" aria-hidden="true" />
            <nav className="sheet-nav" aria-label="Mobile">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={(e) => {
                    // Page scroll is locked while the sheet is open — close first, then jump.
                    e.preventDefault()
                    onClose()
                    requestAnimationFrame(() => {
                      document.querySelector(n.href)?.scrollIntoView()
                      history.replaceState(null, '', n.href)
                    })
                  }}
                >
                  {n.label}
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </nav>
            <div className="sheet-actions">
              <a className="btn btn-accent" href={COMPANY.whatsappHref} target="_blank" rel="noopener">
                {ContactIcons.whatsapp} WhatsApp
              </a>
              <a className="btn btn-ghost" href={COMPANY.phoneHref}>
                {ContactIcons.phone} Call
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ---------- sections ---------- */

function Hero({ heroRef }) {
  const reduce = useReducedMotion()
  const item = (i) => ({
    initial: { opacity: 0, y: reduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE_OUT, delay: 0.08 + i * 0.07 },
  })
  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="container hero-inner">
        <motion.p className="eyebrow" {...item(0)}>
          Dubai · India · International
        </motion.p>
        <motion.h1 {...item(1)}>
          Building infrastructure.
          <br />
          <span className="accent-text">Powering projects.</span>
          <br />
          Trading equipment.
        </motion.h1>
        <motion.p className="hero-lede" {...item(2)}>
          Stonewave works across construction &amp; infrastructure projects, heavy equipment rental and equipment
          trading — one partner from groundwork to handover.
        </motion.p>
        <motion.div className="hero-ctas" {...item(3)}>
          <a href="#contact" className="btn btn-accent">
            Get a quote
          </a>
          <a href="#services" className="btn btn-ghost-light">
            Our services
          </a>
        </motion.div>
      </div>
      <motion.div
        className="hero-art-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.3 }}
      >
        <HeroArt />
      </motion.div>
    </section>
  )
}

// Image reveal: clip-path opens from a slight inset. Marketing, once per scroll — a longer duration is fine.
function SceneReveal({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`scene-frame ${className}`}
      initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(6% 6% 6% 6% round 22px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 22px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}

function About() {
  const item = useItemVariants()
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <Reveal className="section-head">
            <p className="eyebrow">About Stonewave</p>
            <h2>One partner to build, equip and trade</h2>
          </Reveal>
          <Reveal className="about-copy" delay={0.05}>
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Reveal>
        </div>
        <div className="about-side">
          <SceneReveal>
            <AboutScene />
          </SceneReveal>
          <motion.dl
            className="facts"
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {ABOUT.facts.map((f) => (
              <motion.div key={f.k} variants={item}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}

const SCENES = { construction: ConstructionScene, rental: RentalScene, trading: TradingScene }

function Services() {
  const item = useItemVariants()
  return (
    <section className="section section-tint" id="services">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our businesses</p>
          <h2>Three businesses, one team</h2>
        </Reveal>
      </div>
      <motion.ul
        className="service-track"
        variants={listParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {SERVICES.map((s, i) => (
          <motion.li key={s.id} className="card service-card" variants={item}>
            <span className="service-num">0{i + 1}</span>
            <span className="service-icon">{ServiceIcons[s.id]}</span>
            <h3>{s.title}</h3>
            <p>{s.short}</p>
            <a className="text-link" href={`#${s.id}`}>
              Explore {s.title.split(' ')[0].toLowerCase()} <span aria-hidden="true">↓</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <p className="swipe-hint" aria-hidden="true">
        Swipe →
      </p>

      <div className="container business-list">
        {SERVICES.map((s, i) => (
          <BusinessDetail key={s.id} service={s} index={i} />
        ))}
      </div>
    </section>
  )
}

function BusinessDetail({ service: s, index }) {
  const Scene = SCENES[s.id]
  const item = useItemVariants()
  const href = `https://wa.me/971501418294?text=${encodeURIComponent(`Hello Stonewave, I would like to enquire about ${s.enquire}.`)}`
  return (
    <article className={`business${index % 2 ? ' is-flipped' : ''}`} id={s.id}>
      <SceneReveal className="business-scene">
        <Scene />
      </SceneReveal>
      <div className="business-body">
        <Reveal>
          <p className="eyebrow">
            {String(index + 1).padStart(2, '0')} · {s.title}
          </p>
          <h3 className="business-title">{s.title}</h3>
          <p className="business-lead">{s.lead}</p>
        </Reveal>
        <h4 className="mini-head">What we offer</h4>
        <motion.ul
          className="ticks offer-list"
          variants={listParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {s.offer.map((o) => (
            <motion.li key={o} variants={item}>
              {o}
            </motion.li>
          ))}
        </motion.ul>
        <h4 className="mini-head">{s.stepsTitle}</h4>
        <ol className={s.id === 'construction' ? 'steps' : 'chips'}>
          {s.steps.map((st, n) => (
            <li key={st}>
              {s.id === 'construction' && <span className="step-n">{n + 1}</span>}
              {st}
            </li>
          ))}
        </ol>
        <a className="btn btn-accent business-cta" href={href} target="_blank" rel="noopener">
          {ContactIcons.whatsapp} Enquire on WhatsApp
        </a>
      </div>
    </article>
  )
}

function Equipment() {
  const item = useItemVariants()
  return (
    <section className="section" id="equipment">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Fleet &amp; trading</p>
          <h2>Equipment we rent and trade</h2>
          <p className="section-lede">Tap a machine to ask about availability, rates or purchase.</p>
        </Reveal>
        <motion.ul
          className="equip-grid"
          variants={listParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {EQUIPMENT.map((e) => (
            <motion.li key={e} variants={item}>
              <a
                className="equip-chip"
                href={`https://wa.me/971501418294?text=${encodeURIComponent(
                  `Hello Stonewave, I would like to enquire about ${e.toLowerCase()} (rental / purchase).`,
                )}`}
                target="_blank"
                rel="noopener"
              >
                <span className="equip-icon">{EquipmentIcons[e]}</span>
                <span className="equip-name">{e}</span>
                <span className="equip-cta">Enquire</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Why() {
  const item = useItemVariants()
  return (
    <section className="section section-tint" id="why">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Why Stonewave</p>
          <h2>Built on accountability</h2>
        </Reveal>
        <motion.ul
          className="why-grid"
          variants={listParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {REASONS.map((r, i) => (
            <motion.li key={r.title} className="why-item" variants={item}>
              <span className="why-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Leadership() {
  const item = useItemVariants()
  return (
    <section className="section" id="leadership">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Leadership</p>
          <h2>The partners</h2>
        </Reveal>
        <motion.ul
          className="leader-grid"
          variants={listParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {LEADERS.map((l) => (
            <motion.li key={l.name} className="card leader-card" variants={item}>
              <div className="leader-top">
                <span className="avatar" aria-hidden="true">
                  {l.initials}
                </span>
                <div>
                  <h3>{l.name}</h3>
                  <p className="leader-role">{l.role}</p>
                </div>
              </div>
              <p className="leader-bio">{l.bio}</p>
              <ul className="tags">
                {l.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Contact({ contactRef }) {
  return (
    <section className="section contact" id="contact" ref={contactRef}>
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Let's talk about your project</h2>
          <p className="section-lede">
            Projects, equipment hire or a machine to buy or sell — reach us directly and we'll respond quickly.
          </p>
        </Reveal>
        <Reveal className="contact-actions" delay={0.05}>
          <a className="contact-btn" href={`mailto:${COMPANY.email}?subject=${encodeURIComponent('Enquiry via stonewave.io')}`}>
            <span className="contact-ic">{ContactIcons.mail}</span>
            <span>
              <strong>Email</strong>
              <small>{COMPANY.email}</small>
            </span>
          </a>
          <a className="contact-btn" href={COMPANY.phoneHref}>
            <span className="contact-ic">{ContactIcons.phone}</span>
            <span>
              <strong>Call</strong>
              <small>{COMPANY.phoneDisplay}</small>
            </span>
          </a>
          <a className="contact-btn" href={COMPANY.whatsappHref} target="_blank" rel="noopener">
            <span className="contact-ic">{ContactIcons.whatsapp}</span>
            <span>
              <strong>WhatsApp</strong>
              <small>{COMPANY.phoneDisplay}</small>
            </span>
          </a>
        </Reveal>
        <Reveal className="office" delay={0.1}>
          <p className="eyebrow">Registered office</p>
          <address>
            {COMPANY.legalName}
            <br />
            IFZA Business Park, DDP
            <br />
            PO Box 342001, Dubai
            <br />
            United Arab Emirates
          </address>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Wordmark />
        <dl className="legal-grid">
          <div>
            <dt>Legal entity</dt>
            <dd>{COMPANY.legalName}</dd>
          </div>
          <div>
            <dt>Registered office</dt>
            <dd>{COMPANY.address}</dd>
          </div>
          <div>
            <dt>TRN</dt>
            <dd>{COMPANY.trn}</dd>
          </div>
          <div>
            <dt>Trade licence</dt>
            <dd>
              No. {COMPANY.licence} · {COMPANY.authority}
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </dd>
          </div>
        </dl>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Stonewave Trading FZCO. All rights reserved.</span>
          <nav aria-label="Legal">
            <a href="/privacy/">Privacy Policy</a>
            <a href="/terms/">Terms of Use</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

/* Sticky mobile action bar — appears once the hero is gone, hides at the contact section. */
function ActionBar({ visible }) {
  const reduce = useReducedMotion()
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="action-bar"
          initial={{ y: reduce ? 0 : '110%', opacity: reduce ? 0 : 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: reduce ? 0 : '110%', opacity: reduce ? 0 : 1 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
        >
          <a href={`mailto:${COMPANY.email}`} aria-label="Email Stonewave">
            {ContactIcons.mail}
            <span>Email</span>
          </a>
          <a href={COMPANY.phoneHref} aria-label="Call Stonewave">
            {ContactIcons.phone}
            <span>Call</span>
          </a>
          <a className="is-primary" href={COMPANY.whatsappHref} target="_blank" rel="noopener">
            {ContactIcons.whatsapp}
            <span>WhatsApp</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const [heroVisible, setHeroVisible] = useState(true)
  const [contactVisible, setContactVisible] = useState(false)
  const [solid, setSolid] = useState(false)
  const [headerHidden, setHeaderHidden] = useState(false)
  const [active, setActive] = useState('')
  const heroRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === heroRef.current) setHeroVisible(e.isIntersecting)
        if (e.target === contactRef.current) setContactVisible(e.isIntersecting)
      }
    }, { threshold: 0.05 })
    if (heroRef.current) io.observe(heroRef.current)
    if (contactRef.current) io.observe(contactRef.current)
    // Scroll-spy: the section crossing the middle of the viewport is "active".
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach((n) => {
      const el = document.getElementById(n.href.slice(1))
      if (el) spy.observe(el)
    })
    // Header hides while scrolling down (more room on a phone), returns on any scroll up.
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 24)
      if (Math.abs(y - lastY) > 6) {
        setHeaderHidden(y > lastY && y > 240)
        lastY = y
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      spy.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <Header onMenu={() => setMenuOpen(true)} solid={solid} hidden={headerHidden && !menuOpen} active={active} />
      <main>
        <Hero heroRef={heroRef} />
        <About />
        <Services />
        <Equipment />
        <Why />
        <Leadership />
        <Contact contactRef={contactRef} />
      </main>
      <Footer />
      <MenuSheet open={menuOpen} onClose={closeMenu} />
      <ActionBar visible={!heroVisible && !contactVisible && !menuOpen} />
    </>
  )
}
