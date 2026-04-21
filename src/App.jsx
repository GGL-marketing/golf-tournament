import heroVideo from './assets/hero-video.mp4'
import gglLogo from './assets/GGL_LOGO.png'
import PillNav from './PillNav'
import SplitText from './SplitText'
import './App.css'
import ShinyText from './ShinyText'

function App() {
  return (
    <div>
      {/* BANNER SECTION */}
      <section id="home" style={{ position: 'relative', height: '35vh', overflow: 'hidden', backgroundColor: '#0a1628' }}>

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
          background: 'linear-gradient(to bottom, rgba(10,22,40,0.3) 0%, rgba(10,22,40,0.7) 100%)'
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
    </div>
  )
}

export default App