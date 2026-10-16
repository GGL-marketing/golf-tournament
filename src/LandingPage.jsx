import { useState, useRef } from 'react'
import heroVideo from './assets/hero-video.mp4'
import gglLogo from './assets/GGL_LOGO.png'
import ladyGolferImage from './assets/Lady golfer.png'
import socialGolfImage from './assets/social golf.png'
import holeInOneImage from './assets/hole_in_1.webp'
import './LandingPage.css'

const INSTAGRAM_URL = 'https://www.instagram.com/global_golf_league/'
const TIKTOK_URL = 'https://www.tiktok.com/@global_golf_league'
const CONTACT_EMAIL = 'globalgolfleague.ggl@gmail.com'

const REGIONS = ['Johannesburg', 'Cape Town', 'KwaZulu-Natal', 'Other']

const BENEFITS = [
  { benefit: 'GGL App Access', general: 'Standard download', vip: '3-month free trial included' },
  { benefit: 'New Era Tournament Entries', general: 'Public registration (subject to caps)', vip: '48-hour priority window (153 cap)' },
  { benefit: 'R100k Hole-in-One Booking', general: 'Standby queue', vip: 'Guaranteed early notification' },
  { benefit: 'Launch Updates & Fixtures', general: 'Public social media', vip: 'Direct WhatsApp & email alerts' },
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

const FEATURES = [
  {
    id: 'challenge',
    number: '01',
    title: 'The GGL Hole-In-One Challenge',
    status: 'Partner clubs being finalised • Activations starting soon',
    intro: 'One official shot on a designated par 3 to win R100,000 in gift vouchers.',
    image: holeInOneImage,
    imageAlt: 'Golfer on a par 3',
    points: [
      { label: 'The Setup', text: 'GGL partners with selected golf clubs for one month at a time, hosting an official challenge day once a week on a designated Par 3.' },
      { label: 'The Rules', text: 'Capped at 100 amateur players per challenge day. Every player receives exactly one official, monitored shot to hole out for the R100,000 prize.' },
      { label: 'Eligibility', text: 'Open to amateur golfers with an active HNA number. Under 18s may take part in the Challenge but are not eligible to win the R100,000 prize.' },
      { label: 'Pre-Launch Perk', text: 'Challenge registration requires GGL Pre-Membership. Pre-registering today secures your spot in line as soon as the first partner club dates drop.' },
    ],
    terms: [
      { label: 'Prize Form', text: 'The R100,000 prize is issued as non-cash gift vouchers.' },
      { label: 'No Cash Value', text: 'Gift vouchers cannot be exchanged, returned or redeemed for cash.' },
      { label: 'Redemption', text: 'Prizes are non-transferable and subject to issuer validity periods and standard terms.' },
      { label: 'Liability', text: 'GGL is not responsible for lost, stolen or expired gift vouchers.' },
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
    points: [
      { label: 'R120,000 Total Prize Pool', text: 'R116,000 in Canal Walk gift vouchers across the three divisions, paying down to 5th place in every division, plus an optional R4,000 putting competition.' },
      { label: 'R250,000 In-Tournament Aces', text: 'Two R250,000 Hole-in-One opportunities on each tournament day, giving you four chances across the two days. Subject to applicable insurance and event conditions.' },
      { label: 'Strict 153-Player Field', text: 'Capped at 51 players per division to protect pace of play and fairness.' },
      { label: 'Two-Day Cut Format', text: 'Day 1 features 17 three-balls per division. The top 24 players in each division advance to Day 2, carrying their Stableford points forward.' },
      { label: 'Tour Perks & Mulligans', text: '18 dedicated course marshals to keep pace, one GGL Mulligan on Day 1 (tee shot or second shot), and a playoff hole to settle ties for any prize position.' },
      { label: 'Pre-Launch Perk', text: 'With fields capped at 51 golfers per division, waitlist members get a 48-hour priority window before entries open to the general public.' },
    ],
    terms: [
      { label: 'Prize Form', text: 'Prizes are issued as non-cash gift vouchers for Canal Walk only.' },
      { label: 'No Cash Value', text: 'Gift vouchers cannot be exchanged, returned or redeemed for cash.' },
      { label: 'Redemption', text: 'Prizes are non-transferable and subject to issuer validity periods and standard terms.' },
      { label: 'Liability', text: 'GGL is not responsible for lost, stolen or expired gift vouchers.' },
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
    a: 'You will receive an email and a WhatsApp message as each one opens, before it is announced to the general public. From there you can download the app and activate your 3-month trial, or reserve your tournament entry.',
  },
  {
    q: 'What does it cost to enter the New Era Tournament?',
    a: 'Entry fees are set per division: Division 1 (handicap 0–9) is R2,500, Division 2 (handicap 10–17) is R2,000 and Division 3 (handicap 18–35) is R1,000. Waitlist members get a 48-hour priority window before entries open to the public.',
  },
  {
    q: 'Are prizes paid in cash?',
    a: "No. Hole-in-One Challenge and New Era Tournament prizes are issued as non-cash gift vouchers. They cannot be exchanged, returned or redeemed for cash, and are subject to the issuer's validity periods and standard terms.",
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

function Terms({ items }) {
  return (
    <div className="lp-terms">
      <p className="lp-terms-title">Prize T's & C's</p>
      <ul>
        {items.map((t) => (
          <li key={t.label}><strong>{t.label}:</strong> {t.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default function LandingPage() {
  const formRef = useRef(null)
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const scrollToForm = () => {
    if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
    if (form.handicap !== '' && (Number(form.handicap) < 0 || Number(form.handicap) > 54)) {
      setError('Handicap must be between 0 and 54.')
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

  return (
    <div className="lp">

      {/* HEADER */}
      <header className="lp-header">
        <img src={gglLogo} alt="GGL Logo" className="lp-header-logo" />
        <button className="lp-header-btn" onClick={scrollToForm}>Join the Waitlist</button>
      </header>

      {/* HERO */}
      <section className="lp-hero">
        <div className="lp-hero-top">
          <video autoPlay muted loop playsInline className="lp-hero-video">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="lp-hero-overlay" />
          <div className="lp-hero-top-inner">
            <h1 className="lp-wordmark">GGL</h1>
            <p className="lp-hero-name">Global Golf League</p>
            <p className="lp-hero-tagline">For everyday players to feel like a pro</p>
          </div>
        </div>

        <div className="lp-hero-split">
          <div className="lp-hero-copy">
            <h2 className="lp-hero-question">Running out of ways to make your golf game interesting?</h2>
            <p className="lp-hero-sub">Tired of only playing for bragging rights?</p>
            <p className="lp-body lp-body-navy">
              The Global Golf League is built for the golfers who want more. We are here to give it to you!
            </p>
            <p className="lp-hero-label">For us, this means:</p>
            <p className="lp-hero-mission">
              Creating a competitive golf league experience where amateur golfers of all ages and gender can enjoy the game they love, and feel that their game matters.
            </p>
            <button className="lp-btn lp-btn-navy" onClick={scrollToForm}>Join the Waitlist</button>
          </div>

          <div className="lp-contents">
            <p className="lp-contents-title">Coming Up:</p>
            <button className="lp-contents-link" onClick={() => scrollToSection('challenge')}>GGL Hole-In-One Challenge</button>
            <button className="lp-contents-link" onClick={() => scrollToSection('tournament')}>GGL New Era Tournament</button>
            <button className="lp-contents-link" onClick={() => scrollToSection('app')}>GGL App</button>
          </div>
        </div>

        <Swoosh variant="navy" shape="wave" className="lp-swoosh lp-swoosh-hero" />
      </section>

      {/* SIGNUP */}
      <section className="lp-section-white">
        <div className="lp-title-band">
          <p className="lp-band-eyebrow">We are getting warmed up.</p>
          <div className="lp-title-box"><h2>Get Notified When We Go Live</h2></div>
        </div>

        <div className="lp-container">
          <p className="lp-lead">
            Sign up for GGL Pre-Membership to receive immediate notifications as our app launches, tournament fixtures open, and challenge dates are announced.
          </p>

          <div className="lp-signup-grid">
            <div className="lp-why">
              <div className="lp-bar"><span>Why join the waitlist today?</span></div>
              <p className="lp-body lp-body-dark">
                With capped tournament entries and limited challenge slots, access is handled on a first-come, first-served basis.
              </p>

              <div className="lp-gold-table lp-benefits">
                <div className="lp-gold-row lp-gold-head">
                  <span>Benefit</span>
                  <span>General Public</span>
                  <span>Pre-Launch VIP List</span>
                </div>
                {BENEFITS.map((row) => (
                  <div key={row.benefit} className="lp-gold-row">
                    <span className="lp-gold-label">{row.benefit}</span>
                    <span data-label="General Public">{row.general}</span>
                    <span data-label="VIP List" className="lp-gold-vip">{row.vip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lp-form-card" ref={formRef}>
              {status === 'success' ? (
                <div className="lp-success">
                  <p className="lp-success-icon">⛳</p>
                  <h3 className="lp-form-title">You're On The List</h3>
                  <p className="lp-form-sub">
                    Thanks, {form.firstName.trim()}. We'll be in touch by email and WhatsApp as each launch goes live. Follow us on Instagram for updates in the meantime.
                  </p>
                  <button className="lp-btn" onClick={() => openLink(INSTAGRAM_URL)}>Follow on Instagram</button>
                </div>
              ) : (
                <>
                  <h3 className="lp-form-title">Join the Waitlist</h3>
                  <p className="lp-form-sub">Free to join. Takes under a minute.</p>

                  <form className="lp-form" onSubmit={handleSubmit} noValidate>
                    <div className="lp-row">
                      <div>
                        <label className="lp-label" htmlFor="firstName">First Name</label>
                        <input id="firstName" name="firstName" className="lp-input" value={form.firstName} onChange={handleChange} placeholder="John" autoComplete="given-name" />
                      </div>
                      <div>
                        <label className="lp-label" htmlFor="lastName">Last Name</label>
                        <input id="lastName" name="lastName" className="lp-input" value={form.lastName} onChange={handleChange} placeholder="Smith" autoComplete="family-name" />
                      </div>
                    </div>

                    <div>
                      <label className="lp-label" htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" className="lp-input" value={form.email} onChange={handleChange} placeholder="john@example.com" autoComplete="email" />
                    </div>

                    <div>
                      <label className="lp-label" htmlFor="whatsapp">WhatsApp Number</label>
                      <input id="whatsapp" name="whatsapp" type="tel" className="lp-input" value={form.whatsapp} onChange={handleChange} placeholder="+27 82 123 4567" autoComplete="tel" />
                    </div>

                    <div>
                      <label className="lp-label" htmlFor="homeClub">Home Golf Club</label>
                      <input id="homeClub" name="homeClub" className="lp-input" value={form.homeClub} onChange={handleChange} placeholder="Rondebosch Golf Club" />
                    </div>

                    <div className="lp-row">
                      <div>
                        <label className="lp-label" htmlFor="region">Region</label>
                        <select id="region" name="region" className="lp-input lp-select" value={form.region} onChange={handleChange}>
                          <option value="">Select</option>
                          {REGIONS.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="lp-label" htmlFor="handicap">
                          Handicap <span className="lp-label-optional">(optional)</span>
                        </label>
                        <input id="handicap" name="handicap" type="number" min="0" max="54" step="0.1" className="lp-input" value={form.handicap} onChange={handleChange} placeholder="0 to 54" />
                      </div>
                    </div>

                    <label className="lp-check">
                      <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} />
                      <span>I agree to receive emails and WhatsApp messages from Global Golf League. I can unsubscribe at any time.</span>
                    </label>

                    {error && <p className="lp-error">{error}</p>}

                    <button type="submit" className="lp-btn" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Signing You Up...' : 'Sign Me Up'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <Swoosh id="gold-signup" shape="loop" className="lp-swoosh lp-swoosh-corner-left" />
      </section>

      {/* WHAT YOU CAN LOOK FORWARD TO */}
      <section className="lp-section-white">
        <div className="lp-title-band">
          <div className="lp-title-box"><h2>What You Can Look Forward To</h2></div>
        </div>

        <div className="lp-container lp-container-swoosh">
          {FEATURES.map((feature, index) => (
            <article key={feature.id} id={feature.id} className={`lp-feature ${index % 2 === 1 ? 'lp-feature-reverse' : ''}`}>
              <div className="lp-bar"><span>{feature.number}. {feature.title}</span></div>

              <div className="lp-feature-head">
                <span className="lp-status">{feature.status}</span>
                <p className="lp-feature-intro">{feature.intro}</p>
              </div>

              {feature.showPrizes && (
                <div className="lp-prizes">
                  <div className="lp-prize-grid">
                    {PRIZES.map((division) => (
                      <div key={division.name} className="lp-gold-table lp-prize-card">
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
                      </div>
                    ))}
                  </div>
                  <Terms items={feature.terms} />
                </div>
              )}

              <div className="lp-feature-grid">
                <div className="lp-feature-content">
                  <ul className="lp-points">
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
                  </ul>

                  {feature.terms && !feature.showPrizes && <Terms items={feature.terms} />}
                </div>

                <div className="lp-feature-media">
                  <img src={feature.image} alt={feature.imageAlt} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <Swoosh id="gold-features" shape="wave" className="lp-swoosh lp-swoosh-bottom-full" />
      </section>

      {/* WHY WE CARE */}
      <section className="lp-section-navy">
        <div className="lp-title-band lp-title-band-flush">
          <div className="lp-title-box"><h2>Why We Care</h2></div>
        </div>

        <div className="lp-container lp-narrow">
          {WHY_WE_CARE_INTRO.map((p, i) => (
            <p key={i} className="lp-body lp-body-light">{p}</p>
          ))}
          <p className="lp-care-strong">That is where GGL steps in.</p>
          <blockquote className="lp-mission">
            Our mission is simple: to create a competitive golf league experience where amateur golfers of all ages and genders can enjoy the game they love, and feel that their game matters.
          </blockquote>
          {WHY_WE_CARE_OUTRO.map((p, i) => (
            <p key={i} className="lp-body lp-body-light">{p}</p>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section className="lp-section-white">
        <div className="lp-title-band">
          <div className="lp-title-box"><h2>FAQs</h2></div>
        </div>

        <div className="lp-container lp-narrow">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="lp-faq-item">
              <button className="lp-bar lp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                <span>{faq.q}</span>
                <span className="lp-faq-icon">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className="lp-body lp-body-dark lp-faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="lp-cta">
        <h2 className="lp-cta-title">Get Notified When We Go Live</h2>
        <button className="lp-btn lp-cta-btn" onClick={scrollToForm}>Join the Waitlist</button>
      </section>

      {/* FOOTER */}
      <footer className="lp-footer">
        <p className="lp-footer-logo">GGL</p>
        <div className="lp-footer-links">
          <button className="lp-footer-link" onClick={() => openLink(INSTAGRAM_URL)}>Instagram</button>
          <button className="lp-footer-link" onClick={() => openLink(TIKTOK_URL)}>TikTok</button>
          <button className="lp-footer-link" onClick={() => { window.location.href = `mailto:${CONTACT_EMAIL}` }}>{CONTACT_EMAIL}</button>
        </div>
        <p className="lp-footer-copy">© 2026 Global Golf League. All rights reserved.</p>
      </footer>

    </div>
  )
}