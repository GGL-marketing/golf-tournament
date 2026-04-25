export default function Success() {
  return (
    <div style={{ backgroundColor: '#0f132a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, color: '#d5af4c', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>You're In!</h1>
      <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '1.4rem', color: '#ffffff', marginBottom: '40px' }}>Your entry has been confirmed. See you on the course.</p>
      <a href="/" style={{ textDecoration: 'none' }}><button className="claim-btn">BACK TO HOME</button></a>
    </div>
  )
}