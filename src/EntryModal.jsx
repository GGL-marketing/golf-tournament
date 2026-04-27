import { useState } from 'react'
import Stepper, { Step } from './Stepper'

const getDivision = (handicap) => {
  const h = parseInt(handicap)
  if (h >= 0 && h <= 9) return 'Division 1'
  if (h >= 10 && h <= 17) return 'Division 2'
  if (h >= 18 && h <= 27) return 'Division 3'
  return null
}

export default function EntryModal({ onClose }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    handicap: '',
    home_club_name: '',
    home_club_email: '',
  })

  const division = form.handicap !== '' ? getDivision(form.handicap) : null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(213,175,76,0.4)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#ffffff',
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '0.85rem',
    letterSpacing: '0.05em',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '0.75rem',
    color: '#d5af4c',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '6px',
    display: 'block',
  }

  const headingStyle = {
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '1.1rem',
    fontWeight: 900,
    color: '#ffffff',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    margin: '0 0 24px',
  }

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#0f132a', border: '1px solid #d5af4c', borderRadius: '16px', width: '100%', maxWidth: '580px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>

        {/* Close button */}
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer', zIndex: 10 }}>✕</button>

        {/* Title */}
        <div style={{ textAlign: 'center', padding: '40px 40px 0' }}>
          <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '1rem', color: '#ffffff', margin: '0 0 8px', opacity: 0.7 }}>GGL New Era Tournament</p>
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 900, color: '#ffffff', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Claim Your Spot</h2>
          <div style={{ height: '1px', backgroundColor: '#d5af4c', margin: '16px auto 0', maxWidth: '200px' }} />
        </div>

        {/* Stepper */}
        <Stepper
          initialStep={1}
          backButtonText="Back"
          nextButtonText="Next"
          onFinalStepCompleted={() => alert('Form submitted!')}
          disableStepIndicators={false}
        >

          {/* Step 1 — Personal Details */}
          <Step>
            <p style={headingStyle}>Personal Details</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="John Smith" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" style={inputStyle} />
              </div>
            </div>
          </Step>

          {/* Step 2 — Golf Details */}
          <Step>
            <p style={headingStyle}>Golf Details</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Handicap</label>
                <input name="handicap" type="number" min="0" max="27" value={form.handicap} onChange={handleChange} placeholder="0 – 27" style={inputStyle} />
                {division && (
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', color: '#d5af4c', margin: '8px 0 0', letterSpacing: '0.1em' }}>→ {division}</p>
                )}
                {form.handicap !== '' && !division && (
                  <p style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', color: '#ff6b6b', margin: '8px 0 0' }}>Handicap must be between 0 and 27</p>
                )}
              </div>
              <div>
                <label style={labelStyle}>Home Club Name</label>
                <input name="home_club_name" value={form.home_club_name} onChange={handleChange} placeholder="Rondebosch Golf Club" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Home Club Contact Email</label>
                <input name="home_club_email" type="email" value={form.home_club_email} onChange={handleChange} placeholder="secretary@club.co.za" style={inputStyle} />
                <p style={{ fontFamily: "'The Foriene Serif', serif", fontStyle: 'italic', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', margin: '8px 0 0', lineHeight: 1.5 }}>
                  We contact your home club to verify your official handicap and ensure fair play across all divisions.
                </p>
              </div>
            </div>
          </Step>

          {/* Step 3 — Review */}
          <Step>
            <p style={headingStyle}>Review & Pay</p>
            <div style={{ backgroundColor: 'rgba(213,175,76,0.05)', border: '1px solid rgba(213,175,76,0.2)', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#d5af4c', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Name</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#ffffff' }}>{form.full_name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#d5af4c', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Email</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#ffffff' }}>{form.email}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#d5af4c', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Handicap</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#ffffff' }}>{form.handicap}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#d5af4c', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Division</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#ffffff' }}>{division}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#d5af4c', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Home Club</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.75rem', color: '#ffffff' }}>{form.home_club_name}</span>
              </div>
              <div style={{ height: '1px', backgroundColor: 'rgba(213,175,76,0.2)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', color: '#d5af4c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>Entry Fee</span>
                <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.85rem', color: '#ffffff', fontWeight: 700 }}>
                  {division === 'Division 1' ? 'R3,000' : division === 'Division 2' ? 'R2,000' : 'R1,000'}
                </span>
              </div>
            </div>
          </Step>

        </Stepper>
      </div>
    </div>
  )
}