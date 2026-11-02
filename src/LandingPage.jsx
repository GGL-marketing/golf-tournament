import { useState, useRef, useEffect, Fragment } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useInView, useReducedMotion, useMotionValue, useSpring, useTransform, useMotionTemplate, useScroll } from 'motion/react'
import heroVideo from './assets/hero-video.mp4'
import ladyGolferImage from './assets/lady-golfer.webp'
import socialGolfImage from './assets/social-golf.webp'
import holeInOneImage from './assets/hole_in_1.webp'
import './LandingPage.css'

const INSTAGRAM_URL = 'https://www.instagram.com/global_golf_league/'
const TIKTOK_URL = 'https://www.tiktok.com/@global_golf_league'
const CONTACT_EMAIL = 'globalgolfleague.ggl@gmail.com'

const REGIONS = ['Johannesburg', 'Cape Town', 'KwaZulu-Natal', 'Other']

const NAV = [
  { id: 'top', label: 'GGL' },
  { id: 'join', label: 'Sign Up' },
  { id: 'challenge', label: 'Hole-In-One Challenge' },
  { id: 'tournament', label: 'New Era Tournament' },
  { id: 'app', label: 'GGL Mobile App' },
  { id: 'why', label: 'Why GGL' },
  { id: 'faq', label: "FAQ's" },
]

const BENEFITS = [
  { benefit: 'GGL App Access', general: 'Standard download', vip: '3-month free trial included' },
  { benefit: 'New Era Tournament Entries', general: 'Public registration (subject to caps)', vip: '48-hour priority window (153 cap)' },
  { benefit: 'R100k Hole-in-One Booking', general: 'Standby queue', vip: 'Guaranteed early notification' },
]

const PRIZES = [
  {
    name: 'Division 1',
    handicap: '0–9',
    rows: [
      { place: '1st', prize: 'R17 000' },
      { place: '2nd', prize: 'R15 000' },
      { place: '3rd', prize: 'R10 000' },
      { place: '4th', prize: 'R5 000' },
      { place: '5th', prize: 'R3 000' },
    ],
    total: 'R50 000',
  },
  {
    name: 'Division 2',
    handicap: '10–17',
    rows: [
      { place: '1st', prize: 'R15 000' },
      { place: '2nd', prize: 'R10 000' },
      { place: '3rd', prize: 'R8 000' },
      { place: '4th', prize: 'R4 000' },
      { place: '5th', prize: 'R2 000' },
    ],
    total: 'R39 000',
  },
  {
    name: 'Division 3',
    handicap: '18–35',
    rows: [
      { place: '1st', prize: 'R12 000' },
      { place: '2nd', prize: 'R8 000' },
      { place: '3rd', prize: 'R4 000' },
      { place: '4th', prize: 'R2 000' },
      { place: '5th', prize: 'R1 000' },
    ],
    total: 'R27 000',
  },
]

const TOURNAMENT_TERMS = [
  { label: 'Prize Form', text: 'Prizes are issued as non-cash gift vouchers for Canal Walk only.' },
  { label: 'No Cash Value', text: 'Gift vouchers cannot be exchanged, returned or redeemed for cash.' },
  { label: 'Redemption', text: 'Prizes are non-transferable and subject to issuer validity periods and standard terms.' },
  { label: 'Liability', text: 'GGL is not responsible for lost, stolen or expired gift vouchers.' },
]

const FEATURES = [
  {
    id: 'challenge',
    number: '01',
    title: 'The GGL Hole-In-One Challenge',
    status: 'Partner clubs being finalised • Activations starting soon',
    intro: 'One official shot on a designated par 3 to win R100,000 cash.',
    image: holeInOneImage,
    imageAlt: 'Golfer on a par 3',
    pointsTitle: 'Hole-In-One Details',
    points: [
      { label: 'The Setup', text: 'GGL partners with selected golf clubs for one month at a time, hosting an official challenge day once a week on a designated Par 3.' },
      { label: 'The Rules', text: 'Capped at 100 amateur players per challenge day. Every player receives exactly one official, monitored shot to hole out for R100,000 cash.' },
      { label: 'Eligibility', text: 'Open to amateur golfers with an active HNA number. Under 18s may take part in the Challenge but are not eligible to win the R100,000 prize.' },
      { label: 'Pre-Launch Perk', text: 'Challenge registration requires GGL Pre-Membership. Pre-registering today secures your spot in line as soon as the first partner club dates drop.' },
    ],
  },
  {
    id: 'tournament',
    number: '02',
    title: 'The GGL New Era Tournament',
    status: 'Course fixtures finalising • Registration opening soon',
    intro: 'A tour-standard, two-day Individual Stableford for amateur golfers who want to test their game under real competitive pressure.',
    image: ladyGolferImage,
    imageAlt: 'GGL golfer mid-swing',
    showPrizes: true,
    pointsTitle: 'Tournament Details',
    points: [
      { label: 'R120,000 Total Prize Pool', text: 'R116,000 in Canal Walk gift vouchers across the three divisions, paying down to 5th place in every division, plus an optional R4,000 putting competition.' },
      { label: 'R250,000 In-Tournament Aces', text: 'Two R250,000 Hole-in-One opportunities on each tournament day, giving you four chances across the two days. Subject to applicable insurance and event conditions.' },
      { label: 'Strict 153-Player Field', text: 'Capped at 51 players per division to protect pace of play and fairness.' },
      { label: 'Two-Day Cut Format', text: 'Day 1 features 17 three-balls per division. The top 24 players in each division advance to Day 2, carrying their Stableford points forward.' },
      { label: 'Tour Perks & Mulligans', text: '18 dedicated course marshals to keep pace, one GGL Mulligan on Day 1 (tee shot or second shot), and a playoff hole to settle ties for any prize position.' },
      { label: 'Pre-Launch Perk', text: 'With fields capped at 51 golfers per division, waitlist members get a 48-hour priority window before entries open to the general public.' },
    ],
  },
  {
    id: 'app',
    number: '03',
    title: 'GGL App',
    status: 'In final polish • Standby for launch',
    intro: 'A dedicated app for iOS, Android and web that powers your everyday golf life.',
    image: socialGolfImage,
    imageAlt: 'Two golfers relaxing on the course',
    pointsTitle: 'App Features',
    points: [
      { label: 'Automated HNA Handicap Sync', text: 'Your official HNA handicap syncs to your profile automatically. No manual self-reporting.' },
      {
        label: 'Link Up Social Matchmaking',
        text: '',
        sub: [
          { label: 'Join Me', text: 'Hosting a round? Post your open tee time with course, date, region and preferred handicap bracket (Casual, Single Figure, Mid or Custom).' },
          { label: 'Join Them', text: 'Looking for a game? Browse open slots that match your profile and request to join.' },
          { label: 'Two-Way Approval & Ratings', text: 'The host accepts or declines applicants before the chat unlocks, backed by a 5-star post-round sportsmanship rating for pace of play and etiquette.' },
        ],
      },
      { label: 'Live Leaderboards & Digital Wallet', text: 'Track real-time division standings and your cumulative tournament earnings in your Total Winnings dashboard, withdrawable directly to your bank account.' },
      { label: 'Pre-Launch Perk', text: 'All pre-registered golfers unlock a 3-Month Free Trial when the app launches. Standard membership is R200 per month thereafter.' },
    ],
  },
]

const WHY_WE_CARE_INTRO = [
  "Many amateur golfers have an incredible game. You put the hours in and take your swing seriously, but turning professional isn't the right path for everyone. Choosing to stay an amateur shouldn't mean missing out on top-tier competitive excitement. You deserve an authentic tournament stage where your ability is recognised, the stakes feel real, and you're treated like a pro.",
  "At the same time, life gets busy. Plenty of golfers genuinely want to play more rounds, but finding a consistent group can be tough. When schedules clash and organising a four-ball becomes difficult, players naturally end up on the course less often than they'd like.",
]

const WHY_WE_CARE_OUTRO = [
  'Through verified handicap divisions, tour-style tournaments and direct tee-time matchmaking through our upcoming app, we add a structured, exciting layer to your regular golf calendar.',
  'Everything we build is designed to work hand-in-hand with golf courses, helping fill tee sheets, welcoming new players into clubhouses, and keeping passionate golfers connected to the fairways.',
]

const FAQS = [
  {
    q: 'Does signing up for the waitlist cost anything?',
    a: 'No. Pre-launch registration is completely free. You are simply locking in your priority notification for the app launch, tournament registration and Hole-in-One Challenge days.',
  },
  {
    q: 'How will I be notified when features go live?',
    a: "If you sign up, you'll receive an email as each one opens, before it is announced to the general public. From there you can download the app and activate your 3-month trial, or reserve your tournament entry. If you don't sign up, you can follow us on social media for updates, but you'll miss out on early releases and Premium Access benefits.",
  },
  {
    q: 'What does it cost to enter the New Era Tournament?',
    a: 'Entry fees are set per division: Division 1 (handicap 0–9) is R2,500, Division 2 (handicap 10–17) is R2,000 and Division 3 (handicap 18–35) is R1,000. Waitlist members get a 48-hour priority window before entries open to the public.',
  },
  {
    q: 'How are prizes paid?',
    a: "The Hole-in-One Challenge prize is R100,000 cash. New Era Tournament divisional prizes are issued as non-cash Canal Walk gift vouchers, which cannot be exchanged, returned or redeemed for cash and are subject to the issuer's validity periods and standard terms.",
  },
  {
    q: 'Who can participate in GGL events?',
    a: 'GGL is designed for amateur golfers of all ages and genders with an official HNA handicap. New Era Tournament divisions cover handicaps 0 to 35, and the Hole-in-One Challenge is open to amateur golfers with an active HNA number.',
  },
]

const PATHS = {
  loop: 'M0 230 C 120 150, 260 150, 320 220 C 360 270, 300 315, 250 290 C 200 265, 240 205, 320 215 C 430 230, 500 120, 600 40',
  wave: 'M0 180 C 120 110, 220 110, 300 190 C 380 270, 480 280, 600 60',
}

const EASE = [0.22, 1, 0.36, 1]

const MOTION_TAGS = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  blockquote: motion.blockquote,
}

const CHAR_VARIANTS = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 14 },
  show: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.55, ease: EASE } },
}

const STATIC_VARIANTS = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
}

/* Headings: blur in and rise, one character at a time */
function TextAnimate({ text, as = 'span', className = '', delay = 0, stagger = 0.02 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const Tag = MOTION_TAGS[as]
  const words = text.split(' ')

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={text}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : stagger, delayChildren: delay } } }}
    >
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="ta-word" aria-hidden="true">
            {Array.from(word).map((char, ci) => (
              <motion.span key={ci} className="ta-char" variants={reduceMotion ? STATIC_VARIANTS : CHAR_VARIANTS}>
                {char}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}

/* Body text: resolves from blur when it scrolls into view, softens again when it leaves */
function BlurReveal({ as = 'div', className = '', delay = 0, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.15 })
  const reduceMotion = useReducedMotion()
  const Tag = MOTION_TAGS[as]

  if (reduceMotion) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
      animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 0.2, filter: 'blur(8px)', y: 10 }}
      transition={{ duration: 0.9, ease: EASE, delay: inView ? delay : 0 }}
    >
      {children}
    </Tag>
  )
}

/* True on devices with a mouse or trackpad (not touch screens) */
function useFinePointer() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setFine(mq.matches)
    const onChange = (e) => setFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return fine
}

/* Tilts toward the cursor with a soft glare. Flat on touch screens and with reduced motion. */
function TiltCard({ className = '', max = 7, children }) {
  const reduceMotion = useReducedMotion()
  const fine = useFinePointer()
  const active = fine && !reduceMotion

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const spring = { stiffness: 220, damping: 22 }
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring)
  const glareX = useTransform(px, (v) => `${v * 100}%`)
  const glareY = useTransform(py, (v) => `${v * 100}%`)
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 55%)`
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 25 })

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
    glareOpacity.set(1)
  }

  const handleLeave = () => {
    px.set(0.5)
    py.set(0.5)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      className={`lp-tilt ${className}`}
      style={active ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      onPointerMove={active ? handleMove : undefined}
      onPointerLeave={active ? handleLeave : undefined}
    >
      {children}
      {active && <motion.div className="lp-tilt-glare" aria-hidden="true" style={{ background: glare, opacity: glareOpacity }} />}
    </motion.div>
  )
}

/* Card with a gold border that glows where the cursor is */
function GlowCard({ className = '', children }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const fine = useFinePointer()
  const active = fine && !reduceMotion

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--glow-x', `${e.clientX - r.left}px`)
    el.style.setProperty('--glow-y', `${e.clientY - r.top}px`)
    el.style.setProperty('--glow-on', '1')
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.setProperty('--glow-on', '0')
  }

  return (
    <div
      ref={ref}
      className={`lp-glow-card ${className}`}
      onPointerMove={active ? handleMove : undefined}
      onPointerLeave={active ? handleLeave : undefined}
    >
      {active && <div className="lp-glow-border" aria-hidden="true" />}
      {active && <div className="lp-glow-fill" aria-hidden="true" />}
      <div className="lp-glow-content">{children}</div>
    </div>
  )
}

/* Image that wipes in from left to right as soon as it scrolls into view */
function RevealImage({ src, alt }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const inView = useInView(ref, { amount: 0.15, once: true })
  const shown = reduceMotion || inView

  return (
    <div className="lp-reveal" ref={ref}>
      <motion.div
        className="lp-reveal-frame"
        initial={false}
        animate={{ clipPath: shown ? 'inset(0% 0% 0% 0% round 14px)' : 'inset(0% 100% 0% 0% round 14px)' }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: EASE }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="lp-reveal-img"
          initial={false}
          animate={{ scale: shown ? 1 : 1.08 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: EASE }}
        />
      </motion.div>
    </div>
  )
}

function TextureButton({ variant = 'gold', size = 'md', block = false, type = 'button', className = '', children, ...props }) {
  return (
    <button type={type} className={`tx-btn tx-${variant} tx-${size} ${block ? 'tx-block' : ''} ${className}`} {...props}>
      <span className="tx-btn-inner">{children}</span>
    </button>
  )
}

function Swoosh({ id, variant = 'gold', shape = 'loop', className = '' }) {
  return (
    <svg className={className} viewBox="0 0 600 320" fill="none" preserveAspectRatio="none" aria-hidden="true">
      {variant === 'gold' && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c48f22" />
            <stop offset="55%" stopColor="#f3d68c" />
            <stop offset="100%" stopColor="#d5af4c" />
          </linearGradient>
        </defs>
      )}
      <path
        d={PATHS[shape]}
        stroke={variant === 'gold' ? `url(#${id})` : '#2b4a6f'}
        strokeWidth="22"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/* Section that folds open and closed on phones. Always open on bigger screens. */
function Fold({ title, titleClass = '', children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`lp-fold ${open ? 'is-open' : ''}`}>
      <button type="button" className={`lp-fold-toggle ${titleClass}`} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className="lp-fold-icon" aria-hidden="true">+</span>
      </button>
      <div className="lp-fold-body">
        <div className="lp-fold-inner">{children}</div>
      </div>
    </div>
  )
}

function Terms({ items }) {
  return (
    <div className="lp-terms">
      <Fold title="Prize T's & C's" titleClass="lp-terms-title">
        <ul>
          {items.map((t) => (
            <li key={t.label}><strong>{t.label}:</strong> {t.text}</li>
          ))}
        </ul>
      </Fold>
    </div>
  )
}

function WaitlistForm({ idPrefix, form, onChange, consent, onConsent, status, error, onSubmit, onFollow }) {
  if (status === 'success') {
    return (
      <div className="lp-success">
        <p className="lp-success-icon">⛳</p>
        <h3 className="lp-form-title">You're On The List</h3>
        <p className="lp-form-sub">
          Thanks, {form.firstName.trim()}. We'll be in touch by email and WhatsApp as each launch goes live. Follow us on Instagram for updates in the meantime.
        </p>
        <TextureButton block onClick={onFollow}>Follow on Instagram</TextureButton>
      </div>
    )
  }

  const fid = (name) => `${idPrefix}-${name}`

  return (
    <>
      <h3 className="lp-form-title">Join the Waitlist</h3>
      <p className="lp-form-sub">Free to join. Takes under a minute.</p>

      <form className="lp-form" onSubmit={onSubmit} noValidate>
        <div className="lp-row">
          <div>
            <label className="lp-label" htmlFor={fid('firstName')}>First Name</label>
            <input id={fid('firstName')} name="firstName" className="lp-input" value={form.firstName} onChange={onChange} placeholder="John" autoComplete="given-name" />
          </div>
          <div>
            <label className="lp-label" htmlFor={fid('lastName')}>Last Name</label>
            <input id={fid('lastName')} name="lastName" className="lp-input" value={form.lastName} onChange={onChange} placeholder="Smith" autoComplete="family-name" />
          </div>
        </div>

        <div>
          <label className="lp-label" htmlFor={fid('email')}>Email</label>
          <input id={fid('email')} name="email" type="email" className="lp-input" value={form.email} onChange={onChange} placeholder="john@example.com" autoComplete="email" />
        </div>

        <div>
          <label className="lp-label" htmlFor={fid('whatsapp')}>WhatsApp Number</label>
          <input id={fid('whatsapp')} name="whatsapp" type="tel" className="lp-input" value={form.whatsapp} onChange={onChange} placeholder="+27 82 123 4567" autoComplete="tel" />
        </div>

        <div>
          <label className="lp-label" htmlFor={fid('homeClub')}>Home Golf Club</label>
          <input id={fid('homeClub')} name="homeClub" className="lp-input" value={form.homeClub} onChange={onChange} placeholder="Rondebosch Golf Club" />
        </div>

        <div className="lp-row">
          <div>
            <label className="lp-label" htmlFor={fid('region')}>Region</label>
            <select id={fid('region')} name="region" className="lp-input lp-select" value={form.region} onChange={onChange}>
              <option value="">Select</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="lp-label" htmlFor={fid('handicap')}>
              Handicap <span className="lp-label-optional">(optional)</span>
            </label>
            <input id={fid('handicap')} name="handicap" type="number" min="0" max="35" step="0.1" className="lp-input" value={form.handicap} onChange={onChange} placeholder="0 to 35" />
          </div>
        </div>

        <label className="lp-check">
          <input type="checkbox" checked={consent} onChange={onConsent} />
          <span>I agree to receive emails and WhatsApp messages from Global Golf League. I can unsubscribe at any time.</span>
        </label>

        {error && <p className="lp-error">{error}</p>}

        <TextureButton type="submit" block disabled={status === 'loading'}>
          {status === 'loading' ? 'Signing You Up...' : 'Sign Me Up'}
        </TextureButton>
      </form>
    </>
  )
}

/* Slide-out sign-up panel, opened from the header, menu, edge tab and closing CTA */
function SidePanel({ open, onClose, children }) {
  return createPortal(
    <AnimatePresence>
      {open && (
        <Fragment key="side-panel">
          <motion.div
            className="sp-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.aside
            className="sp-panel lp-layer"
            role="dialog"
            aria-modal="true"
            aria-label="Join the waitlist"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 300 }}
          >
            <button type="button" className="lp-close" onClick={onClose} aria-label="Close" autoFocus>×</button>
            {children}
          </motion.aside>
        </Fragment>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default function LandingPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    homeClub: '',
    region: '',
    handicap: '',
  })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [openFaq, setOpenFaq] = useState(0)
  const [panelOpen, setPanelOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const overlayOpen = panelOpen

  // Show the sticky menu bar as soon as the visitor starts scrolling
  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 10)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  useEffect(() => {
    if (!scrolled) setMenuOpen(false)
  }, [scrolled])

  useEffect(() => {
    if (!overlayOpen) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setPanelOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [overlayOpen])

  const openPanel = () => {
    setPanelOpen(true)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNav = (id) => {
    setMenuOpen(false)
    if (id === 'join') {
      openPanel()
      return
    }
    scrollToSection(id)
  }

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const whatsappDigits = form.whatsapp.replace(/\D/g, '')

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError('Please enter your first and last name.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    if (whatsappDigits.length < 9 || whatsappDigits.length > 15) {
      setError('Please enter a valid WhatsApp number.')
      return
    }
    if (!form.homeClub.trim()) {
      setError('Please enter your home golf club.')
      return
    }
    if (!form.region) {
      setError('Please select your region.')
      return
    }
    if (form.handicap !== '' && (Number(form.handicap) < 0 || Number(form.handicap) > 35)) {
      setError('Handicap must be between 0 and 35.')
      return
    }
    if (!consent) {
      setError('Please tick the box to agree to receive emails and WhatsApp messages from GGL.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')

      if (window.fbq) window.fbq('track', 'CompleteRegistration')
      setStatus('success')
    } catch (err) {
      setError(err.message)
      setStatus('idle')
    }
  }

  const formProps = {
    form,
    onChange: handleChange,
    consent,
    onConsent: () => setConsent(!consent),
    status,
    error,
    onSubmit: handleSubmit,
    onFollow: () => openLink(INSTAGRAM_URL),
  }

  return (
    <div className="lp">

      {/* HERO TOP */}
      <section className="lp-hero-top">
        <video autoPlay muted loop playsInline className="lp-hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="lp-hero-overlay" />
        <div className="lp-hero-top-inner">
          <TextAnimate as="h1" text="GGL" className="lp-wordmark" stagger={0.12} />
          <TextAnimate as="p" text="Global Golf League" className="lp-hero-name" delay={0.35} stagger={0.03} />
          <TextAnimate as="p" text="For everyday players to feel like a pro" className="lp-hero-tagline" delay={0.8} stagger={0.02} />
        </div>
      </section>

      {/* NAV MENU */}
      <nav className={`lp-nav ${scrolled ? 'is-visible' : ''}`} aria-label="Page sections">
        <div className="lp-nav-inner">
          {NAV.map((item) => (
            item.id === 'join' ? (
              <TextureButton key={item.id} size="xs" className="lp-nav-cta" onClick={() => handleNav(item.id)}>
                {item.label}
              </TextureButton>
            ) : (
              <button
                key={item.id}
                type="button"
                className={`lp-nav-link ${item.id === 'top' ? 'lp-nav-link-brand' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      </nav>

      {/* MENU GRID (phones and tablets only) */}
      <nav className="lp-menu-grid" aria-label="Page sections">
        {NAV.filter((item) => item.id !== 'top').map((item) => (
          item.id === 'join' ? (
            <TextureButton key={item.id} block className="lp-menu-grid-join" onClick={() => handleNav(item.id)}>
              {item.label}
            </TextureButton>
          ) : (
            <button key={item.id} type="button" className="lp-menu-grid-item" onClick={() => handleNav(item.id)}>
              {item.label}
            </button>
          )
        ))}
      </nav>

      {/* HERO COPY */}
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <TextAnimate as="h2" text="Running out of ways to make your golf game interesting?" className="lp-hero-question" />
          <BlurReveal as="p" className="lp-hero-body" delay={0.1}>
            Global Golf League is built for the golfers who want more. We are here to give it to you!
          </BlurReveal>
        </div>

        <Swoosh variant="navy" shape="wave" className="lp-swoosh lp-swoosh-hero" />
      </section>

      {/* JOIN THE WAITLIST */}
      <section id="join" className="lp-join lp-anchor">
        <div className="lp-join-inner">
          <div className="lp-join-intro">
            <TextAnimate as="p" text="We are getting warmed up." className="lp-band-eyebrow xs-eyebrow" />
            <TextAnimate as="h2" text="Join the Waitlist" className="xs-title" delay={0.15} />
            <BlurReveal as="p" className="xs-lead">
              Signing up gives you instant launch alerts and priority registration as entries are strictly limited.
            </BlurReveal>
          </div>

          <div className="lp-join-action">
            <BlurReveal as="ul" className="xs-perks">
              {BENEFITS.map((row) => (
                <li key={row.benefit}>
                  <span className="xs-perk-label">{row.benefit}</span>
                  <span className="xs-perk-text">{row.vip}</span>
                </li>
              ))}
            </BlurReveal>

            <TextureButton onClick={openPanel}>Get Early Access</TextureButton>
          </div>
        </div>

      </section>

      {/* WHAT YOU CAN LOOK FORWARD TO */}
      <section className="lp-section-white">
        <div className="lp-title-band">
          <div className="lp-title-box">
            <TextAnimate as="h2" text="What You Can Look Forward To" />
          </div>
        </div>

        <div className="lp-container lp-container-swoosh">
          {FEATURES.map((feature, index) => (
            <article key={feature.id} id={feature.id} className={`lp-feature ${index % 2 === 1 ? 'lp-feature-reverse' : ''}`}>
              <div className="lp-bar lp-bar-feature"><TextAnimate text={`${feature.number}. ${feature.title}`} /></div>

              <BlurReveal className="lp-feature-head">
                <span className="lp-status">{feature.status}</span>
                <p className="lp-feature-intro">{feature.intro}</p>
              </BlurReveal>

              {feature.showPrizes && (
                <div className="lp-prizes">
                  <div className="lp-prize-stack">
                    {PRIZES.map((division, i) => (
                      <div
                        key={division.name}
                        className="lp-prize-slot"
                        style={{ '--i': i, '--r': ['-1.2deg', '1deg', '-0.6deg'][i % 3] }}
                      >
                        <TiltCard className="lp-gold-table lp-prize-card">
                          <div className="lp-prize-head">
                            <span className="lp-prize-div">{division.name}</span>
                            <span className="lp-prize-hcp">Handicap {division.handicap}</span>
                          </div>
                          <p className="lp-prize-voucher">Prizes are gift vouchers, not exchangeable for cash</p>
                          <div className="lp-prize-row lp-prize-row-head">
                            <span>Position</span>
                            <span>Prize</span>
                          </div>
                          {division.rows.map((row) => (
                            <div key={row.place} className="lp-prize-row">
                              <span>{row.place}</span>
                              <span>{row.prize}</span>
                            </div>
                          ))}
                          <div className="lp-prize-row lp-prize-total">
                            <span>Total Prize Pool</span>
                            <span>{division.total}</span>
                          </div>
                        </TiltCard>
                      </div>
                    ))}
                  </div>
                  <div className="lp-prize-aside">
                    <Terms items={TOURNAMENT_TERMS} />
                  </div>
                </div>
              )}

              <div className="lp-feature-grid">
                <div className="lp-feature-content">
                  <Fold title={feature.pointsTitle} titleClass="lp-points-title">
                    <BlurReveal as="ul" className="lp-points">
                      {feature.points.map((point) => (
                        <li key={point.label}>
                          <strong>{point.label}:</strong> {point.text}
                          {point.sub && (
                            <ul className="lp-subpoints">
                              {point.sub.map((s) => (
                                <li key={s.label}><strong>{s.label}:</strong> {s.text}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </BlurReveal>
                  </Fold>
                </div>

                <div className="lp-feature-media">
                  <RevealImage src={feature.image} alt={feature.imageAlt} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <Swoosh id="gold-features" shape="wave" className="lp-swoosh lp-swoosh-bottom-full" />
      </section>

      {/* WHY GGL */}
      <section id="why" className="lp-section-navy lp-anchor">
        <div className="lp-title-band lp-title-band-flush">
          <div className="lp-title-box">
            <TextAnimate as="h2" text="Why GGL" />
          </div>
        </div>

        <div className="lp-container lp-narrow">
          <GlowCard>
            {WHY_WE_CARE_INTRO.map((p, i) => (
              <BlurReveal key={i} as="p" className="lp-body lp-body-light">{p}</BlurReveal>
            ))}
            <TextAnimate as="p" text="That is where GGL steps in." className="lp-care-strong" />
            <BlurReveal as="blockquote" className="lp-mission">
              Our mission is simple: to create a competitive golf league experience where amateur golfers of all ages and genders can enjoy the game they love, and feel that their game matters.
            </BlurReveal>
            {WHY_WE_CARE_OUTRO.map((p, i) => (
              <BlurReveal key={i} as="p" className="lp-body lp-body-light">{p}</BlurReveal>
            ))}
          </GlowCard>
        </div>
      </section>

      {/* FAQS */}
      <section id="faq" className="lp-section-white lp-anchor">
        <div className="lp-title-band lp-title-band-light">
          <div className="lp-title-box">
            <TextAnimate as="h2" text="FAQs" />
          </div>
        </div>

        <div className="lp-container lp-narrow">
          {FAQS.map((faq, i) => (
            <BlurReveal key={faq.q} className="lp-faq-item">
              <button type="button" className="lp-bar lp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                <span>{faq.q}</span>
                <span className="lp-faq-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className="lp-body lp-body-dark lp-faq-a">{faq.a}</p>}
            </BlurReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="lp-cta">
        <TextureButton size="lg" onClick={openPanel}>Join the Waitlist</TextureButton>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <p className="lp-footer-logo">GGL</p>
        <div className="lp-footer-links">
          <button type="button" className="lp-footer-link" onClick={() => openLink(INSTAGRAM_URL)}>Instagram</button>
          <button type="button" className="lp-footer-link" onClick={() => openLink(TIKTOK_URL)}>TikTok</button>
          <button type="button" className="lp-footer-link" onClick={() => { window.location.href = `mailto:${CONTACT_EMAIL}` }}>{CONTACT_EMAIL}</button>
        </div>
        <p className="lp-footer-copy">© 2026 Global Golf League. All rights reserved.</p>
      </footer>

      {/* STICKY BAR (phones and tablets only, after the menu grid scrolls away) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="mbar"
            className="lp-mbar"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="lp-mbar-row">
              <button type="button" className="lp-mbar-brand" onClick={() => handleNav('top')}>GGL</button>
              <div className="lp-mbar-actions">
                <TextureButton size="xs" onClick={() => handleNav('join')}>Join</TextureButton>
                <button
                  type="button"
                  className="lp-mbar-menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
                  {menuOpen ? 'Close' : 'Menu'}
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {menuOpen && (
                <motion.ul
                  key="mbar-list"
                  className="lp-mbar-list"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  {NAV.filter((item) => item.id !== 'top' && item.id !== 'join').map((item) => (
                    <li key={item.id}>
                      <button type="button" onClick={() => handleNav(item.id)}>{item.label}</button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SIDE PANEL */}
      <SidePanel open={panelOpen} onClose={() => setPanelOpen(false)}>
        <div className="lp-form-plain">
          <WaitlistForm idPrefix="panel" {...formProps} />
        </div>
      </SidePanel>

    </div>
  )
}
