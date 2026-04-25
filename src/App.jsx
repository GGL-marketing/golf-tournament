import heroVideo from './assets/hero-video.mp4'
import gglLogo from './assets/GGL_LOGO.png'
import prizesImage from './assets/plain_image.webp'
import holeInOneImage from './assets/hole_in_1.webp'
import shootYourShotBg from './assets/arial_golf_balls_background2.webp'
import postcardImage from './assets/postcard_image_1.webp'
import postcardImage2 from './assets/postcard_image_2.webp'
import postcardImage3 from './assets/postcard_image_3.webp'
import PillNav from './PillNav'
import SplitText from './SplitText'
import ShinyText from './ShinyText'
import CircleAnnotation from './CircleAnnotation'
import MagicBento from './MagicBento'
import { useRef } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

function App() {
  const confettiRef = useRef(null)

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#d5af4c', '#f0d080', '#b8960a', '#fff8dc', '#e4ba4f', '#c9981a'],
      scalar: 1.2,
    })
  }

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
        <div style={{ borderTop: '1px solid #d5af4c', borderBottom: '1px solid #d5af4c', padding: '16px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#ffffff', margin: 0 }}>Next Tournament: 17–18 December 2026</p>
          <span style={{ color: '#d5af4c', fontSize: '1.5rem' }}>•</span>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#ffffff', margin: 0 }}>Hosted at Rondebosch Golf Club</p>
        </div>
        <div style={{ padding: '60px 40px', textAlign: 'center', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '80px', backgroundColor: '#d5af4c' }} />
            <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '1rem', color: '#ffffff', letterSpacing: '0.2em', margin: 0, textTransform: 'uppercase' }}>Limited Spots</p>
            <div style={{ height: '1px', width: '80px', backgroundColor: '#d5af4c' }} />
          </div>
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2.5rem, 7vw, 6rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.1, margin: '0 0 32px 0', textTransform: 'uppercase', position: 'relative', display: 'inline-block' }}>
            Your Season<br />Starts Now.
            <span style={{ position: 'absolute', right: '-300px', top: '50%', transform: 'translateY(-50%)', fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '1.9rem', color: '#ffffff', whiteSpace: 'nowrap', lineHeight: 1.3, textTransform: 'none', fontWeight: 400 }}>
              <CircleAnnotation>AMAZING{'\n'}Prizes</CircleAnnotation>
            </span>
          </h2>
          <div style={{ height: '1px', backgroundColor: '#d5af4c', maxWidth: '600px', margin: '0 auto 40px' }} />
          <a href="#join" style={{ textDecoration: 'none' }}>
            <button className="claim-btn">CLAIM MY SPOT</button>
          </a>
        </div>
      </section>

      {/* PRIZES SECTION */}
      <section id="prizes" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0f132a', minHeight: '600px' }}>
        <img src={prizesImage} alt="Golf course" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center', opacity: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,19,42,0.98) 0%, rgba(15,19,42,0.92) 35%, rgba(15,19,42,0.5) 60%, rgba(15,19,42,0.15) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0f132a 0%, transparent 8%, transparent 92%, #0f132a 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 10px 80px 300px', width: '55%' }}>
          <div style={{ display: 'inline-block', border: '2px solid #d5af4c', borderRadius: '50px', padding: '10px 40px', marginBottom: '48px' }}>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.2rem, 3vw, 2rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '0.3em' }}>PRIZES</span>
          </div>
          <MagicBento textAutoHide={false} enableStars={true} enableSpotlight={true} enableBorderGlow={true} enableTilt={true} enableMagnetism={true} clickEffect={true} spotlightRadius={200} particleCount={10} glowColor="213, 175, 76" />
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#ffffff', marginTop: '40px', opacity: 0.9, textAlign: 'center', letterSpacing: '0.05em' }}>
            Top 10 players are awarded 50% off their next tournament entry
          </p>
        </div>
      </section>

      {/* HOLE IN ONE SECTION */}
      <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0f132a', height: '900px' }}>
        <img src={holeInOneImage} alt="Hole in one" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, #0f132a 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, #0f132a 0%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '15%', left: '27%', transform: 'translateY(-50%)', zIndex: 10 }}>
          <div ref={confettiRef} onMouseEnter={fireConfetti} style={{ backgroundColor: 'rgba(15, 19, 42, 0.85)', border: '2px solid #d5af4c', borderRadius: '12px', padding: '16px 28px', display: 'inline-block', cursor: 'default' }}>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block' }}>2 Million Rand</span>
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: '#ffffff', letterSpacing: '0.02em', display: 'block', paddingLeft: '8px' }}>hole-in-1</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '600px', left: '27%', zIndex: 10 }}>
          <a href="#join" style={{ textDecoration: 'none' }}>
            <button className="claim-btn enter-btn">ENTER NOW</button>
          </a>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(15, 19, 42, 0.92)', borderTop: '1px solid #d5af4c', borderBottom: '1px solid #d5af4c', padding: '18px 40px', textAlign: 'center', zIndex: 10 }}>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#ffffff', letterSpacing: '0.05em', margin: 0, opacity: 0.9 }}>
            Two chances at 2 Million Rand. Hole in one, Par 4. T's and C's apply.
          </p>
        </div>
      </section>

      {/* SHOOT YOUR SHOT SECTION */}
      <section style={{ position: 'relative', backgroundColor: '#0f132a' }}>

        {/* Background image — full size, no cropping */}
        <img
          src={shootYourShotBg}
          alt=""
          style={{ display: 'block', width: '100%', height: 'auto', opacity: 0.6, pointerEvents: 'none' }}
        />

        {/* Top & bottom navy fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0f132a 0%, transparent 10%, transparent 90%, #0f132a 100%)', pointerEvents: 'none' }} />

        {/* Content overlaid on top */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 10, padding: '70px 40px 60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Heading with double lines */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px', width: '100%', maxWidth: '900px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
              <div style={{ height: '2px', backgroundColor: '#d5af4c' }} />
              <div style={{ height: '2px', backgroundColor: '#d5af4c' }} />
            </div>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 900, color: '#ffffff', letterSpacing: '0.15em', margin: 0, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Shoot Your Shot
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
              <div style={{ height: '2px', backgroundColor: '#d5af4c' }} />
              <div style={{ height: '2px', backgroundColor: '#d5af4c' }} />
            </div>
          </div>

          {/* Two column layout */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', width: '100%', maxWidth: '1100px' }}>

            {/* Left — staggered bullet points */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '36px', marginTop: '60px' }}>

              {/* Bullet 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginLeft: '0%' }}>
                <span style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>🏆</span>
                <div>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 6px', textTransform: 'uppercase' }}>1 Mulligan</p>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase' }}>Over the 2 day tournament</p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginLeft: '8%' }}>
                <span style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>🏆</span>
                <div>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 6px', textTransform: 'uppercase' }}>Marshalls</p>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase' }}>To keep the pace of play</p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginLeft: '16%' }}>
                <span style={{ fontSize: '2.5rem', lineHeight: 1, flexShrink: 0 }}>🏆</span>
                <div>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.4rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 6px', textTransform: 'uppercase' }}>Broadcast Coverage</p>
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)', fontWeight: 400, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase' }}>The event will be live streamed</p>
                </div>
              </div>

            </div>

            {/* Right — tilted postcard image 1 (top right) */}
            <div style={{ position: 'absolute', right: '15%', top: '60px' }}>
              <img
                src={postcardImage}
                alt="GGL players on golf cart"
                style={{ width: '420px', borderRadius: '12px', transform: 'rotate(6deg)' }}
              />
            </div>

            {/* Postcard 2 — floating between Shoot Your Shot and FAQ */}
<div style={{ position: 'absolute', right: '15%', bottom: '-200px', zIndex: 20 }}>
  <img
    src={postcardImage2}
    alt="GGL golfer with flag"
    style={{ width: '420px', borderRadius: '12px', transform: 'rotate(-5deg)' }}
  />
</div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ position: 'relative', backgroundColor: '#0f132a', padding: '0 100px 80px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#ffffff', margin: '0 0 8px', letterSpacing: '0.05em' }}>FAQ's:</p>
          <div style={{ height: '1px', backgroundColor: '#d5af4c', maxWidth: '600px', margin: '0 auto 12px' }} />
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 900, color: '#d5af4c', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>Global Golf League</h2>
          <div style={{ height: '1px', backgroundColor: '#d5af4c', maxWidth: '600px', margin: '0 auto 12px' }} />
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#ffffff', margin: 0, letterSpacing: '0.05em' }}>GGL New Era Tournament</p>
        </div>

        {/* Two column layout */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px', maxWidth: '1100px', margin: '0 auto' }}>

          {/* Left — FAQ items */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px', paddingLeft: '40px' }}>

            <div>
              <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>What is the entry fee:</p>
              <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>The entry fee is as follows per division; Division 1: R3000, Division 2: R2000, Division 3: R1000</p>
            </div>

            <div>
              <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>How many balls per division:</p>
              <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>17 Three-Balls per division.</p>
            </div>

            <div>
              <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 8px', textTransform: 'uppercase' }}>How many players in total:</p>
              <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>There are spots available for 153 players at the tournament.</p>
            </div>

          </div>

          {/* Right — postcard 3 */}
<div style={{ position: 'absolute', right: '15%', top: '60px', zIndex: 20 }}>
  <img
    src={postcardImage3}
    alt="Golfer lining up putt"
    style={{ width: '420px', borderRadius: '12px', transform: 'rotate(6deg)' }}
  />
</div>

        </div>
      </section>

    </div>
  )
}

export default App