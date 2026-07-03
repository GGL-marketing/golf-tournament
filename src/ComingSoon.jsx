import gglLogo from './assets/GGL_LOGO.png'

export default function ComingSoon() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#0f132a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px'
    }}>
      <img src={gglLogo} alt="GGL Logo" style={{ width: '120px', marginBottom: '40px' }} />
      <div style={{ height: '1px', backgroundColor: '#d5af4c', width: '200px', margin: '0 auto 40px' }} />
      <h1 style={{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: 'clamp(2rem, 8vw, 4rem)',
        fontWeight: 900,
        color: '#d5af4c',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        margin: '0 0 24px'
      }}>Coming Soon</h1>
      <p style={{
        fontFamily: "'The Foriene Serif', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        color: '#ffffff',
        margin: '0 0 40px',
        lineHeight: 1.6,
        maxWidth: '500px'
      }}>
        We're working on something great. Stay tuned for updates from the Global Golf League.
      </p>
      <div style={{ height: '1px', backgroundColor: '#d5af4c', width: '200px', margin: '0 auto' }} />
    </div>
  )
}