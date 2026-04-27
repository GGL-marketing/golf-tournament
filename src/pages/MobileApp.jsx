import heroVideo from './assets/hero-video.mp4'
import gglLogo from './assets/GGL_LOGO.png'
import prizesImage from './assets/plain_image.webp'
import holeInOneImage from './assets/hole_in_1.webp'
import shootYourShotBg from './assets/arial_golf_plain_background.webp'
import golfBalls from './assets/golf_balls_item.webp'
import postcardImage from './assets/postcard_image_1.webp'
import postcardImage2 from './assets/postcard_image_2.webp'
import postcardImage3 from './assets/postcard_image_3.webp'
import PillNav from './PillNav'
import SplitText from './SplitText'
import ShinyText from './ShinyText'
import MagicBento from './MagicBento'
import EntryModal from './EntryModal'
import { useRef, useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import './MobileApp.css'

const divisions = [
  {
    label: 'Elite Flight',
    division: 'Division 1',
    handicap: 'Handicap 0 – 9',
    prizes: [
      { place: '1st', amount: 'R50K' },
      { place: '2nd', amount: 'R25K' },
      { place: '3rd', amount: 'R15K' },
    ]
  },
  {
    label: 'Mid Flight',
    division: 'Division 2',
    handicap: 'Handicap 10 – 17',
    prizes: [
      { place: '1st', amount: 'R30K' },
      { place: '2nd', amount: 'R15K' },
      { place: '3rd', amount: 'R7K' },
    ]
  },
  {
    label: 'Open Flight',
    division: 'Division 3',
    handicap: 'Handicap 18 – 27',
    prizes: [
      { place: '1st', amount: 'R20K' },
      { place: '2nd', amount: 'R10K' },
      { place: '3rd', amount: 'R5K' },
    ]
  },
]

function MobileApp() {
  const [showModal, setShowModal] = useState(false)
  const [openDivision, setOpenDivision] = useState(null)
  const confettiFired = useRef(false)
  const holeInOneRef = useRef(null)

  useEffect(() => {
    const handleJoinClick = (e) => {
      const link = e.target.closest('a[href="#join"]')
      if (link) {
        e.preventDefault()
        setShowModal(true)
      }
    }
    document.addEventListener('click', handleJoinClick)
    return () => document.removeEventListener('click', handleJoinClick)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !confettiFired.current) {
            confettiFired.current = true
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.5 },
              colors: ['#d5af4c', '#f0d080', '#b8960a', '#fff8dc', '#e4ba4f', '#c9981a'],
              scalar: 1.2,
            })
          }
        })
      },
      { threshold: 0.4 }
    )
    if (holeInOneRef.current) observer.observe(holeInOneRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div>

      {/* BANNER SECTION */}
      <section id="home" style={{ position: 'relative', height: '35vh', overflow: 'hidden', backgroundColor: '#0f132a' }}>
        <PillNav
          logo={gglLogo}
          logoAlt="GGL Logo"
          items={[
            { label: 'Tournament', href: '#tournament' },
            { label: 'Prizes', href: '#prizes' },
            { label: 'Join', href: '#join' },
          ]}
          activeHref="#home"
          baseColor="#111111"
          pillColor="#222222"
          pillTextColor="#ffffff"
          hoveredPillTextColor="#e4ba4f"
          initialLoadAnimation={true}
        />
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', minWidth: '100%', minHeight: '100%', objectFit: 'cover', opacity: 0.4 }}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.7) 85%, #0f132a 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 20px' }}>
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, letterSpacing: '0.15em', margin: 0, marginTop: '8rem', textShadow: '0 0 40px rgba(213,175,76,0.4)' }}>
            <ShinyText text="GGL" color="#d5af4c" shineColor="#fff8dc" speed={3} spread={120} direction="left" />
          </h1>
          <SplitText text="Feel Like A Pro" tag="p" delay={80} duration={0.8} ease="power3.out" from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} textAlign="center" className="" style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.8rem, 2.5vw, 1.4rem)', fontWeight: 400, color: '#ffffff', letterSpacing: '0.4em', marginTop: '1rem', textTransform: 'uppercase' }} />
        </div>
      </section>

      {/* TOURNAMENT SECTION */}
      <section id="tournament" style={{ backgroundColor: '#0f132a', padding: '0' }}>
        <div style={{ borderTop: '1px solid #d5af4c', borderBottom: '1px solid #d5af4c', padding: '16px 20px', textAlign: 'center' }}>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 4vw, 1.4rem)', color: '#ffffff', margin: '0 0 6px' }}>Next Tournament: 17–18 December 2026</p>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 4vw, 1.4rem)', color: '#ffffff', margin: 0 }}>Hosted at Rondebosch Golf Club</p>
        </div>
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ height: '1px', width: '60px', backgroundColor: '#d5af4c' }} />
            <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '0.9rem', color: '#ffffff', letterSpacing: '0.2em', margin: 0, textTransform: 'uppercase' }}>Limited Spots</p>
            <div style={{ height: '1px', width: '60px', backgroundColor: '#d5af4c' }} />
          </div>
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 10vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, margin: '0 0 24px 0', textTransform: 'uppercase' }}>
            Your Season<br />Starts Now.
          </h2>
          <div style={{ height: '1px', backgroundColor: '#d5af4c', maxWidth: '300px', margin: '0 auto 32px' }} />
          <button className="mob-claim-btn" onClick={() => setShowModal(true)}>CLAIM MY SPOT</button>
        </div>
      </section>

      {/* PRIZES SECTION */}
      <section id="prizes" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0f132a' }}>
        <img src={prizesImage} alt="Golf course" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center', opacity: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0f132a 0%, transparent 8%, transparent 92%, #0f132a 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px 40px' }}>
          <div style={{ display: 'inline-block', border: '2px solid #d5af4c', borderRadius: '50px', padding: '10px 40px', marginBottom: '12px', backgroundColor: 'rgba(15, 19, 42, 0.85)' }}>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.2rem, 5vw, 2rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '0.3em' }}>PRIZES</span>
          </div>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '0.9rem', color: 'rgba(213,175,76,0.9)', margin: '0 0 32px', letterSpacing: '0.05em' }}>Tap a division to expand</p>

          {/* Accordion Divisions */}
          <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {divisions.map((div, index) => (
              <div key={index} style={{ border: '1px solid rgba(213,175,76,0.3)', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'rgba(15,19,42,0.85)' }}>
                <button
                  onClick={() => setOpenDivision(openDivision === index ? null : index)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(213,175,76,0.8)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 4px' }}>{div.label}</p>
                    <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.05em', margin: 0 }}>{div.division}</p>
                  </div>
                  <span style={{ color: '#d5af4c', fontSize: '1.5rem', fontWeight: 300 }}>{openDivision === index ? '−' : '+'}</span>
                </button>
                {openDivision === index && (
                  <div style={{ padding: '0 20px 20px', borderTop: '1px solid rgba(213,175,76,0.2)' }}>
                    <div style={{ display: 'inline-block', background: 'rgba(213,175,76,0.1)', border: '1px solid rgba(213,175,76,0.3)', borderRadius: '6px', padding: '3px 10px', margin: '12px 0', fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', color: 'rgba(213,175,76,0.9)' }}>{div.handicap}</div>
                    {div.prizes.map((prize, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < div.prizes.length - 1 ? '1px solid rgba(213,175,76,0.15)' : 'none' }}>
                        <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: 'rgba(213,175,76,0.9)' }}>{prize.place}</span>
                        <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{prize.amount}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Top 10 band */}
          <div style={{ width: '100%', backgroundColor: 'rgba(15,19,42,0.95)', border: '1px solid #d5af4c', borderRadius: '12px', padding: '20px', marginTop: '32px', textAlign: 'center' }}>
            <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 4vw, 1.3rem)', color: '#ffffff', margin: 0, lineHeight: 1.6, letterSpacing: '0.05em' }}>
              Top 10 players are awarded 50% off their next tournament entry
            </p>
          </div>
        </div>
      </section>

      {/* HOLE IN ONE SECTION */}
      <section ref={holeInOneRef} style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0f132a', height: '600px' }}>
        <img src={holeInOneImage} alt="Hole in one" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, #0f132a 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #0f132a 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, gap: '24px' }}>
          <div style={{ backgroundColor: 'rgba(15, 19, 42, 0.85)', border: '2px solid #d5af4c', borderRadius: '12px', padding: '16px 28px', textAlign: 'center' }}>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.8rem, 8vw, 3.5rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block' }}>2 Million Rand</span>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 8vw, 3.2rem)', color: '#ffffff', letterSpacing: '0.02em', display: 'block', paddingLeft: '8px' }}>hole-in-1</span>
          </div>
          <button className="mob-claim-btn mob-enter-btn" onClick={() => setShowModal(true)}>ENTER NOW</button>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(15, 19, 42, 0.92)', borderTop: '1px solid #d5af4c', borderBottom: '1px solid #d5af4c', padding: '14px 20px', textAlign: 'center', zIndex: 10 }}>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 4vw, 1.3rem)', color: '#ffffff', letterSpacing: '0.05em', margin: 0, opacity: 0.9 }}>
            Two chances at 2 Million Rand. Hole in one, Par 4. T's and C's apply.
          </p>
        </div>
      </section>

      {/* SHOOT YOUR SHOT SECTION */}
      <div style={{ position: 'relative', backgroundColor: '#0f132a', overflow: 'visible' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${shootYourShotBg})`, backgroundSize: 'cover', backgroundPosition: 'center top', opacity: 0.6, zIndex: 0 }} />
        <img src={golfBalls} alt="" style={{ position: 'absolute', bottom: '-80px', left: 0, width: '70%', pointerEvents: 'none', zIndex: 25 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0f132a 0%, transparent 10%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 10, padding: '60px 20px 100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Heading with underline gold bands */}
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.5rem, 7vw, 2.5rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '0.15em', margin: '0 0 12px', textTransform: 'uppercase', textAlign: 'center' }}>
            Shoot Your Shot
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', maxWidth: '400px', marginBottom: '40px' }}>
            <div style={{ height: '2px', backgroundColor: '#d5af4c' }} />
            <div style={{ height: '2px', backgroundColor: '#d5af4c' }} />
          </div>

          {/* Bullet points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', width: '100%', maxWidth: '400px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>🏆</span>
              <div>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 4px', textTransform: 'uppercase' }}>1 Mulligan</p>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.7rem, 3vw, 0.9rem)', fontWeight: 400, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase' }}>Over the 2 day tournament</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginLeft: '8%' }}>
              <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>🏆</span>
              <div>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 4px', textTransform: 'uppercase' }}>Marshalls</p>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.7rem, 3vw, 0.9rem)', fontWeight: 400, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase' }}>To keep the pace of play</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginLeft: '16%' }}>
              <span style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>🏆</span>
              <div>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 4px', textTransform: 'uppercase' }}>Broadcast Coverage</p>
                <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.7rem, 3vw, 0.9rem)', fontWeight: 400, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase' }}>The event will be live streamed</p>
              </div>
            </div>
          </div>

          {/* Postcard 1 centred below text */}
          <div style={{ width: '80%', maxWidth: '340px' }}>
            <img src={postcardImage} alt="GGL players on golf cart" style={{ width: '100%', borderRadius: '12px', transform: 'rotate(6deg)' }} />
          </div>

        </div>
      </div>

      {/* FAQ SECTION */}
      <section style={{ position: 'relative', zIndex: 10, backgroundColor: '#0f132a', padding: '60px 20px 40px', borderTop: '2px solid #d5af4c' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 4vw, 1.4rem)', color: '#ffffff', margin: '0 0 8px', letterSpacing: '0.05em' }}>FAQ's:</p>
          <div style={{ height: '1px', backgroundColor: '#d5af4c', maxWidth: '300px', margin: '0 auto 12px' }} />
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.8rem, 8vw, 3.5rem)', fontWeight: 900, color: '#d5af4c', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>Global Golf League</h2>
          <div style={{ height: '1px', backgroundColor: '#d5af4c', maxWidth: '300px', margin: '0 auto 12px' }} />
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 4vw, 1.4rem)', color: '#ffffff', margin: 0, letterSpacing: '0.05em' }}>GGL New Era Tournament</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '40px' }}>
          <div>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.8rem, 3.5vw, 1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>What is the entry fee:</p>
            <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>The entry fee is as follows per division; Division 1: R3000, Division 2: R2000, Division 3: R1000</p>
          </div>
          <div>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.8rem, 3.5vw, 1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>How many balls per division:</p>
            <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>17 Three-Balls per division.</p>
          </div>
          <div>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.8rem, 3.5vw, 1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>How many players in total:</p>
            <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>There are spots available for 153 players at the tournament.</p>
          </div>
        </div>

        {/* Postcards side by side */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', justifyContent: 'center', marginBottom: '20px' }}>
          <div style={{ width: '45%' }}>
            <img src={postcardImage2} alt="GGL golfer with flag" style={{ width: '100%', borderRadius: '12px', transform: 'rotate(-5deg)' }} />
          </div>
          <div style={{ width: '45%' }}>
            <img src={postcardImage3} alt="Golfer lining up putt" style={{ width: '100%', borderRadius: '12px', transform: 'rotate(6deg)' }} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0a0d1f', borderTop: '1px solid #d5af4c', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '500px', margin: '0 auto' }}>

          {/* Logo + copyright */}
          <div>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '2rem', fontWeight: 900, color: '#d5af4c', letterSpacing: '0.2em', margin: '0 0 12px' }}>GGL</h2>
            <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>© 2026 Global Golf League.<br />All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', fontWeight: 700, color: '#d5af4c', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 16px' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Tournament', 'Prizes', 'Join'].map((item) => (
                <a
                  key={item}
                  href={item === 'Join' ? '#' : `#${item.toLowerCase()}`}
                  onClick={item === 'Join' ? (e) => { e.preventDefault(); setShowModal(true) } : undefined}
                  style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >{item}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', fontWeight: 700, color: '#d5af4c', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 16px' }}>Contact</p>
            <a
              href="mailto:globalgolfleague.ggl@gmail.com"
              style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', letterSpacing: '0.05em', wordBreak: 'break-all' }}
            >globalgolfleague.ggl@gmail.com</a>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', fontWeight: 700, color: '#d5af4c', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 16px' }}>Follow Us</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="https://www.instagram.com/global_golf_league/"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >Instagram</a>
              <a
                href="https://www.tiktok.com/@global_golf_league"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >TikTok</a>
            </div>
          </div>

        </div>

        <div style={{ maxWidth: '500px', margin: '32px auto 0', borderTop: '1px solid rgba(213,175,76,0.2)', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase' }}>Designed & Built for Global Golf League</p>
        </div>
      </footer>

      {/* MODAL */}
      {showModal && <EntryModal onClose={() => setShowModal(false)} />}

    </div>
  )
}

export default MobileApp