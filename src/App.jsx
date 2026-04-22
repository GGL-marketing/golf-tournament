import heroVideo from './assets/hero-video.mp4'
import gglLogo from './assets/GGL_LOGO.png'
import prizesImage from './assets/plain_image.webp'
import holeInOneImage from './assets/hole_in_1.webp'
import PillNav from './PillNav'
import SplitText from './SplitText'
import ShinyText from './ShinyText'
import CircleAnnotation from './CircleAnnotation'
import MagicBento from './MagicBento'
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

      {/* PRIZES SECTION */}
      <section id="prizes" style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f132a',
        minHeight: '600px',
      }}>

        {/* Background image */}
        <img
          src={prizesImage}
          alt="Golf course"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'right center',
            opacity: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Left-to-right gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(15,19,42,0.98) 0%, rgba(15,19,42,0.92) 35%, rgba(15,19,42,0.5) 60%, rgba(15,19,42,0.15) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Top & bottom navy fade */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #0f132a 0%, transparent 8%, transparent 92%, #0f132a 100%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '100px 10px 80px 300px',
          width: '55%',
        }}>

          {/* PRIZES badge */}
          <div style={{
            display: 'inline-block',
            border: '2px solid #d5af4c',
            borderRadius: '50px',
            padding: '10px 40px',
            marginBottom: '48px',
          }}>
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.3em',
            }}>
              PRIZES
            </span>
          </div>

          {/* MagicBento cards */}
          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={200}
            particleCount={10}
            glowColor="213, 175, 76"
          />

          {/* Bonus note */}
          <p style={{
            fontFamily: "'The Foriene Serif', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#ffffff',
            marginTop: '40px',
            opacity: 0.9,
            textAlign: 'center',
            letterSpacing: '0.05em',
          }}>
            Top 10 players are awarded 50% off their next tournament entry
          </p>

        </div>
      </section>

      {/* HOLE IN ONE SECTION */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f132a',
        height: '900px',
      }}>

        {/* Background image */}
        <img
          src={holeInOneImage}
          alt="Hole in one"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            pointerEvents: 'none',
          }}
        />

        {/* Top navy fade */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, #0f132a 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Bottom navy fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, #0f132a 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        {/* Text overlay — centre left, vertically centred */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '8%',
          transform: 'translateY(-50%)',
          zIndex: 10,
        }}>
          <div style={{
            backgroundColor: 'rgba(15, 19, 42, 0.85)',
            border: '2px solid #d5af4c',
            borderRadius: '12px',
            padding: '16px 28px',
            display: 'inline-block',
            marginBottom: '12px',
          }}>
            <span style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              2 Million Rand
            </span>
          </div>
          <div style={{ paddingLeft: '8px' }}>
            <span style={{
              fontFamily: "'The Foriene Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              color: '#ffffff',
              letterSpacing: '0.02em',
            }}>
              hole-in-1
            </span>
          </div>
        </div>

        {/* Bottom navy bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(15, 19, 42, 0.92)',
          borderTop: '1px solid #d5af4c',
          borderBottom: '1px solid #d5af4c',
          padding: '18px 40px',
          textAlign: 'center',
          zIndex: 10,
        }}>
          <p style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(0.7rem, 1.2vw, 1rem)',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '0.2em',
            margin: 0,
            textTransform: 'uppercase',
          }}>
            Two chances at 2 Million Rand. Hole in one, Par 4. T's and C's apply.
          </p>
        </div>

      </section>

    </div>
  )
}

export default App