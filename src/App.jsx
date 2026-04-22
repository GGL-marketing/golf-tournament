import heroVideo from './assets/hero-video.mp4'
import gglLogo from './assets/GGL_LOGO.png'
import PillNav from './PillNav'
import SplitText from './SplitText'
import ShinyText from './ShinyText'
import CircleAnnotation from './CircleAnnotation'
import './App.css'

function App() {
  return (
    <div>
      {/* BANNER SECTION */}
      <section id="home" style={{ position: 'relative', height: '35vh', overflow: 'hidden', backgroundColor: '#0f132a' }}>

        {/* PillNav */}
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

        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            opacity: 0.4,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.7) 85%, #0f132a 100%)'
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px',
        }}>
          <h1 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 900,
            letterSpacing: '0.15em',
            margin: 0,
              marginTop: '8rem',
            textShadow: '0 0 40px rgba(213,175,76,0.4)',
          }}>
            <ShinyText
              text="GGL"
              color="#d5af4c"
              shineColor="#fff8dc"
              speed={3}
              spread={120}
              direction="left"
            />
          </h1>
          <SplitText
            text="Feel Like A Pro"
            tag="p"
            delay={80}
            duration={0.8}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className=""
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(0.8rem, 2.5vw, 1.4rem)',
              fontWeight: 400,
              color: '#ffffff',
              letterSpacing: '0.4em',
              marginTop: '1rem',
              textTransform: 'uppercase',
            }}
          />
        </div>

      </section>

      {/* TOURNAMENT SECTION */}
      <section id="tournament" style={{
        backgroundColor: '#0f132a',
        padding: '0',
      }}>

{/* Date Bar */}
<div style={{
  borderTop: '1px solid #d5af4c',
  borderBottom: '1px solid #d5af4c',
  padding: '16px 40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
}}>
  <p style={{
    fontFamily: "'The Foriene Serif', serif",
    fontStyle: 'italic',
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    color: '#ffffff',
    margin: 0,
  }}>
    Next Tournament: 17–18 December 2026
  </p>
  <span style={{ color: '#d5af4c', fontSize: '1.5rem' }}>•</span>
  <p style={{
    fontFamily: "'The Foriene Serif', serif",
    fontStyle: 'italic',
    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
    color: '#ffffff',
    margin: 0,
  }}>
    Hosted at Rondebosch Golf Club
  </p>
</div>

        {/* Main Content */}
        <div style={{
          padding: '60px 40px',
          textAlign: 'center',
          position: 'relative',
        }}>

          {/* Limited Spots */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}>
            <div style={{ height: '1px', width: '80px', backgroundColor: '#d5af4c' }} />
            <p style={{
              fontFamily: "'The Foriene Serif', serif",
              fontStyle: 'italic',
              fontSize: '1rem',
              color: '#ffffff',
              letterSpacing: '0.2em',
              margin: 0,
              textTransform: 'uppercase',
            }}>
              Limited Spots
            </p>
            <div style={{ height: '1px', width: '80px', backgroundColor: '#d5af4c' }} />
          </div>

          {/* Main Heading */}
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.1,
            margin: '0 0 32px 0',
            textTransform: 'uppercase',
            position: 'relative',
            display: 'inline-block',
          }}>
            Your Season<br />Starts Now.
            {/* Amazing Prizes bubble */}
            <span style={{
              position: 'absolute',
              right: '-300px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontFamily: "'The Foriene Serif', serif",
              fontStyle: 'italic',
              fontSize: '1.9rem',
              color: '#ffffff',
              whiteSpace: 'nowrap',
              lineHeight: 1.3,
              textTransform: 'none',
              fontWeight: 400,
            }}>
              <CircleAnnotation>
                AMAZING{'\n'}Prizes
              </CircleAnnotation>
            </span>
          </h2>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: '#d5af4c', maxWidth: '600px', margin: '0 auto 40px' }} />

          {/* Claim My Spot Button */}
          <a href="#join" style={{ textDecoration: 'none' }}>
            <button className="claim-btn">
              CLAIM MY SPOT
            </button>
          </a>

        </div>
      </section>

    </div>
  )
}

export default App