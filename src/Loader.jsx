export default function Loader() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#0f132a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '400px', height: '400px', objectFit: 'contain' }}
      >
        <source src="/Loader.mp4" type="video/mp4" />
      </video>
    </div>
  )
}